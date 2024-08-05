import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { ListSubheader, } from '@mui/material';
// import { UserValue } from '../../userContext';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function DashBoard() {

  const us = useSelector((state) => state.Auth.AuthUser);
  const token = useSelector((state) => state.Auth.token);
  // console.log(us, token, "hkkjhkkhkhkhkhkhkh888");
  const navigate = useNavigate();
 
  const handleNavigation = (path) => {
    navigate(path);
  };
  return (
    <Box sx={{ flexGrow: 1,  padding:2}}>
      <Grid container sx={{display:"flex", flexDirection:{xs:"column", sm:"row" , justifyContent:"space-between",}} } >
        <Grid item xs={12} sm={4} >
          <Item square elevation={0} sx={{backgroundColor:"lightpink"}}>
        
            <List
             subheader={
              
              <ListSubheader component="div" id="nested-list-subheader">
              Overview
              </ListSubheader>
            }
            >
             <ListItem  sx={{display:"flex", flexDirection:"column", alignItems:"flex-start"}}>
               <ListItemText primary="Inbox"/>
               <ListItemText primary="Inbox"/>
               <ListItemText primary="Inbox"/>
               <ListItemText primary="Inbox"/>
             </ListItem>
            </List>
          
          </Item>
        </Grid>
        <Grid item xs={12} sm={8} sx={{display:"flex", justifyContent:"space-evenly",alignItems:"center",flexWrap:"wrap" , backgroundColor:"gainsboro"}}>
          <Item square elevation={0} sx={{borderRadius:'50%',width:"150px", height:"150px", border:"thick solid white", backgroundColor:"darkorange" , display:"flex",justifyContent:"center", alignItems:"center" }}   onClick={() => handleNavigation('/seller/productManagement')}>Product Management</Item>
          <Item square elevation={0} sx={{borderRadius:'50%',width:"150px", height:"150px",border:"thick solid white",  backgroundColor:"darkorange", display:"flex", justifyContent:"center", alignItems:"center"}}>Order Management</Item>
          <Item square elevation={0} sx={{borderRadius:'50%',width:"150px", height:"150px", border:"thick solid white", backgroundColor:"darkorange", display:"flex", justifyContent:"center", alignItems:"center"}}>Account Setting</Item> 
         
          
        </Grid>  
      </Grid>
    </Box>
  );
}
