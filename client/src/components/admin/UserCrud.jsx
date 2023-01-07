import { Box, Typography } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';
import { axiosUserCrudInstance } from "../../Instance/Axios";
import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react'

// import { blockUser } from '../../services/adminServices'; 

const Home = () => {

  const [userDetails,setUserDetails] = useState([]);

  useEffect(() => {
    getAllUsers()
    async function getAllUsers() {
      const response = await axiosUserCrudInstance
      .post('/admin/userCrud')
      
      .then((response) => {
        setUserDetails(response.data)
      })
      .catch((error) => {
          console.log(error)
      })
    }
    
  }, [userDetails]);

  async function blockUser(id) {
    console.log(id)
    const data = id
    const response = await axiosUserCrudInstance
    .put('/admin/userCrud',{data})
    .then((response) => {
        console.log(response)
    })
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
        { field: "userName", headerName: "Name", width: 150 },
        { field: "mobile", headerName: "Mobile", width: 130 },
        { field: "email", headerName: "Email", width: 200 },
        { field: "createdAt", headerName: "Account Created Date", width: 180 },
        { field: "active", headerName: "User Active", width: 100 },
        {
          field: "actions",headerName: "Block/UnBlock",width:200,
          renderCell: (userDetails) => {
            
            return (
              <>
              {/* {console.log(userDetails.row.active)} */}
              {userDetails.row.active ? (
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    style={{ marginLeft: 16 }}
                    onClick={() => {
                      blockUser(userDetails.row._id);
                    }}
                    >Block
                  </Button> ) : (
                    <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    style={{ marginLeft: 16 }}
                    onClick={() => {
                      blockUser(userDetails.row._id);
                    }}
                    >UnBlock
                  </Button>
                  )
                }

                </>
              
            );
                }}
      ];

      
      
  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 2 , ml:{xs: 8,md:14} , mr:{xs:2,md:8} }}>
        <DrawerHeader />
        <Typography variant='h4' className='flex justify-center font-extrabold'>User Management Page</Typography>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
          getRowId={(row) => row?.email}
          rows={userDetails}
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
