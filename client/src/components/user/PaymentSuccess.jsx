import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { userToken } from "../../redux/authSlice";
import { Button, Result } from "antd";
import { Link } from 'react-router-dom';
import { axiosUserInstance } from "../../Instance/Axios";

const PaymentSuccess = () => {
  const userToken = useSelector((state) => state.authSlice.userToken);
  async function confirm() {
    const successUrl = window.location.href;
    const config = {
        headers: {
          "Accept": 'application/json',
          "Authorization": userToken,
          "Content-Type": 'application/json',
          "successUrl" : successUrl,
        },
      };
    try {
    //   console.log(succesurl);
      const res = await axiosUserInstance.post("/payment-success", config);
      console.log(res);
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    confirm();
  }, []);

  return (
    <div>
        <div className='mt-32'>
        <Result
    status="success"
    title="Successfully Completed Payment"
    subTitle="You are ready to go! Click the button below"
    extra={[
    <Link to={'/experts'}>  <Button key="console">
        Go To Website
      </Button>,</Link>  // <Button key="buy">Buy Again</Button>,
    ]}
  />
        </div>
    </div>
  )
};

export default PaymentSuccess;
