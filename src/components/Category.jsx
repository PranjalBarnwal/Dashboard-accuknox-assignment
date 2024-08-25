import React from "react";
import Widget from "./Widget";
import AddWidget from "./AddWidget";

const Category = ({id,title, widgets }) => {
  
  return (
    <div className="p-3">
      <h1 className="font-bold text-2xl p-2">{title}</h1>
      <div className="flex">
        <div className="flex sm:flex-row flex-col overflow-x-auto max-w-[88rem]">
          {widgets.map((widget) => (
            widget.display && (
              <Widget
                key={widget.id}
                id={widget.id}
                name={widget.name}
                type={widget.type}
                categoryId={id}
                display={widget.display}
              />
            )
          ))}
        </div>
        <div className="min-w-[5rem]">
          <AddWidget />
        </div>
      </div>
    </div>
  );
};

export default Category;
