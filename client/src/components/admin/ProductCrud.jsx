import { Box, Typography } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';
import { axiosAdminInstance } from "../../Instance/Axios";
import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { ToastContainer, toast } from 'react-toastify';
// import { blockUser } from '../../services/adminServices'; 

const ProductCrud = () => {

  const [productDetails,setProductDetails] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllProducts()
    async function getAllProducts() {
      const response = await axiosAdminInstance
      .post('/admin/productCrud')
      
      .then((response) => {
        setProductDetails(response.data)
      })
      .catch((error) => {
          console.log(error)
      })
    }
    
  }, [productDetails]);

    async function deleteProduct(id) {
      try {
          const prodId = id
          console.log(prodId)
          const result = await axiosAdminInstance
          .post('/admin/deleteProduct',{prodId})
          .then((response) => {
            toast.success("Templated Removed Successfully!", {
              theme: "colored",
              autoClose: 3000,
            })
          })
          .catch((err) => {
            console.log(err)
          })
      } catch (error) {
        console.log(error)
      }
    }

    async function editProduct(id) {
      try {
        const prodId = id
        const response = await axiosAdminInstance
        .post('/admin/editProduct',{prodId})
        .then((response) => {
          const updateProduct = response.data
          navigate('/admin/addProduct',{state:updateProduct})
          // console.log(response.data)
        })
        .catch((err) => {
          console.log(err)
        })
      } catch (error) {
        console.log(error)
      }
    }

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
        { field: "name", headerName: "Name", width: 150 },
        { field: "category", headerName: "Category", width: 130 },
        { field: "price", headerName: "Price", width: 130 },
        { field: "imageUrl", headerName: "Image Url", width: 200 },
        { field: "redirectUrl", headerName: "Redirect Url", width: 180 },
        {
          field: "actions",headerName: "Action",width:200,
          renderCell: (productDetails) => {
            
            return (
              <>
                  <EditIcon sx={{cursor:'pointer'}} onClick={() => editProduct(productDetails.id)}/>
                  <DeleteIcon sx={{cursor:'pointer'}} onClick={() => deleteProduct(productDetails.id)}/>
              </>
              
            );
                }}
      ];

      
      
  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 2 , ml:{xs: 8,md:14} , mr:{xs:2,md:8} }}>
        <DrawerHeader />
        <Typography variant='h6' className='flex justify-center font-extrabold'>Product Management Page</Typography>
        <Button variant="contained" onClick={() => navigate('/admin/addProduct')} sx={{m:2 , borderRadius:4}} >Add Template</Button>
        <ToastContainer />
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
          getRowId={(row) => row?._id}
          rows={productDetails}
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

export default ProductCrud
