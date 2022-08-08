import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import EachNewOne from "./EachNewOne";
import "../../Styles/Styles.css";

const NewConnections = () => {
  const [connections, setConnections] = useState([]);

  useEffect(() => {
    fetch("fakeConnections.json")
      .then((res) => res.json())
      .then((data) => setConnections(data));
  }, []);

  return (
    <div className="py-5">
      <div className="mb-5 ml-5">
        <p className="font-semibold text-lg">New Connections</p>
      </div>
      <div className="flex flex-row gap-5 items-center text-center overflow-x-auto flex-nowrap no-scrollbar px-5">
        {connections.map((item) => (
          <EachNewOne key={item._id} item={item}></EachNewOne>
        ))}
      </div>
    </div>
  );
};

export default NewConnections;
