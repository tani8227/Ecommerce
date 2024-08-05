
import * as React from 'react';
import CardComponent from './CardComponent';
import { Link } from 'react-router-dom';
import HeadingCardComeponent from './HeadingCardComeponent';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect,  } from 'react';
import useGetAllItemsByComapanyName from '../utility/useGetItemByComepanyName';
import { useParams } from 'react-router-dom';
import { Actions } from '../../reducers/AuthReducer';

// import { createTheme } from '@mui/material/styles';


// const theme = createTheme({
//     components: {
//         MuiCardMedia: {
//             styleOverrides: {
//                 root: {
//                     width: "100%",


//                 },
//             },
//         },
//     },
// });



// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

export default function MobileList() {
     const [mobileList, setMobileList]= useState();
        
     const param = useParams();
    
     console.log(param.companyName);

        const mobilesData= useGetAllItemsByComapanyName('mobile',param.companyName );
        const Dispatch= useDispatch();
    useEffect(() => {
        if (mobilesData.AllProduct) {
            setMobileList(mobilesData.AllProduct);
            Dispatch(Actions.setMobileListData(mobilesData.AllProduct));
        }
    }, [mobilesData.AllProduct, Dispatch]);
    return (
        <>
            <HeadingCardComeponent MobileList={mobileList}/>
           <CardComponent MobileList={mobileList} />
        </>
    );
}
