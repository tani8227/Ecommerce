import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Card, CardMedia, CardActions, Box,  Button } from '@mui/material';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import { ThemeProvider, createTheme } from '@mui/material/styles';
// import { useDispatch, useSelector } from 'react-redux';
// import { Actions } from '../../reducers/AuthReducer';
// import ImgPriceComponent from './ImgPriceComponent';
// import { useParams, Link } from 'react-router-dom';
import useGetOneItem from '../utility/useGetOneItem';



const theme = createTheme({
    components: {
        MuiCardMedia: {
            styleOverrides: {
                root: {
                    width: 'fit-content',
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

export default function ImgDisplayComponent(props) {

    const [defaultImg, setDefaultImg] = useState()


    const { item: data } = useGetOneItem(props.id);

       
    useEffect(() => {
        if (data && data.imgUrl && data.imgUrl.length > 0) {
            setDefaultImg(data.imgUrl[0]);
        }
    }, [data]); 

    
    return (

        <ThemeProvider theme={theme}>
            <Box padding={0}>
                <Grid

                    container
                    sx={{ xs: { display: 'flex', flexWrap: 'wrap' }, justifyContent: 'center', }}
                >
                    <Grid
                        item
                        xs={12}
                        padding={0}
                        sx={{ display: 'flex' }}
                    >
                        <Item

                            square
                            elevation={0}
                            sx={{ position: 'relative', justifyContent: { xs: 'center' }, alignItems: { xs: 'center' } }}
                        >

                            <Card square elevation={0} sx={{ width: "280px",height:"280px", objectFit:"contain"}}>
                                <CardMedia
                                    component="img"
                                    sx={{ margin: 'auto', width:"280px", height:"280px", objectFit:"contain" }}
                                    image={`${props.img.length === undefined ? defaultImg : props.img}`}
                                    alt={`iphone-14`}
                                />
                            </Card>
                            <CardActions sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: { xs: "center" }, justifyContent: { sm: "center" } }}>

                                <Button variant='contained' sx={{ backgroundColor: "#ff9f00" }}>

                                    ADD TO CART
                                </Button>
                                &nbsp;
                                <Button variant='contained' sx={{ backgroundColor: "#fb641b" }}>

                                    BUY NOW
                                </Button>

                            </CardActions>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider >

    );
}
