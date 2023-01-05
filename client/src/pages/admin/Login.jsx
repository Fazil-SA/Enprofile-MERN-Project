import React from 'react'
import { logo } from '../../assets/user/index'
import {LoginForm} from '../../components/admin/loginComponents'

const Login = () => {
    
  return (
  
      
    <div className="bg-gradient-to-r from-[#84a4c2] to-[#0f4b83]">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto my-auto min-h-screen scroll-my-12 md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-[150px] h-[35px] cursor-pointer" src={logo} alt="logo"/>
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Welcome to Admin Login
                        </h1>
                       <LoginForm/>
                    </div>
                </div>
            </div>
        </div>

  )
}

export default Login
