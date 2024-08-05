import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import grocery from '../images/porductbarImages/grocery.png';
import fashion from '../images/porductbarImages/fashion.png';
import mobile from '../images/porductbarImages/mobile.png';
import electronics from "../images/porductbarImages/electronics.png";
import appliances from '../images/porductbarImages/appliances.png';
import manymore from '../images/porductbarImages/toy&manyMore.png';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Home() {
    

    // const us = useSelector((state) => state.Auth.AuthUser);
    // const token = useSelector((state) => state.Auth.token);
    // console.log(us, token, "hkkjhkkhkhkhkhkhkh888");

    return (
        <Box sx={{ padding:{ sm:2}, flexGrow: 1, overflowX: 'auto',  backgroundColor:{xs:'white', sm:"#f1f2f4"} }}>
            <Grid container spacing={0} sx={{ display: 'flex', flexWrap: 'nowrap', justifyContent: { xs: 'flex-start', sm: 'space-evenly' }, alignItems: 'center', backgroundColor:'white'}}>
                <Grid item xs={6} sm={1}>
                    <Link to={"/Grocery"} style={{listStyle:'none', textDecoration:'none'}}>
                    <Item square elevation={0} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '90px' }}>
                        <img src={grocery} alt='Grocery' style={{ width: '84px' }} />
                        <Typography fontSize={15} color={'black'}>Grocery</Typography>
                    </Item>
                    </Link>
                </Grid>
                <Grid item xs={6} sm={1}>
                <Link to={"/Mobile"} style={{listStyle:'none', textDecoration:'none'}}>
                    <Item square elevation={0} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '90px' }}>
                        <img src={mobile}  alt='Mobile' style={{ width: '80px' }} />
                        <Typography fontSize={15} color={'black'}>Mobile</Typography>
                    </Item>
                    </Link>
                </Grid>
                <Grid item xs={6} sm={1}>
                <Link to={"/Fashion"} style={{listStyle:'none', textDecoration:'none'}}>
                    <Item square elevation={0} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '90px' }}>
                        <img src={fashion}  alt='Fashion'style={{ width: '66px' }} />
                        <Typography fontSize={15} color={'black'}>Fashion</Typography>
                    </Item>
                    </Link>
                </Grid>
                <Grid item xs={6} sm={1}>
                <Link to={"/Electronics"} style={{listStyle:'none', textDecoration:'none'}}>
                    <Item square elevation={0} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '90px' }}>
                        <img src={electronics} alt='Electronics' style={{ width: '80px' }} />
                        <Typography fontSize={15} color={'black'}>Electronics</Typography>
                    </Item>
                    </Link>
                </Grid>
                <Grid item xs={6} sm={1}>
                <Link to={"/Appliances"} style={{listStyle:'none', textDecoration:'none'}}>
                    <Item square elevation={0} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '90px' }}>
                        <img src={appliances} alt='Appliances' style={{ width: '92px' }} />
                        <Typography fontSize={15} color={'black'}>Appliances</Typography>
                    </Item>
                    </Link>
                </Grid>
                <Grid item xs={6} sm={1}>
                <Link to={"/ManyMore"} style={{listStyle:'none', textDecoration:'none'}}>
                    <Item square elevation={0} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '90px' }}>
                        <img src={manymore} alt='ManyMore' style={{ width: '79px' }} />
                        <Typography fontSize={15} color={'black'}>Many More</Typography>
                    </Item>
                    </Link>
                </Grid>
            </Grid>
         
            
        </Box>



    );
}
