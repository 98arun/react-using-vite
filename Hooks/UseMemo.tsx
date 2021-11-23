import { useState, useMemo, useEffect, useCallback, memo } from "react";
import UseCallbackComp from "./UseCallback";

const UseMemoComp = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [dark, setDark] = useState(false);

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
  };
  useEffect(() => {
    for (var i = 0; i < 10; i++) {
      console.log("useEffect i: ", i);
    }
    setCounter2(i);
  }, []);

  //   const _getFinal = useCallback(() => {
  //     console.log("useCallback i: ");
  //   }, []);

  const _getFinalValue = useMemo(() => {
    for (var i = 0; i < 10; i++) {
      console.log("useMemo i: ", i);
    }
    return i;
  }, []);
  return (
    <div style={theme}>
      <p>
        Hello Use Memo memo:{_getFinalValue} useState:{counter}
        useEffect:{counter2}
      </p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Re-Render
      </button>
      <button
        onClick={() => {
          setCounter2(counter2 + 1);
        }}
      >
        Re-Render Counter 2
      </button>
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle theme
      </button>
      <UseCallbackComp counter={counter} />
    </div>
  );
};

export default memo(UseMemoComp);
