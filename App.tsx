import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [inp1, setInp1] = useState(0);
  const [inp2, setInp2] = useState(0);

  const onInputChange = (input: any) => {
    if (!input || (input !== "sum" && input !== "subtract")) {
      return;
    }

    if (input === "sum") {
      setCount(inp1 + inp2);
      setInp1(0);
      setInp2(0);
      return;
    }
    setCount(inp1 - inp2);
    setInp1(0);
    setInp2(0);
    return;
  };
  // console.log(onInputChange)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!&nbsp;{count}</p>
        <p>
          <button
            type="button"
            style={{ backgroundColor: count % 5 ? "white" : "red" }}
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>
          <button
            type="button"
            disabled={count === 0}
            onClick={() => setCount(count - 1)}
          >
            Decrement
          </button>
        </p>
        <p>
          {count}
          <br />
          <input
            type="text"
            value={inp1}
            onChange={(data) => {
              console.log(data.target.value);
              setInp1(parseInt(data.target.value || "0"));
            }}
          />
          <input
            type="text"
            value={inp2}
            onChange={(data) => {
              console.log(data.target.value);
              setInp2(parseInt(data.target.value || "0"));
            }}
          />
          <br />
          <button
            type="button"
            onClick={() => {
              onInputChange("sum");

              // setInp1(0);
              // setInp2(0);
            }}
          >
            Add
          </button>
          <button
            type="button"
            onClick={() => {
              onInputChange("subtract");

              // setInp1(0);
              // setInp2(0);
            }}
          >
            Subtract
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
