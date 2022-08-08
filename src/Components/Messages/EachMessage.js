import React from "react";

const EachMessage = ({ item }) => {
  const { name, img, message, time } = item;
  return (
    <div className="flex flex-row items-center gap-3 border-b-2 mx-4 py-2 ">
      <div>
        <img className="w-16 rounded-full" src={img} alt={name} />
      </div>
      <div className="w-[100%]">
        <div className="flex items-center justify-between">
          <p className="font-semibold">{name}</p>
          <p className="text-xs">{time}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-xs mt-1">
            {message.length < 80 ? message.slice(0, 20) + "..." : message}
          </p>
          <div className="bg-[#eef9fc]  rounded-full">
            <p className="px-1 text-xs font-bold">4</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachMessage;
