import "./App.css";
import Messages from "./Components/Messages/Messages";
import NewConnections from "./Components/NewConnections/NewConnections";

function App() {
  return (
    <div className="App">
      <section className="max-w-[350px] mx-auto bg-[#eef9fc] border-black border-2">
        <NewConnections></NewConnections>
        <Messages></Messages>
      </section>
    </div>
  );
}

export default App;
