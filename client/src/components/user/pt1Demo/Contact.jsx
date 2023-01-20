import React from "react";
// import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";
// import {
//   faYoutube,
//   faFacebook,
//   faTwitter,
//   faInstagram
// } from "@fontawesome/fontawesome-free-brands";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 mt-20 md:mt-0 justify-center max-w-screen-lg mx-auto">
        <div className="pb-8">
          <p className="text-4xl font-bold  border-4 border-gray-500">
          <a href="tel:5554280940" className="flex flex-col items-center"><button>Contact Me</button></a>
          </p>
          {/* <p classN ame="py-6">Submit the form below to get in touch with me</p> */}
          {/* <div>
      <h3>Social Follow</h3>
      <a href="#" className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="#" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="#" className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="#" className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div> */}
        </div>

        <div className="flex justify-center items-center">
        <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2022 Enprofile. All Rights Reserved.
      </p>
    </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;