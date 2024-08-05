import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { FormGroup, TextField, Button, Box, styled, Paper } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect } from 'react';
import { uploadImage } from '../../utility/cloudnary';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const HiddenTextField = styled(TextField)({
    display: 'none',
});


export default function AddMobile() {

    const user = JSON.parse(localStorage.getItem('user')) || "";
    const [file, setFile] = useState([])
    const [product, setProduct] = useState(
        {
            companyName: '',
            seller_ref: `${user.id}`,
            imgUrl: [],
            price: '',
            modelNumber: '',
            modelName: '',
            color: '',
            displaySize: '',
            resolutionType: '',
            operatingSystem: '',
            processorBrand: '',
            processorCore: '',
            internalStorage: '',
            ram: '',
            expandableStorage: '',
            primaryCamera: '',
            secondaryCamera: '',
            videoRecording: '',
            digitalZoom: '',
            supportedNetworks: '',
            internetConnectivity: '',
            simSize: '',
            sensors: '',
            batteryCapacity: '',
            warranty: '',
            quantity: ""
        })


    useEffect(() => {
        console.log('Files state updated:', file);
    }, [file]);

    async function handlesubmit(e) {

        e.preventDefault();

        try {

            const uploads = await Promise.all(file.map(ele => uploadImage(ele)));
            product.imgUrl.push(...uploads);


            const response = await fetch("http://localhost:8000/api/v1/seller/mobile/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(product)
            });

            const data = await response.json();
            console.log(data);
        } catch (error) {

            console.error('Error adding mobile:', error);
        }
        setProduct({
            companyName: '',
            seller_ref: `${user.id}`,
            imgUrl: [],
            price: '',
            modelNumber: '',
            modelName: '',
            color: '',
            displaySize: '',
            resolutionType: '',
            operatingSystem: '',
            processorBrand: '',
            processorCore: '',
            internalStorage: '',
            ram: '',
            expandableStorage: '',
            primaryCamera: '',
            secondaryCamera: '',
            videoRecording: '',
            digitalZoom: '',
            supportedNetworks: '',
            internetConnectivity: '',
            simSize: '',
            sensors: '',
            batteryCapacity: '',
            warranty: '',
            quantity: ""
        })
    }
    async function handleChange(e) {


        const value = e.target.value
        const name = e.target.name




        if (e.target.files) {
            setFile(Array.from(e.target.files));


            // console.log(file);
            // console.log(typeof(file))
        }
        else {
            setProduct(
                {
                    ...product,
                    [name]: value
                });
        }

    }


    return (
        <>
            <Box sx={{ padding: 2, backgroundColor: "#00143c" }}>

                <Grid container sx={{ display: "flex", justifyContent: "center" }} >

                    <Grid item xs={8} sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", backgroundColor: "#ffcd00" }}>
                        <Item square elevation={0} >
                            Mobile
                        </Item>
                        <Item square elevation={0} sx={{ backgroundColor: "transparent", padding: 2, width: "100%" }}>
                            <form onSubmit={handlesubmit} method='post' encType="multipart/form-data" style={{ width: "100%" }} >

                                <FormGroup sx={{ width: "400px" }}>
                                    <FormControl sx={{ width: "400px" }}>
                                        <InputLabel
                                            id="company-name-label"
                                            required
                                            sx={{ fontWeight: 500, color: "black", backgroundColor: "transparent" }}
                                        >
                                            Company Name
                                        </InputLabel>
                                        <Select
                                            variant="standard"
                                            labelId="company-name-label"
                                            id="company-name"
                                            name="companyName"
                                            sx={{ margin: 2, textAlign: 'left' }}
                                            value={product.companyName}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={"Apple"}>Apple</MenuItem>
                                            <MenuItem value={"Samsung"}>Samsung</MenuItem>
                                            <MenuItem value={"OnePlus"}>OnePlus</MenuItem>
                                            <MenuItem value={"Realme"}>Realme</MenuItem>
                                            <MenuItem value={"Redmi"}>Redmi</MenuItem>
                                            <MenuItem value={"Vivo"}>Vivo</MenuItem>
                                            <MenuItem value={"Oppo"}>Oppo</MenuItem>
                                        </Select>
                                    </FormControl>


                                    <FormControl>
                                        <HiddenTextField
                                            type='hidden'
                                            variant="standard"
                                            name='user_ref'
                                            id='user_ref'
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            value={`${user.id}`}

                                            onChange={handleChange}
                                            required

                                        />
                                    </FormControl>

                                    <FormControl>
                                        <TextField
                                            type='text'
                                            variant="standard"
                                            name='modelName'
                                            id="Model-name"
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            value={product.modelName}
                                            label="Model Name"
                                            onChange={handleChange}
                                            required
                                            InputLabelProps={{
                                                style: { fontWeight: 500, color: "black" }
                                            }}
                                        />
                                    </FormControl>

                                    <FormControl>
                                        <TextField
                                            type='file'
                                            inputProps={{
                                                multiple: true
                                            }}
                                            variant="standard"
                                            name='imgUrl'
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            // value={product.imgUrl}
                                            onChange={handleChange}
                                            required

                                        />
                                    </FormControl>



                                    <FormControl>
                                        <TextField
                                            type='text'
                                            variant="standard"
                                            name='price'
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            value={product.price}
                                            label="Price"
                                            onChange={handleChange}
                                            required
                                            InputLabelProps={{
                                                style: { fontWeight: 500, color: "black" }
                                            }}

                                        />
                                    </FormControl>
                                    <FormControl>
                                        <TextField
                                            type='text'
                                            variant="standard"
                                            name='modelNumber'
                                            id='Model-Number'
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            value={product.modelNumber}
                                            label="Model Number"
                                            onChange={handleChange}
                                            required
                                            InputLabelProps={{
                                                style: { fontWeight: 500, color: "black" }
                                            }}
                                        />
                                    </FormControl>


                                    <FormControl>
                                       
                                        <TextField
                                            variant="standard"
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            labelId="Color-lable"
                                            name='color'
                                            id="Color"
                                            label="Color"
                                            value={product.color}
                                            onChange={handleChange}


                                        />
                                            
                                    </FormControl>


                                    <FormControl>

                                        <TextField
                                            variant="standard"

                                            id="display-Size"
                                            label="Display Size"
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            name='displaySize'
                                            value={product.displaySize}
                                            onChange={handleChange}
                                            InputLabelProps={{
                                                style: { fontWeight: 500, color: "black" }
                                            }}
                                            required

                                        />



                                    </FormControl>


                                    <FormControl>

                                        <TextField
                                            variant="standard"
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            name='resolutionType'
                                            id="resolution-Type"
                                            label="Resolution Type"
                                            value={product.resolutionType}
                                            onChange={handleChange}
                                            InputLabelProps={{
                                                style: { fontWeight: 500, color: "black" }
                                            }}
                                            required

                                        />


                                    </FormControl>
                                    <FormControl>


                                        <TextField
                                            variant="standard"

                                            sx={{ margin: 2, textAlign: 'left', }}
                                            name='operatingSystem'
                                            id="Operating-System"
                                            label="Operating System"
                                            value={product.operatingSystem}

                                            onChange={handleChange}
                                            InputLabelProps={{
                                                style: { fontWeight: 500, color: "black" }
                                            }}
                                            required

                                        />

                                    </FormControl>

                                    <FormControl>


                                        <TextField
                                            variant="standard"

                                            sx={{ margin: 2, textAlign: 'left', }}
                                            name='processorBrand'
                                            id="processor-Brand"
                                            value={product.processorBrand}
                                            label="processor Brand"
                                            onChange={handleChange}
                                            InputLabelProps={{
                                                style: { fontWeight: 500, color: "black" }
                                            }}
                                            required

                                        />

                                    </FormControl>

                                    <FormControl>

                                        <InputLabel id="processor-Core-lable" required sx={{ fontWeight: 500, color: "black" }}>Processor Core</InputLabel>
                                        <Select
                                            variant="standard"
                                            labelId="processor-Core-lable"
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            name='processorCore'
                                            id="processor-Core"
                                            value={product.processorCore}

                                            onChange={handleChange}

                                        >

                                            <MenuItem value={"Octa-Core<"}>Octa Core</MenuItem>
                                            <MenuItem value={"Hexa-Core"}>Hexa Core</MenuItem>

                                        </Select>
                                    </FormControl>

                                    <FormControl>

                                        <InputLabel id="internal-Storage-lable" required sx={{ fontWeight: 500, color: "black" }}>Internal Storage</InputLabel>
                                        <Select
                                            variant="standard"
                                            labelId="internal-Storage-lable"
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            name='internalStorage'
                                            id="internal-Storage"
                                            value={product.internalStorage}

                                            onChange={handleChange}

                                        >
                                            <MenuItem value={"128-GB"}>128 GB</MenuItem>
                                            <MenuItem value={"512 GB"}>512 GB</MenuItem>
                                            <MenuItem value={"64-GB"}>64 GB</MenuItem>
                                            <MenuItem value={"32-GB"}>32 GB</MenuItem>
                                            <MenuItem value={"Redmi"}>Redmi</MenuItem>
                                            <MenuItem value={"1TB"}>1 Tb</MenuItem>

                                        </Select>
                                    </FormControl>

                                    <FormControl>

                                        <InputLabel id="ram-lable" required sx={{ fontWeight: 500, color: "black" }}>Ram</InputLabel>
                                        <Select
                                            variant="standard"
                                            labelId="ram-lable"
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            name='ram'
                                            id="Ram"
                                            value={product.ram}

                                            onChange={handleChange}

                                        >
                                            <MenuItem value={"2-GB"}>2 GB</MenuItem>
                                            <MenuItem value={"4-GB"}>4 GB</MenuItem>
                                            <MenuItem value={"6-GB"}>6 GB</MenuItem>
                                            <MenuItem value={"8-GB"}>8 GB</MenuItem>
                                            <MenuItem value={"16-GB"}>16 GB</MenuItem>
                                            <MenuItem value={"NA"}>NA</MenuItem>

                                        </Select>
                                    </FormControl>

                                    <FormControl>


                                        <TextField
                                            variant="standard"
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            name='expandableStorage'
                                            id="expandable-Storage"
                                            label="Expandable Storage"
                                            value={product.expandableStorage}

                                            onChange={handleChange}
                                            InputLabelProps={{
                                                style: { fontWeight: 500, color: "black" }
                                            }}
                                            required

                                        />

                                    </FormControl>
                                    <FormControl>


                                        <TextField
                                            variant="standard"
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            name='primaryCamera'
                                            id="primary-Camera"
                                            label="Primary Camera"
                                            value={product.primaryCamera}

                                            onChange={handleChange}
                                            InputLabelProps={{

                                                style: { fontWeight: 500, color: "black" }
                                            }}
                                            required

                                        />


                                    </FormControl>
                                    <FormControl>

                                        <TextField
                                            variant="standard"
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            name='secondaryCamera'
                                            id="secondary-Camera"
                                            label="Secondary Camera"
                                            value={product.secondaryCamera}

                                            onChange={handleChange}
                                            InputLabelProps={{
                                                style: { fontWeight: 500, color: "black" }
                                            }}
                                            required

                                        />


                                    </FormControl>
                                    <FormControl>

                                        <InputLabel id="video-Recording-lable" required sx={{ fontWeight: 500, color: "black" }}>Video Recording</InputLabel>
                                        <Select
                                            variant="standard"
                                            labelId="video-Recording-lable"
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            name='videoRecording'
                                            id="video-Recording"
                                            value={product.videoRecording}
                                            onChange={handleChange}

                                        >
                                            <MenuItem value={"HD"}>HD</MenuItem>
                                            <MenuItem value={"Full-HD"}>Full HD</MenuItem>


                                        </Select>

                                    </FormControl>
                                    <FormControl>

                                        <TextField
                                            variant="standard"
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            name='digitalZoom'
                                            id="digital-Zoom"
                                            label="Digital Zoom"
                                            value={product.digitalZoom}

                                            onChange={handleChange}
                                            InputLabelProps={{
                                                style: { fontWeight: 500, color: "black" }
                                            }}
                                            required

                                        />


                                    </FormControl>
                                    <FormControl>

                                        <TextField
                                            variant="standard"
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            name='supportedNetworks'
                                            id="supported-Networks"
                                            label="Supported Networks"
                                            value={product.supportedNetworks}

                                            onChange={handleChange}
                                            InputLabelProps={{
                                                style: { fontWeight: 500, color: "black" }
                                            }}
                                            required

                                        />

                                    </FormControl>
                                    <FormControl>


                                        <TextField
                                            variant="standard"

                                            sx={{ margin: 2, textAlign: 'left', }}
                                            name='internetConnectivity'
                                            id="internet-Connectivity"
                                            label="Internet Connectivity"
                                            value={product.internetConnectivity}

                                            onChange={handleChange}
                                            InputLabelProps={{
                                                style: { fontWeight: 500, color: "black" }
                                            }}
                                            required

                                        />


                                    </FormControl>

                                    <FormControl>


                                        <TextField
                                            variant="standard"
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            name='simSize'
                                            id="sim-Size"
                                            label="Sim Size"
                                            value={product.simSize}
                                            onChange={handleChange}
                                            InputLabelProps={{
                                                style: { fontWeight: 500, color: "black" }
                                            }}
                                            required

                                        />

                                    </FormControl>
                                    <FormControl>


                                        <TextField
                                            variant="standard"
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            name='sensors'
                                            id="Sensors"
                                            value={product.sensors}
                                            label="Sensors"
                                            onChange={handleChange}
                                            InputLabelProps={{
                                                style: { fontWeight: 500, color: "black" }
                                            }}
                                            required

                                        />
                                    </FormControl>
                                    <FormControl>

                                        <TextField
                                            variant="standard"
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            name='batteryCapacity'
                                            id="battery-Capacity"
                                            label="Battery Capacity"
                                            value={product.batteryCapacity}

                                            onChange={handleChange}
                                            InputLabelProps={{
                                                style: { fontWeight: 500, color: "black" }
                                            }}
                                            required

                                        />

                                    </FormControl>

                                    <FormControl>


                                        <TextField
                                            variant="standard"
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            name="warranty"
                                            id="warranty"
                                            label="Warranty"
                                            value={product.warranty}
                                            onChange={handleChange}
                                            InputLabelProps={{
                                                style: { fontWeight: 500, color: "black" }
                                            }}
                                            required



                                        />

                                    </FormControl>




                                    <FormControl>
                                        <TextField
                                            type='number'
                                            variant="standard"
                                            name='quantity'
                                            id='Quantity'
                                            label="Quantity"
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            value={product.quantity}
                                            onChange={handleChange}
                                            InputLabelProps={{
                                                style: { fontWeight: 500, color: "black" }
                                            }}
                                            required

                                        />
                                    </FormControl>

                                    <FormControl>
                                        <Button
                                            type='submit'
                                            variant="contained">Post</Button>

                                    </FormControl>


                                </FormGroup>

                            </form>

                        </Item>
                    </Grid>
                </Grid>
            </Box >
        </>
    )
}