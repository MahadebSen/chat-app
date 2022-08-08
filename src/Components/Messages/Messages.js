import React, { useEffect, useState } from "react";
import search from "../../images/magnifying-glass-solid.svg";
import EachMessage from "./EachMessage";
import "../../Styles/Styles.css";

const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("fakeConnections.json")
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, []);

  return (
    <section>
      <div className="bg-white rounded-t-xl border-black border-2">
        <div className="flex items-center justify-between mx-5 my-5">
          <div>
            <p className=" font-semibold">Messages</p>
          </div>
          <div className="flex items-center">
            <img className="w-5" src={search} alt="" />
            <input
              placeholder="Search"
              className="border-black border-2 w-28 px-2"
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-col overflow-y-scroll max-h-[300px] no-scrollbar">
          {messages.map((item) => (
            <EachMessage key={item._id} item={item}></EachMessage>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Messages;
