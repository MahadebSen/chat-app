import React from "react";

const EachNewOne = ({ item }) => {
  const { name, img } = item;
  return (
    <div className="shrink-0">
      <img className="w-16 mx-auto rounded-full" src={img} alt={name} />
      <p className=" text-sm text-[#84888d]">{name}</p>
    </div>
  );
};

export default EachNewOne;
