import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { purchasedTemplateData, userToken } from "../../redux/authSlice";
import { Button, Result } from "antd";
import { Link } from "react-router-dom";
import { axiosUserInstance } from "../../Instance/Axios";
const PaymentSuccess = () => {
  const token = useSelector((state) => state.authSlice.userToken)
  const portfolioCreationData = useSelector((state) => state.authSlice.portfolioCreationData)
  const purchasedTemplateData = useSelector((state) => state.authSlice.purchasedTemplateData)

  async function confirm() {
    const successUrl = window.location.href;
    const config = {
      datas: {
        purchasedTemplateData: purchasedTemplateData,
        portfolioCreationData: portfolioCreationData,
        successUrl: successUrl,
      },
    };
    try {
      //   console.log(succesurl);
      const res = await axiosUserInstance.post("/payment-success", config, {
        headers: {
            'authorization': token,
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
        }
        });   
      console.log(res.data.status);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    confirm();
  }, []);
  
  return (
    <div>
      <div className="h-screen flex justify-center justify-items-center items-center">
        <Result
          status="success"
          title="Successfully Completed Payment"
          subTitle="You are ready to go! Click the button below"
          extra={[
            <Link to={`/${portfolioCreationData.portfolioUrl}`}>
              {" "}
              <Button key="console">Go To Website</Button>
            </Link>, // <Button key="buy">Buy Again</Button>,
          ]}
        />
      </div>
    </div>
  );
};

export default PaymentSuccess;
