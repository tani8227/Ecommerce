
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { List, ListItem, Typography } from '@mui/material';
import { Box } from '@mui/material';
// import {  createTheme } from '@mui/material/styles';





// const theme = createTheme({
//     components: {
//         MuiCardMedia: {
//             styleOverrides: {
//                 root: {
//                     width: "50%",


//                 },
//             },
//         },
//     },
// });



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));



export default function ImgDiscriptionComponent() {


    return (
        <Box  padding={0}>
           
        <Grid container padding={1} >
            <Grid item  xs={12} sm={12} sx={{ display: "flex", flexDirection: "column", padding: "10px" }} >

                <Item square elevation={0}  >
                <Typography variant='h6' color={'black'}  sx={{ padding: 0, margin: 0 }} >
                    Apple iPhone 14 Plus (Blue, 128 GB)
                </Typography>
                    <List sx={{ padding: 0, marginTop: '15px' }} >
                        <ListItem sx={{ padding: 0, margin: 0, display: 'list-item', listStyleType: 'disc', }}>
                            <Typography variant='body2'>
                                Apple iPhone 14 Plus (Blue, 128 GB)
                            </Typography>
                        </ListItem>
                    </List>
                    <List sx={{ padding: 0, margin: 0 }}>
                        <ListItem sx={{ padding: 0, margin: 0, display: 'list-item', listStyleType: 'disc', }}>
                            <Typography variant='body2'>
                                Apple iPhone 14 Plus (Blue, 128 GB)
                            </Typography>
                        </ListItem>
                    </List>
                    <List sx={{ padding: 0, margin: 0 }}>
                        <ListItem sx={{ padding: 0, margin: 0, display: 'list-item', listStyleType: 'disc', }}>
                            <Typography variant='body2'>
                                Apple iPhone 14 Plus (Blue, 128 GB)
                            </Typography>
                        </ListItem>
                    </List>
                    <List sx={{ padding: 0, margin: 0 }}>
                        <ListItem sx={{ padding: 0, margin: 0, display: 'list-item', listStyleType: 'disc', }}>
                            <Typography variant='body2'>
                                Apple iPhone 14 Plus (Blue, 128 GB)
                            </Typography>
                            <Typography variant='body2'>
                                Apple iPhone 14 Plus (Blue, 128 GB)
                            </Typography>
                        </ListItem>
                    </List>
                </Item>

            </Grid>
        </Grid>
        </Box>
    )
}