import React, { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { axiosUserInstance } from "../../Instance/Axios";
import { PortTempDemo1 } from "../../pages/user/userPages"
import './loading.css'

const ParamsTemplateRendering = () => {
  const navigate = useNavigate();
  const params = useParams();
  const url = params.id;
  templateRendering();
  async function templateRendering() {
    const response = await axiosUserInstance
      .post("/template-rendering", { url: url })
      .then((tempData) => {
        const errMssg = tempData.data.mssg;
        if (errMssg == "No urls Found") {
            setTimeout(() => {
                navigate("/error-page");
            }, 2000);
        //   console.log("no url found");
        } else {
          const templateName = tempData.data[0].templateName;
          if (templateName == "Portfolio Demo - 1") {
            setTimeout(() => {
                const displayTempData = tempData.data[0]
                // console.log(tempData)
                navigate('/portfolio-demo-1',{state : displayTempData})
                // navigate("/portfolio-demo-1");
            }, 2000);
            console.log("have data");
          } else {
            console.log("no templates");
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <div id="load">
        <div>G</div>
        <div>N</div>
        <div>I</div>
        <div>D</div>
        <div>A</div>
        <div>O</div>
        <div>L</div>
      </div>
    </div>
  );
};

export default ParamsTemplateRendering;
