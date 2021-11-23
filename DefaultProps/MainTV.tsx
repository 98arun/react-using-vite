import TextView from "./TextView";
import TextView2 from "./TextView2";

function MainTV() {
  return (
    <div className="">
      <TextView
        label="My name is Arun Gupta"
        lines={1}
        textDecoration={"none"}
        color={"#1d1d1d"}
        size={"16px"}
        weight={400}
        letterSpacing={"normal"}
        align={"left"}
        lineHeight={"normal"}
      />
      <TextView2 color="danger" label="My name is Khyati Gupta" />
      <TextView label="My name is Arun Ravi" />
      <TextView label="My name is Sumeet Chandel" />
      <TextView label="My name is Prakash TM" />
    </div>
  );
}
export default MainTV;
