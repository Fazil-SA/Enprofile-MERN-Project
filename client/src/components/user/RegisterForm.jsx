import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";


const RegisterForm = () => {
  const [isVisible, setVisible] = useState(false);
  const [pw, setPwmatch] = useState(false);
  
  //validation-form
  const { register, handleSubmit, formState: { errors } } = useForm();
  const isValidate = {
    required : "*This field is required",
    pwMatch : "*Password not matching"
  }

  async function onSubmit(data) {
    const regDetails = data
    if(data.password !== data.confirmPassword){
      setPwmatch(true)
    } else {

      const response = await fetch('http://localhost:5000/register',{
        method : "POST",
        headers : {
          'Content-Type' : 'application/json',
        },
        body : JSON.stringify(regDetails)
      })
      const status = await response.json()
      console.log(status)
    }
  }
  return (
    <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label
          htmlFor="userName"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your Name
        </label>
        <input
          type="userName"
          name="userName"
          id="userName"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Your Name"
          required=""
          {...register("userName",{ required: true })}
        />
        {errors.name && <p className="text-red-600">{isValidate.required}</p>}
      </div>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your Email
        </label>
        <input
          type="text"
          name="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Email"
          required=""
          {...register("email",
                            {
                                required: true,
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })}
        />
        
        {errors.email && <p className="text-red-600">{ isValidate.required}</p>}
      </div>
      <div>
        <label
          htmlFor="mobile"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Mobile
        </label>
        <input
          type="number"
          name="mobile"
          id="mobile"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Mobile"
          required=""
          {...register("mobile",{required:true , minLength:10})}
        />
        {errors.mobile && <p className="text-red-600">{isValidate.required}</p>}
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Password
        </label>
        <div className="grid grid-cols-2 gap-2">
          <input
            type={isVisible ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Password"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required=""
            onChange={(e) => setPassword(e.target.value)}
            {...register("password", {
              required: true,
              // pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
          })}
          />
          <input
            type={isVisible ? "text" : "password"}
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required=""
            {...register("confirmPassword", {
              required: true,
              // pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
          })}
          />
        {errors.password && <p className="text-red-600">{isValidate.required}</p>}
        {pw ? <p className="text-red-600">{isValidate.pwMatch}</p> : <p className="hidden">{isValidate.pwMatch}</p>}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="showpassword"
              aria-describedby="showpassword"
              type="checkbox"
              onClick={() => {
                setVisible((prev) => !prev);
              }}
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
              required=""
            />
          </div>
          <div className="ml-3 text-sm">
            <label
              htmlFor="remember"
              className="text-gray-500 dark:text-gray-300"
            >
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

export default RegisterForm;
