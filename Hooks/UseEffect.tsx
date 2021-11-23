import { useEffect, useState } from "react";

let a = 1;
const UseEffectComp = (props: any) => {
  const [searchInput, setSearchInput] = useState("");
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(() => {
    console.log("Component did mount");
  }, []);

  useEffect(() => {
    console.log("Component loading everytime");
  });

  useEffect(() => {
    console.log("Data changing: ", a);
  }, [a]);

  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
      </div>

      <p>Counter 1:- {counter}</p>
      <p>Counter 2:- {counter2}</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
          a = a + 10;
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCounter2(counter2 + 1);
        }}
      >
        New Increment
      </button>
    </>
  );
};

export default UseEffectComp;
