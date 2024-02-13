import React from "react";
import { FaHome } from "react-icons/fa";

const Missing = () => {
  return (
    <div className="h-screen w-full flexColCenter">
      <h1 className="text-[8rem] font-bold text-primary animate-bounce">404</h1>
      <div className="w-24 h-1 md:w-1 md:h-24 bg-primary my-6 md:my-0 md:mx-8"></div>
      <div className="flexColCenter">
        <h2 className="text-2xl text-center mb-4">
          Sorry, This page isn't available
        </h2>
        <a href="/">
            <span>Go To HomePage</span>
            <span>
              <FaHome></FaHome>
            </span>
        </a>
      </div>
    </div>
  );
};

export default Missing;
