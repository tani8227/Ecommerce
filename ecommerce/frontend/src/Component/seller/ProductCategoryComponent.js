import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { ListSubheader } from '@mui/material';
import { Link } from 'react-router-dom';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ProductCategory() {
  // const {Authuser}=UserValue();
  // console.log(Authuser,"nhhhhh");
  return (
    <Box sx={{ flexGrow: 1,}}>
      <Grid container sx={{display:"flex", flexDirection:{xs:"column", sm:"row" , justifyContent:"space-between",}} } >
        <Grid item xs={12}  >
          <Item square elevation={0} sx={{backgroundColor:"lightpink"}}>
        
            <List
             subheader={
              
              <ListSubheader component="div" id="nested-list-subheader">
              Sellect the type of product
              </ListSubheader>
            }
            >
             <ListItem  sx={{display:"flex", flexDirection:"column", alignItems:"flex-start"}}>
               <Link to={'/seller/addmobile'}>
               <ListItemText primary="mobiles"/>
               </Link>
          
               <Link to={'/seller/addfashions'}>
               <ListItemText primary="fashions"/>
               </Link>
    
               <Link to={'/seller/addmobile'}>
               <ListItemText primary="electronics"/>
               </Link>
               <Link to={'/seller/addmobile'}>
               <ListItemText primary="appliances"/>
               </Link>
               <Link to={'/seller/addmobile'}>
               <ListItemText primary="groceries"/>
               </Link>
             </ListItem>
            </List>
          
          </Item>
          <Item square elevation={0} sx={{backgroundColor:"lightpink"}}>
        
            <List
             subheader={
              
              <ListSubheader component="div" id="nested-list-subheader">
              Sellect the type of product
              </ListSubheader>
            }
            >
             <ListItem  sx={{display:"flex", flexDirection:"column", alignItems:"flex-start"}}>
               <ListItemText primary="mobiles"/>
               <ListItemText primary="laptops"/>
               <ListItemText primary="electronics"/>
               <ListItemText primary="fashions"/>
               <ListItemText primary="groceries"/>
               <ListItemText primary="appliances"/>
             </ListItem>
            </List>
          
          </Item>
          <Item square elevation={0} sx={{backgroundColor:"lightpink"}}>
        
            <List
             subheader={
              
              <ListSubheader component="div" id="nested-list-subheader">
              Sellect the type of product
              </ListSubheader>
            }
            >
             <ListItem  sx={{display:"flex", flexDirection:"column", alignItems:"flex-start"}}>
               <ListItemText primary="mobiles"/>
               <ListItemText primary="laptops"/>
               <ListItemText primary="electronics"/>
               <ListItemText primary="fashions"/>
               <ListItemText primary="groceries"/>
               <ListItemText primary="appliances"/>
             </ListItem>
            </List>
          
          </Item>
        </Grid>
       
      </Grid>
    </Box>
  );
}
