import { useState, useRef, useEffect } from "react";

const UseRef = () => {
  const _searchRef = useRef<any>({});
  const [otp, setOtp] = useState(new Array(4).fill(""));

  const _handleSubmit = () => {
    console.log({ Search: _searchRef.current.value });

    setTimeout(() => {
      _searchRef.current.value = "";
      _searchRef?.current?.focus();
    }, 2000);
  };

  useEffect(() => {
    _searchRef?.current?.focus();
  }, []);

  const _handelOtp = (element: any, index: any) => {
    if (isNaN(element.value)) return false;

    setOtp([
      ...otp.map((e, id) => {
        id === index ? element.value : e;
      }),
    ]);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  return (
    <>
      <input type="text" placeholder="Search Here" ref={_searchRef} />
      <button onClick={_handleSubmit}>Save </button>
      <p>Enter otp</p>
      {otp.map((data, index) => {
        return (
          <input
            type="text"
            name="otp"
            maxLength={1}
            key={index}
            value={data}
            onChange={(e) => {
              _handelOtp(e.target, index);
            }}
            onFocus={(e) => {
              e.target.select();
            }}
          />
        );
      })}
      <button
        onClick={(e) => {
          setOtp([...otp.map((e) => "")]);
        }}
      >
        Clear
      </button>
    </>
  );
};

export default UseRef;
