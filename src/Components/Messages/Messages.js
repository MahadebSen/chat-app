import React, { useEffect, useState } from "react";
import search from "../../images/magnifying-glass-solid.svg";
import EachMessage from "./EachMessage";
import "../../Styles/Styles.css";

const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("fakeConnections.json")
      .then((res) => res.json())
      .then((data) => {
        setMessages(data);
        localStorage.setItem("allMessages", JSON.stringify(data));
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;

    if (searchText) {
      const storage = localStorage.getItem("allMessages");
      if (storage) {
        const storedMessages = JSON.parse(storage);
        const users = storedMessages.filter(
          (item) => item.name.toLowerCase() === `${searchText.toLowerCase()}`
        );
        setMessages(users);
      }
    }
    e.target.search.value = "";
  };

  return (
    <section>
      <div className="bg-white rounded-t-xl border-black border-2">
        <div className="flex items-center justify-between mx-5 my-5">
          <div>
            <p className=" font-semibold">Messages</p>
          </div>
          <form
            onSubmit={handleSearch}
            className="flex items-center flex-row gap-2"
          >
            <button>
              <img className="w-5" src={search} alt="" />
            </button>
            <input
              name="search"
              placeholder="Search"
              className="border-black border-2 w-28 px-2 rounded-lg"
              type="text"
            />
          </form>
        </div>
        {messages.length > 0 ? (
          <div className="flex flex-col overflow-y-scroll max-h-[400px] no-scrollbar">
            {messages.map((item) => (
              <EachMessage key={item._id} item={item}></EachMessage>
            ))}
          </div>
        ) : (
          <p className="text-center py-4">No user found</p>
        )}
      </div>
    </section>
  );
};

export default Messages;
