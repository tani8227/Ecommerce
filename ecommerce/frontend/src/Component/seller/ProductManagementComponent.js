import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import { ListSubheader } from '@mui/material';
import ProductCategory from './ProductCategoryComponent.js';
import { Link } from 'react-router-dom';





const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function DashBoard() {


  return (
    <Box sx={{ flexGrow: 1,  padding:2}}>
      <Grid container sx={{display:"flex", flexDirection:{xs:"column", sm:"row" , justifyContent:"space-between", position:"relative"}} } >
        <Grid item xs={12} sm={4}  >
         <ProductCategory />
        </Grid>
        <Grid item xs={12} sm={8} sx={{display:"flex", justifyContent:"space-evenly",flexWrap:"wrap" , backgroundColor:"gainsboro", padding:2 }}>
          <Item square elevation={0} sx={{borderRadius:'50%',width:"150px", height:"150px", border:"thick solid white", backgroundColor:"darkorange" , display:"flex",justifyContent:"center", alignItems:"center"}}>
            Product Management
            </Item>
          <Item square elevation={0} sx={{borderRadius:'50%',width:"150px", height:"150px",border:"thick solid white",  backgroundColor:"darkorange", display:"flex", justifyContent:"center", alignItems:"center"}}>Order Management</Item>
          <Item square elevation={0} sx={{borderRadius:'50%',width:"150px", height:"150px", border:"thick solid white", backgroundColor:"darkorange", display:"flex", justifyContent:"center", alignItems:"center"}}>Account Setting</Item> 
         
          
        </Grid>  
      </Grid>
    </Box>
  );
}
