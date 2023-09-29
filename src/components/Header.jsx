import React from "react";
import { MdPostAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { modalFunction } from "../redux/modalSlice";
import { searchDataFunc, sortingDataFunc } from "../redux/dataSlice";
const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between bg-gray-600 text-white px-4 py-3">
      <div className="text-2xl ">React Uygulama</div>
      <div className="flex items-center gap-3">
        <div className="text-black">
          <select
            onChange={(e) => dispatch(sortingDataFunc(e.target.value))}
            name=""
            id=""
            className="rounded-lg px-2 py-1 bg-gray-300 outline-none border-none cursor-pointer"
          >
            <option value="asc">Artan</option>
            <option value="desc">Azalan</option>
          </select>
        </div>

        <input
          className="bg-gray-600 outline-none border border-gray-400  text-white rounded-lg px-4 py-1"
          type="text"
          placeholder="Arama yapınız..."
          onChange={(e) => dispatch(searchDataFunc(e.target.value))}
        />
        <div
          onClick={() => dispatch(modalFunction())}
          className="bg-gray-300 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer"
        >
          <MdPostAdd size={24} />
        </div>
      </div>
    </div>
  );
};

export default Header;
