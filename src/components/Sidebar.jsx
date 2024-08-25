import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleSidebar,
  toggleWidgetDisplay,
  addWidget,
  addCategory,
  removeCategory,
} from "../store/dataSlice";
import { RxCross2 } from "react-icons/rx";

const Sidebar = () => {
  const dispatch = useDispatch();
  const sidebarVisible = useSelector((state) => state.dataSlice.sidebarVisible);
  const dashboardData = useSelector((state) => state.dataSlice.dashboardData);

  const categories = dashboardData.map((category) => category);

  const [category, setCategory] = useState(categories[0]?.title || "");
  const selectedCategory = dashboardData.find((cat) => cat.title === category);
  const widgets = selectedCategory ? selectedCategory.widgets : [];

  const [widgetName, setWidgetName] = useState("");
  const [widgetType, setWidgetType] = useState("line");

  const [newCategoryName, setNewCategoryName] = useState("");

  const handleCheckboxChange = (widgetId, categoryId) => {
    dispatch(toggleWidgetDisplay({ cid: categoryId, id: widgetId }));
  };

  const handleCreateWidget = () => {
    if (widgetName.trim()) {
      dispatch(
        addWidget({
          name: widgetName,
          cid: selectedCategory.id,
          id: `widget${Date.now()}`,
          type: widgetType,
          display: true,
        })
      );
      setWidgetName("");
      setWidgetType("line");
    }
  };

  const handleCreateCategory = () => {
    if (newCategoryName.trim()) {
      dispatch(
        addCategory({
          id: `category${Date.now()}`,
          title: newCategoryName,
        })
      );
      setNewCategoryName("");
    }
  };

  const handleRemoveCategory = (id) => {
    dispatch(removeCategory({ id }));
  };

  return (
    <div>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          sidebarVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => dispatch(toggleSidebar())}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg z-50 w-[70rem] min-w-[20rem] transform transition-transform duration-300 ${
          sidebarVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="p-4 text-xl text-gray-700"
          onClick={() => dispatch(toggleSidebar())}
        >
          Close
        </button>

        <div className="p-4">
          <h2 className="text-lg font-bold">
            Personalize your dashboard by adding from the following widgets
          </h2>
          <div className="justify-around bg-white p-4 rounded-lg w-[70%] shadow-lg text-gray-800 flex items-center mt-4">
            <input
              className="border text-xl border-gray-300 rounded-lg p-2 mr-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
              type="text"
              placeholder="New category name"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
            />
            <button
              className="text-xl font-medium text-gray-800"
              onClick={handleCreateCategory}
            >
              Create Category
            </button>
          </div>
          <div className="flex space-x-10 p-2 text-xl mt-2 w-full border-b-black border-[1px]">
            {categories.map((item) => (
              <div key={item.id} className="flex items-center">
                <button
                  onClick={() => setCategory(item.title)}
                  className={`p-2 ${
                    category === item.title
                      ? "font-bold border-b-2 border-gray-800"
                      : ""
                  }`}
                >
                  {item.title}
                </button>
                <RxCross2
                  className="ml-2 cursor-pointer text-red-500"
                  onClick={() => handleRemoveCategory(item.id)}
                />
              </div>
            ))}
          </div>

          <div>
            {widgets.map((widget) => (
              <div key={widget.id} className="text-xl p-2">
                <input
                  className="scale-150 mr-2"
                  type="checkbox"
                  id={widget.id}
                  name={widget.id}
                  value={widget.name}
                  checked={widget.display}
                  onChange={() =>
                    handleCheckboxChange(widget.id, selectedCategory.id)
                  }
                />
                <label htmlFor={widget.id}> {widget.name}</label>
              </div>
            ))}
            <div className="justify-around bg-white p-4 rounded-lg w-[70%] shadow-lg text-gray-800 flex items-center mt-4">
              <input
                className="border text-xl border-gray-300 rounded-lg p-2 mr-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                type="text"
                placeholder="Title of widget"
                value={widgetName}
                onChange={(e) => setWidgetName(e.target.value)}
              />
              <div className="flex space-x-4">
                <label>
                  <input
                    type="radio"
                    name="widgetType"
                    value="line"
                    checked={widgetType === "line"}
                    onChange={(e) => setWidgetType(e.target.value)}
                    className="mr-2"
                  />
                  Line
                </label>
                <label>
                  <input
                    type="radio"
                    name="widgetType"
                    value="bar"
                    checked={widgetType === "bar"}
                    onChange={(e) => setWidgetType(e.target.value)}
                    className="mr-2"
                  />
                  Bar
                </label>
                <label>
                  <input
                    type="radio"
                    name="widgetType"
                    value="pie"
                    checked={widgetType === "pie"}
                    onChange={(e) => setWidgetType(e.target.value)}
                    className="mr-2"
                  />
                  Pie
                </label>
              </div>
              <button
                className="text-xl font-medium text-gray-800 ml-4"
                onClick={handleCreateWidget}
              >
                Create Widget
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
