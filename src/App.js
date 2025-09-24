import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const btnAdd = () => {
    setCount(count + 1);
  };
  const btnMinus = () => {
    setCount(count - 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World, Lại là Hoàng đây</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Count: {count}</p>
        <button onClick={btnAdd}>Count++</button>
        <button onClick={btnMinus}>Count--</button>
      </header>
    </div>
  );
}

export default App;
