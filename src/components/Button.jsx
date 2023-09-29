import React from "react";

const Button = ({ onClick, btnText }) => {
  return <button className="w-full h-10 bg-gray-700 text-white flex items-center justify-center mt-4 rounded-lg " onClick={onClick}>{btnText}</button>;
};

export default Button;
