import React, { useEffect } from "react";
import { Button, Result } from "antd";
import { Link } from "react-router-dom";

const PaymentFail = () => {
  return (
    <div>
      <div className="mt-32">
        <Result
          status="error"
          title="Payment not successful"
          subTitle="Try Again!!"
          extra={[
            <Link to={"/"}>
              {" "}
              <Button key="console">Go to home</Button>,
            </Link>, // <Button key="buy">Buy Again</Button>,
          ]}
        />
      </div>
    </div>
  );
};

export default PaymentFail;
