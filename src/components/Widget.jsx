import React from "react";
import { useDispatch } from "react-redux";
import { removeWidget } from "../store/dataSlice";
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import { RxCrossCircled } from "react-icons/rx";

const Widget = ({ id, name, type, categoryId }) => {
  const dispatch = useDispatch();
  
  const handleRemoveWidget = () => {
    dispatch(removeWidget({ cid: categoryId, id }));
  };

  const chartComponents = {
    pie: <PieChart name={name} />,
    bar: <BarChart name={name} />,
    line: <LineChart name={name} />,
  };

  return (
    <div className="relative w-[20rem] h-[15rem] sm:w-[30rem] sm:h-[15rem] px-2 bg-white rounded-lg shadow-lg mr-4">
      {chartComponents[type]}
      <RxCrossCircled
        className="absolute top-2 right-2 cursor-pointer text-red-500"
        size={24}
        onClick={handleRemoveWidget}
      />
    </div>
  );
};

export default Widget;
