import React, { useState } from 'react';
import { styled, alpha, } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Applogo from '../images/navbarImages/logo.png';
import Grid from '@mui/material/Grid';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import TemporaryDrawer from './Drawer.js';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { useDispatch, useSelector } from 'react-redux';
import { Actions } from '../reducers/AuthReducer.js';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '46ch',
    },
    backgroundColor: ''
  },
}));

export default function Navbar() {

   const User=useSelector((state)=>state.Auth.AuthUser);
 
   const Dispatch= useDispatch();
  //  console.log(User)
  
   

  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      sx={{ width: 'auto', height: 'auto', top: '30px', left: '25px' }}

    >
      <MenuItem onClick={handleMenuClose}><NavLink to={'/seller/dashboard'}>Profile</NavLink></MenuItem>
      <MenuItem onClick={handleMenuClose}><NavLink to={'/seller/dashboard'}>My Account</NavLink></MenuItem>
      <MenuItem onClick={handleMenuClose}><NavLink to={'/buyer/signin'}>Log In</NavLink></MenuItem>
      <MenuItem onClick={()=>{Dispatch(Actions.Logout(), handleMenuClose())}}>Logout</MenuItem>
     
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box >
      <AppBar position="sticky" sx={{ boxShadow: "none" }}>
        <Toolbar>
          <Grid container  sx={{ flexGrow: 1, display: "flex", justifyContent: "space-evenly", alignItems:"center" }}>
            <Grid item xs={1} sm={2} >
              <Item square elevation={0} sx={{ display: { xs: 'flex', sm: "none", justifyContent: 'center', backgroundColor: 'transparent' } }}>

                <TemporaryDrawer />

              </Item>

              <Item square elevation={0} sx={{ display: { xs: 'none', sm: "block", backgroundColor: "transparent" } }}>

                <img src={Applogo} style={{ width: '4rem' }} alt="App Logo" />

              </Item>
            </Grid>

            <Grid item sx={{ width: { xs: '60%' }}} sm={4} md={5}>
              <Item square elevation={0} sx={{ backgroundColor: "transparent" }}>

                <Search sx={{ color: "white" }} >
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} id="search-bar"
                    name="search-bar" />
                </Search>
              </Item>
            </Grid>
            <Grid item xs={5} sx={{ display: "flex", justifyContent:"space-evenly", alignItems:"center", }}>
              <Item square elevation={0} sx={{ display: { xs: 'none', sm: 'block', backgroundColor: "transparent", color: "white" } }}>
                <IconButton
                  size="medium"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                  <Typography variant="body2"  sx={{fontSize:'18px', }}>
                    {`${localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')).name:"Login"}`}
                  </Typography>
                  <KeyboardArrowDownIcon />
                </IconButton>
              </Item>

              <Item square elevation={0}  sx={{ display: { xs: 'none', sm: 'block', backgroundColor: "transparent", color: "white", justifyContent:"center" } }}>

                <IconButton
                  size="large"
                  edge="end"
                  color="inherit"
                >

                  <ShoppingCartOutlinedIcon sx={{ fontSize: 25, mr: '3px' }} />
                  <Typography variant='body2' sx={{ fontSize:'16px', display:{sm:"none", lg:"block" } }}>Cart
                  </Typography>
                </IconButton>
              </Item>

              <Item square elevation={0} sx={{ display: { xs: 'none', sm: 'block', justifyContent: "center", backgroundColor: "transparent", color: "white" } }}>

                <IconButton
                  size="large"
                  edge="end"
                  color="inherit"
                >

                 <NavLink to={'/seller/signup'} style={{textDecoration:"none",display:"flex", flexDirection:'row', justifyContent:"center", alignItems:"center", color:"white"}}>
                  <StorefrontIcon sx={{ fontSize: 25, mr: '3px' }} />
                  <Typography variant='body2' sx={{ fontSize:'16px' ,display:{sm:"none", lg:"block" }}}>Become a Seller
                  </Typography>
                 </NavLink>
                </IconButton>
              </Item>

              <Item square elevation={0} sx={{ display: { xs: 'none', sm: 'block', backgroundColor: "transparent", justifyContent: "center", color: "white" } }}>

                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </Item>

            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}

      <Outlet />
    </Box>
  );
}
