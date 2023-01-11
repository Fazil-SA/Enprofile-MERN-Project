import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { axiosAdminInstance } from "../../Instance/Axios";
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Axios from 'axios'
import {Image} from 'cloudinary-react'
import CircularProgress from '@mui/material/CircularProgress';
import DoneIcon from '@mui/icons-material/Done';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { width } from '@mui/system';

const AddProduct = () => {

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
      }));

    const [tempName, setTempName] = useState('');
    const [category, setCategory] = useState('');
    const [selectedImages, setSelectedImages] = useState([])
    const [imageDisplayUrl, setImageDisplayUrl] = useState('')
    const [url, setUrl] = useState('')
    const [loading,setLoading] = useState('')

    const uploadImage = () => {
        console.log(selectedImages)
        if(selectedImages == '') {
            toast.error("Please Select Cover Image!", {
                theme: "colored",
                autoClose: 3000,
            })
        } else {
            setLoading('spinnerActive')
            const formData = new FormData()
            formData.append("file",selectedImages)
            formData.append("upload_preset","enp_product_images")
            Axios.post('https://api.cloudinary.com/v1_1/dk4uips8d/image/upload/',formData)
    
            .then((response) => {
                console.log(response.data.url);
                setLoading('doneUpload')
                setImageDisplayUrl(response.data.url)
            })
        }
    }

   
    
    async function addProduct(event) {
        event.preventDefault();
        try {
            const data = {tempName,category,selectedImages,url}
            const response = await axiosAdminInstance
            .post('/admin/addProduct',data)
            .then((response) => {
                console.log(response);
            })
        } catch (error) {
            
        }
    }
  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 3 ,ml:{xs: 8,md:14} , mr:{xs:2,md:8} }}>
        <DrawerHeader />
        <Typography variant='h6' className='flex justify-center font-extrabold'>Product Management Page</Typography>
        <div style={{ height: 400, width: '100%' }}>
        <Grid container direction={"column"} spacing={5} sx={{justifyContent:"center",ml:-7}}>
            {/* <form onSubmit={addProduct}> */}
                <Grid item>
                    <TextField fullWidth id="fullWidth" value={tempName} onChange={(e)=>setTempName(e.target.value)} label="Template Name" variant="outlined" />
                </Grid>
                <Grid item>
                    <TextField fullWidth id="fullWidth" select value={category} onChange={(e)=>setCategory(e.target.value)} label="Select Category" variant="outlined" >
                        <MenuItem value='portfolio'>Portfolio</MenuItem>
                        <MenuItem value='ecommerce'>E-Commerce</MenuItem>
                        <MenuItem value='landingpage'>Landing Page</MenuItem>
                    </TextField>

                </Grid>
                <Grid item>
                    <Button variant="outlined" fullWidth label="fullWidth" id="fullWidth" component="label" startIcon={<PhotoCamera />} sx={{color:'black',borderColor: 'grey.500'}}>
                        Select Cover Image
                        <input
                            type="file"
                            name="file"
                            id="image"
                            onChange={(e) => setSelectedImages(e.target.files[0])}
                            className="input p-1 ml-6"
                        />
                    </Button>
                    <Image style={{width:75}} cloudName="dk4uips8d" publicId={imageDisplayUrl} />
                    {
                     imageDisplayUrl ? 
                     <>
                    <Button onClick={uploadImage} variant="outlined">Remove</Button>
                     </>
                    : 
                    <>
                    <Button sx={{mt:3}} onClick={uploadImage} variant="outlined">Upload</Button>
                    <ToastContainer />
                    </>
                    }
                    {
                     loading==='spinnerActive' ?  <CircularProgress sx={{  justifyContent:'center',justifyItems:'center'}}/> : ''
                    }
                    {
                     loading==='doneUpload' ?  <DoneIcon sx={{ fontSize: 70 , justifyContent:'center',justifyItems:'center'}} /> : ''
                    }

                    
                </Grid>
                <Grid item>
                    <TextField value={url} onChange={(e)=>setUrl(e.target.value)} fullWidth label="Template URL" id="fullWidth" variant="outlined" />
                    <Button type='submit' onClick={addProduct} variant="contained" sx={{mt: 4}}>Add Template</Button>
                </Grid>
            </Grid>
        </div>
      </Box>
    </>
//     <TextField
//     style={{ width: "200px", margin: "5px" }}
//     type="text"
//     label="Diversity catagory"
//     variant="outlined"
//   />
    // <>
    //  <Box 
    //  justifyContent="center"
    //  alignItems="center"
    //  component="main" sx={{ flexGrow: 1, p: 2 , ml:{xs: 8,md:14} , mr:{xs:2,md:8}, width: 500,maxWidth: '100%'}}>
    //     <DrawerHeader />
    //     <Typography variant='h4' className='flex justify-center font-extrabold p-3'>Product Management Page</Typography>
    //     <div style={{ height: 400, width: '100%' }} className='p-2'>

    //         <Grid container direction={"column"} spacing={5} sx={{justifyContent:"center"}}>
    //         {/* <form onSubmit={addProduct}> */}
    //             <Grid item>
    //                 <TextField fullWidth label="fullWidth" id="fullWidth" value={tempName} onChange={(e)=>setTempName(e.target.value)} label="Template Name" variant="outlined" />
    //             </Grid>
    //             <Grid item>
    //                 <TextField fullWidth label="fullWidth" id="fullWidth" select value={category} onChange={(e)=>setCategory(e.target.value)} label="Select Category" variant="outlined" >
    //                     <MenuItem value='portfolio'>Portfolio</MenuItem>
    //                     <MenuItem value='ecommerce'>E-Commerce</MenuItem>
    //                     <MenuItem value='landingpage'>Landing Page</MenuItem>
    //                 </TextField>

    //             </Grid>
    //             <Grid item className='flex'>
    //                 <Button variant="outlined" fullWidth label="fullWidth" id="fullWidth" component="label" startIcon={<PhotoCamera />} sx={{color:'black',borderColor: 'grey.500'}}>
    //                     Select Cover Image
    //                     <input
    //                         type="file"
    //                         name="file"
    //                         id="image"
    //                         onChange={(e) => setSelectedImages(e.target.files[0])}
    //                         className="input p-1 ml-6"
    //                     />
    //                 </Button>
    //                 <Image style={{width:75}} cloudName="dk4uips8d" publicId={imageDisplayUrl} />
    //                 {
    //                  imageDisplayUrl ? 
    //                  <>
    //                 <Button onClick={uploadImage} variant="outlined">Remove</Button>
    //                  </>
    //                 : 
    //                 <>
    //                 <Button sx={{ml:-5}} onClick={uploadImage} variant="outlined">Upload</Button>
    //                 <ToastContainer />
    //                 </>
    //                 }
    //                 {
    //                  loading==='spinnerActive' ?  <CircularProgress sx={{  justifyContent:'center',justifyItems:'center'}}/> : ''
    //                 }
    //                 {
    //                  loading==='doneUpload' ?  <DoneIcon sx={{ fontSize: 70 , justifyContent:'center',justifyItems:'center'}} /> : ''
    //                 }

                    
    //             </Grid>
    //             <Grid item>
    //                 <TextField  value={url} onChange={(e)=>setUrl(e.target.value)} fullWidth label="fullWidth" id="fullWidth" variant="outlined" />
    //                 <Button type='submit' onClick={addProduct} variant="contained" sx={{mt: 4}}>Add Template</Button>
    //             </Grid>
    //         </Grid>
    //         {/* </form> */}
    //     </div>
        
    //    </Box>
    // </>
      
  )
}

export default AddProduct
