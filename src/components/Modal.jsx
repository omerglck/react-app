import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { modalFunction } from "../redux/modalSlice";

const Modal = ({ title, content, btnText, btnFunciton }) => {
  const dispatch = useDispatch();

  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 w-full h-screen flex items-center justify-center">
      <div className="w-1/3 bg-white shadow-lg rounded-md p-4 ">
        <div className="border-b py-3 flex justify-between items-center">
          <div className="text-2xl">{title}</div>
          <AiOutlineCloseCircle
            onClick={() => dispatch(modalFunction())}
            size={24}
          />
        </div>
        {content}
      </div>
    </div>
  );
};
export default Modal;
