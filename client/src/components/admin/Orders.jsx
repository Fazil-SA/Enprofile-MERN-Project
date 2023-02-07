import { Box, Typography } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';
import { axiosUserCrudInstance } from "../../Instance/Axios";
import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react'

const Orders = () => {

    const [orderDetails,setOrderDetails] = useState([]);

  useEffect(() => {
    getAllUsers()
    async function getAllUsers() {
      const response = await axiosUserCrudInstance
      .get('/admin/orders')
      
      .then((response) => {
        setOrderDetails(response.data)
      })
      .catch((error) => {
          console.log(error)
      })
    }
    
  }, [orderDetails]);
console.log(orderDetails)


    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
      }));

      // {console.log(userDetails)}
      const columns = [
        { field: "_id", headerName: "ID", width: 180 },
        { field: "email", headerName: "Email", width: 150 },
        { field: "contact", headerName: "Contact", width: 150 },
        { field: "portfolioUrl", headerName: "portfolioUrl", width: 130 },
        { field: "templateName", headerName: "templateName", width: 200 },
        { field: "templatePrice", headerName: "templatePrice", width: 180 },
      ];



  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 2 , ml:{xs: 8,md:14} , mr:{xs:2,md:8} }}>
        <DrawerHeader />
        <Typography variant='h6' className='flex justify-center font-extrabold'>All Orders</Typography>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
          getRowId={(row) => row?._id}
          rows={orderDetails}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection 
          />
        </div>
      </Box>
    </>
  )
}

export default Orders
