import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {useNavigate} from 'react-router-dom'

const LoginForm = () => {
  const [isVisible, setVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const navigate = useNavigate()
  
  //validation-form
  const isValidate = {
    required : "*This field is required",
    wrongPw : "wrong password!!"
  }

  async function handleSubmit(event) {
    event.preventDefault()
      const response = await fetch('http://localhost:5000/login',{
        method : "POST",
        headers : {
          'Content-Type' : 'application/json',
        },
        body : JSON.stringify({email:email,password:password})
      })
      const status = await response.json()
      if(status.status === "User Logined Successfully"){
        navigate('/')
      }
      if(status.err === "no login data"){
        setErr('Invalid user credentials')
      }
      if(status === isValidate.wrongPw) {
        setErr(isValidate.wrongPw)
      }
      // if(error.err === "Wrong password"){
      //   setErr('Invalid user credentials')
      // }
    }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
       <p className="text-red-600">{isValidate.userExists}</p>
       <p className="text-red-600 mb-2">{err}</p>
        <label
          for="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Email"
          required=""
          
        />
      </div>

      <div>
        <label
          for="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Password
        </label>
        <input
          type={isVisible ? "text" : "password"}
          name="password"
          id="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required=""
          
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="remember"
              aria-describedby="remember"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
              required=""
              onClick={() => {
                setVisible((prev) => !prev);
              }}
            />
          </div>
          <div className="ml-3 text-sm">
            <label for="remember" className="text-gray-500 dark:text-gray-300">
              Show Password
            </label>
          </div>
        </div>
        <a
          href="#"
          className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Forgot password?
        </a>
      </div>
      <button
        type="submit"
        className="w-full text-black bg-slate-600 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        Sign in
      </button>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Don’t have an account yet?{" "}
        <a
          href="#"
          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Sign up
        </a>
      </p>
    </form>
  );
};

export default LoginForm;
