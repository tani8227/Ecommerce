
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// import { Typography } from '@mui/material';
import { Card, CardMedia, Box } from '@mui/material';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import { IconButton } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
// import ImgPriceComponent from './ImgPriceComponent';
import ImgItemDetailsComponent from './ImgItemDetailsComponent';
// import ImgComponent from './ImgComponent';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import ImgDisplayComponent from './ImgDisplayComponent';
import useGetOneItem from '../utility/useGetOneItem';
import { useDispatch } from 'react-redux';
import { Actions } from '../../reducers/AuthReducer';

const theme = createTheme({
    components: {
        MuiCardMedia: {
            styleOverrides: {
                root: {
                    width: "50%",


                },
            },
        },
    },
});



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



export default function ImgPreviewComponent() {


  
  
    const param = useParams();
    const [product, setProduct] = useState({});
    const [selectedimgurl, setSelectedimgurl] = useState({});
   
    const { item: data } = useGetOneItem(param.id);

    
    useEffect(() => {
        
        
        if (data && data.imgUrl && data.imgUrl.length > 0) {
            setProduct(data);
            
        }
        
    }, [data])
  
    function handleclickimg(imgurl) {
        
       
        setSelectedimgurl(imgurl);
    }

    return (
        <Box padding={0} sx={{ display: "flex", flexDirection:{xs:"column", sm:"row"}, justifyContent:{sm:"flex-start"},width: "100%"}} >

            <Grid container sx={{ display: 'flex', flexDirection: {xs:"column",sm:"column" ,md:"column"},justifyContent:{ sx:"center", sm:"flex-start",md:"flex-start", lg:"flex-start"},  backgroundColor:"white",gap:1 }} >
                <Box sx={{display:"flex", flexDirection:{xs:"column-reverse",sm:'column-reverse', md:"row"}, justifyContent:{xs:"center",sm:"center", md:"flex-start"}, alignItems:{xs:"center", md:"flex-start"}, flexWrap:"nowrap"} }>

                    <Grid item xs={12} sm={'auto'} padding={0} sx={{display:"flex", flexDirection:{  md:"column"},justifyContent:{xs:"center",sm:"center", md:"flex-start"},  backgroundColor:"red"}}>
                        {product.imgUrl && product.imgUrl.map((prod, index) =>
                        (
                            <Item key={prod} square elevation={0} padding={0} sx={{ position: "relative", justifyContent: { xs: "center" }, alignItems: { xs: "center" }, }} >
                                <Card square elevation={0} sx={{ minWidth: "50px", border: " 1px solid lightgrey", padding: "1px" }}>
                                    <ThemeProvider theme={theme}>
                                        <CardMedia className='xs-phone-width'


                                            component="img"
                                            sx={{ margin: "auto", width: "70px", height:"70px", objectFit:"contain" }}
                                            image={`${prod}`}
                                            onClick={() => handleclickimg(prod)}
                                            alt="iphome-14"
                                        />

                                    </ThemeProvider>

                                </Card>
                            </Item>
                        ))}
                    </Grid>
                    <Grid elevation={0} item sm={'auto'} sx={{ display: "flex",justifyContent:"center", width: "fit-content" }} >
                        <Item >

                            <ImgDisplayComponent img={selectedimgurl} id={param.id} />
                        </Item>

                    </Grid>
                </Box>


                <Grid item xs={12} sm={6} sx={{display:"flex", width:{md:"70%"}}} >

                    <ImgItemDetailsComponent Item={product} />

                </Grid>
            </Grid>


        </Box>
    )
}