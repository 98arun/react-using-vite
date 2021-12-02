import { useSelector } from "react-redux";

const Home = () => {
  const myState = useSelector((state: any) => state.changeNumber);
  console.log("Inside Home", myState);

  return (
    <>
      <h1>Hello home {myState.count}</h1>
    </>
  );
};
export default Home;
