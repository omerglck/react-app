import React, { useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { deleteDataFunc, updateDataFunc } from "../redux/dataSlice";
import { modalFunction } from "../redux/modalSlice";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ dt }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const updateFunc = () => {
    dispatch(modalFunction());
    setOpenEdit(false);
    navigate(`/?update=${dt.id}`)
    // dispatch(updateDataFunc(dt));
  };
  return (
    <>
      <div className="w-[200px] h-[200px] relative m-2 rounded-lg ">
        <img
          className="w-full h-full absolute rounded-lg"
          src={dt?.url}
          alt=""
        />
        <div className="absolute left-0 bottom-0 bg-gray-700 text-white w-full px-2">
          <div className="text-lg font-semibold">{dt?.name}</div>
          <div>${dt?.price}</div>
        </div>
        <div
          onClick={() => setOpenEdit(!openEdit)}
          className="absolute top-1 right-2 bg-gray-600 rounded-full cursor-pointer hover:scale-95"
        >
          <BiDotsHorizontalRounded color="white" size={24} />
        </div>
        {openEdit && (
          <div className="bg-black borders absolute border border-gray-500 rounded-lg text-white top-8 right-2 p-2 text-sm">
            <div
              onClick={() => dispatch(deleteDataFunc(dt?.id))}
              className="cursor-pointer"
            >
              Sil
            </div>
            <div onClick={updateFunc} className="cursor-pointer">
              Güncelle
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductCard;
