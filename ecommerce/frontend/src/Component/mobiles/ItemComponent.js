import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
// import {  createTheme } from '@mui/material/styles';
import ImgDiscriptionComponent from './ImgDescriptionComponent.js';
import HeadingCardComeponent from './HeadingCardComeponent.js';
import ImgPreviewWrapperComponent from './ImgPreviewWrapperComponent.js';
import { useParams, } from 'react-router-dom';
import useGetOneItem from '../utility/useGetOneItem.js';
import { useEffect, useState } from 'react';
import ImgPreviewComponent from './ImgPreviewComponent.js';


// const theme = createTheme({
//     components: {
//         MuiCardMedia: {
//             styleOverrides: {
//                 root: {
//                     width: "100%",
//                     height: "auto",
//                 },
//             },
//         },
//     },
// });

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function ItemComponent() {

    const [Itemdata, setItemdata] = useState();
    const param = useParams();
    const oneItemdata = useGetOneItem(param.id);


    useEffect(() => {
        if (Itemdata === undefined) {
            setItemdata(oneItemdata);
        }
    }, [oneItemdata])

    return (

        // <ImgPreviewWrapperComponent oneItemdata={oneItemdata} />
        <ImgPreviewComponent oneItemdata={oneItemdata} />
    )}
