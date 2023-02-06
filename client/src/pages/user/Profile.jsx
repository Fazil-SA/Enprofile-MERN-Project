import { Box, Typography } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';
import { axiosUserCrudInstance } from "../../Instance/Axios";
import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import NavBar from '../../components/user/NavBar';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
// import { blockUser } from '../../services/adminServices'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const token = useSelector((state) => state.authSlice.userToken)
  const navigate = useNavigate()
  const [templateDetails,setTemplateDetails] = useState([]);

  useEffect(() => {
    getAllOrders()
  }, [templateDetails]);

  async function getAllOrders() {
    const response = await axiosUserCrudInstance
    .get('/displayOrders', {
      headers: {
          'authorization': token,
          'Accept' : 'application/json',
          'Content-Type': 'application/json'
      }
      })
    
    .then((response) => {
      setTemplateDetails(response.data)
    })
    .catch((error) => {
        console.log(error)
    })
  }
  async function deleteProduct(id) {
    try {
        const prodId = id
        console.log(prodId)
        const result = await axiosUserCrudInstance
        .post('/delete-website',{prodId},{
          headers: {
              'authorization': token,
              'Accept' : 'application/json',
              'Content-Type': 'application/json'
          }
          })
        .then((response) => {
          toast.error("Template Removed Successfully!", {
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
      const config = {
        datas: {
          prodId: prodId,
        },
      };
      const response = await axiosUserCrudInstance
      .post('/edit-website',config,{
                headers: {
                    'authorization': token,
                    'Accept' : 'application/json',
                    'Content-Type': 'application/json'
                }
                })
      .then((response) => {
        const updateProduct = response.data
        navigate('/update-portfolio',{state:updateProduct})
        // console.log(response)
      })
      .catch((err) => {
        console.log(err)
      })
    } catch (error) {
      console.log(error)
    }
  }
   

      // {console.log(userDetails)}
      const columns = [
        { field: "_id", headerName: "ID", width: 180 },
        { field: "templateName", headerName: "Template Name", width: 150 },
        { field: "templateCategory", headerName: "Category", width: 130 },
        { field: "templatePrice", headerName: "Price", width: 200 },
        { field: "portfolioUrl", headerName: "URL", width: 180 },
        // { field: "active", headerName: "Status", width: 100 },
        {
          field: "actions",headerName: "Action",width:200,
          renderCell: (templateDetails) => {
            
            return (
              <>
                  <EditIcon sx={{cursor:'pointer'}} onClick={() => editProduct(templateDetails.id)}/>
                  <DeleteIcon sx={{cursor:'pointer'}} onClick={() => deleteProduct(templateDetails.id)}/>
              </>
              
            );
        }}
      ];

      
      
  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 2 , ml:{xs: 8,md:14} , mr:{xs:2,md:8} }}>
      <NavBar />
        <ToastContainer />
        <Typography variant='h6' className='flex justify-center font-extrabold'>My Websites</Typography>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
          getRowId={(row) => row?._id}
          rows={templateDetails}
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

export default Home
