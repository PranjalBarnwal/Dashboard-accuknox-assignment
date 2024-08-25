import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar";
import Category from "./components/Category";
import Sidebar from "./components/Sidebar";

const App = () => {
  const categories = useSelector((state) => state.dataSlice.dashboardData);
  const searchQuery = useSelector((state) => state.dataSlice.searchQuery);

  return (
    <div className="bg-gray-200">
      <Navbar />
      {categories.map((category) => {
        const filteredWidgets = category.widgets.filter((widget) =>
          widget.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        return (
          <Category
            key={category.id}
            title={category.title}
            widgets={filteredWidgets}
            id={category.id}
          />
        );
      })}
      <Sidebar />
    </div>
  );
};

export default App;
