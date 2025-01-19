import React from "react";

const CategoryButton = ({ name }) => {
  return <div>
    <button className="bg-[rgb(74,92,47)] w-[10rem] h-[3rem] rounded-lg text-white">
      {name}
    </button>
  </div>;
};

export default CategoryButton;
