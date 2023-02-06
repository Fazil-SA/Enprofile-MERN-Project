import { Box, Typography } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles';

import React from 'react'
const Home = () => {
    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
      }));
  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 2 , ml:8 , mr:8}}>
        <DrawerHeader />
        <Typography variant='h6' className='flex justify-center font-extrabold'>Welcome, Admin</Typography>



          <div className='flex items-center justify-center mt-3'>
    <div className="w-full max-w-sm p-4 bg-transparent border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-3 text-base font-semibold text-white md:text-xl dark:text-white">
            Enprofile
        </h5>
        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Empower the tech</p>
        <ul className="my-4 space-y-3">
            <li>
                <a href="/admin/userManagement" className="flex items-center p-3 text-base hover:scale-105 transition font-bold text-gray-900 rounded-lg bg-gray-500 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                    <span className="flex-1 ml-3 whitespace-nowrap">User Management</span>
                </a>
            </li>
            <li>
                <a href="/admin/productManagement" className="flex items-center p-3 hover:scale-105 transition text-base font-bold text-gray-900 rounded-lg bg-gray-500 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                    <span className="flex-1 ml-3 whitespace-nowrap">Product Management</span>
                </a>
            </li>
            <li>
                <a href="/admin/orderManagement" className="flex items-center p-3 text-base hover:scale-105 transition font-bold text-gray-900 rounded-lg bg-gray-500 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                    <span className="flex-1 ml-3 whitespace-nowrap">Order Management</span>
                </a>
            </li>
            <li>
                <a href="/admin/addProduct" className="flex items-center p-3 text-base hover:scale-105 transition font-bold text-gray-900 rounded-lg bg-gray-500 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                    <span className="flex-1 ml-3 whitespace-nowrap">Add Product</span>
                </a>
            </li>
        </ul>
      
    </div>
    </div>




      </Box>
    </>
  )
}

export default Home
