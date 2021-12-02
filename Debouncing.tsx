import { useState } from "react";

function Debouncing() {
  const [searchInput, setSearchInput] = useState("");

  const _handelSearchInput = (e: any) => {
    setSearchInput(e.target.value);
  };
  return (
    <>
      <input
        type="text"
        name="search"
        value={searchInput}
        placeholder="Enter something"
        onChange={_handelSearchInput}
      />
    </>
  );
}
export default Debouncing;
