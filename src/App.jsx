import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [Counter, setCounter] = useState(5);
  const [message, setMessage] = useState("");

  //let Counter = 5;

  const addValue = () => {
    if (Counter < 20) {
      setCounter(Counter + 1);
    } else {
      setMessage("20");
    }
  };
  const removeValue = () => {
    // setCounter(Counter - 1);

    // setMessage("0");
    if (Counter > 0) {
      setCounter(Counter - 1);
    } else {
      setMessage("0");
    }
  };

  return (
    <>
      <h1>COUNTER</h1>
      <h2>Counter Value: {Counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value </button>
    </>
  );
}

export default App;
