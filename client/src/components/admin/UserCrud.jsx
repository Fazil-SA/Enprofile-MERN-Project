import { Box, Typography } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';
import { axiosUserCrudInstance } from "../../Instance/Axios";

import React, { useEffect, useState } from 'react'

const Home = () => {
    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
      }));

      const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 90,
        },
        {
          field: 'fullName',
          headerName: 'Full name',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
      ];
      
      const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
      ];

      const [userDetails,setUserDetails] = useState([]);

      useEffect(() => {
        getAllUsers()
        async function getAllUsers() {
          const response = await axiosUserCrudInstance
          .post('/admin/userCrud')
          
          .then((response) => {
            console.log(response)
          })
          .catch((error) => {
              console.log(error)
          })
        }
        
      }, []);

  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 2 , ml:14 , mr:8}}>
        <DrawerHeader />
        <Typography variant='h4' className='flex justify-center font-extrabold'>User Management Page</Typography>
        
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
          rows={rows}
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
