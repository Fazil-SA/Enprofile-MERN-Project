import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const AddProduct = () => {

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
      }));

    const [category, setCategory] = useState('');

    console.log(category)
  return (
    <Box
    justifyContent="center"
    alignItems="center"
    minHeight="100vh" component="main" sx={{ flexGrow: 1, p: 2 , ml:{xs: 8,md:14} , mr:{xs:2,md:8} , maxWidth: '100%'}}>
        <DrawerHeader />
        <Typography variant='h4' className='flex justify-center font-extrabold p-3'>Product Management Page</Typography>
        <div style={{ height: 400, width: '100%' }} className='p-2'>

            {/* <Typography variant='overline' className='flex justify-center font-extrabold'>Select Template Category</Typography>
            <TextField fullWidth label="select" id="fullWidth"  />
        <DrawerHeader />
        <Typography variant='overline' className='flex justify-center font-extrabold'>Select Template Category</Typography>
            <TextField fullWidth label="select" id="fullWidth"  /> */}
            <Grid container direction={"column"} spacing={5}>
                <Grid item>
                    <TextField fullWidth label="Template Name" variant="outlined" />
                </Grid>
                <Grid item>
                    <TextField fullWidth select value={category} onChange={(e)=>setCategory(e.target.value)} label="Select Category" variant="outlined" >
                        <MenuItem value='portfolio'>Portfolio</MenuItem>
                        <MenuItem value='ecommerce'>E-Commerce</MenuItem>
                        <MenuItem value='landingpage'>Landing Page</MenuItem>
                    </TextField>

                </Grid>
                <Grid item className='flex'>
                    <Button variant="contained" component="label" endIcon={<PhotoCamera />}>
                        Select Cover Image <br/>
                        <input hidden accept="image/*" multiple type="file" />
                    </Button>
                </Grid>
                <Grid item>
                    <TextField fullWidth label="Demo Link" variant="outlined" />
                </Grid>
            </Grid>
            <Button type='submit' variant="contained" sx={{mt: 4}}>Add Template</Button>

        </div>
        
      </Box>
      
  )
}

export default AddProduct
