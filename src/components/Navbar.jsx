import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { toggleSidebar, setSearchQuery } from "../store/dataSlice"; 

const Navbar = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    dispatch(setSearchQuery(e.target.value)); 
  };

  return (
    <div className="w-screen flex justify-between items-center p-5 bg-gray-200">
      <div className="text-sm md:text-3xl md:mr-[10rem] font-semibold text-black">
        Dashboard
      </div>
      <div className="flex-1 mx-2">
        <input
          type="text"
          placeholder="search widgets"
          className="px-2 py-1 text-sm md:text-lg bg-white w-full md:w-[30vw] text-black border border-black rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-black transition duration-200 ease-in-out"
          onChange={handleSearchChange}
        />
      </div>
      <div className="flex space-x-1 md:mr-10">
        <button
          onClick={() => dispatch(toggleSidebar())}
          className="flex md:text-2xl items-center px-2 py-1 text-sm bg-white text-black rounded-md border border-black shadow-sm hover:shadow-md hover:bg-gray-200 transition duration-200 ease-in-out"
        >
          Add widget
        </button>
        <button onClick={() => dispatch(toggleSidebar())} className="px-2 py-1 text-sm bg-white text-black rounded-md border border-black shadow-sm hover:shadow-md hover:bg-gray-200 transition duration-200 ease-in-out">
          <BsThreeDotsVertical />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
