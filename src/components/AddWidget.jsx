import React from "react";
import { FaPlus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../store/dataSlice";
const AddWidget = () => {
  const dispatch=useDispatch();
  return (
    <div className="w-[20rem] h-[15rem] px-2 flex justify-center items-center text-3xl text-gray-400 bg-white rounded-lg shadow-lg mr-4">
      <button className="flex items-center border-2 rounded-lg p-2" onClick={()=>dispatch(toggleSidebar())}>
      <FaPlus size={20} className="m-2"/>
      Add widget 
      </button>
    </div>
  );
};

export default AddWidget;
