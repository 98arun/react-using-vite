// import PropsTypes from "prop-types";

interface ITextViewProps {
  color: "primary" | "secondary" | "success" | "danger" | "warning";
  label: string;
}

const getColor = (key: string) => {
  switch (key) {
    case "primary":
      return "orange";
    case "secondary":
      return "green";
    case "success":
      return "yellow";
    case "danger":
      return "red";
    case "warning":
      return "teal";
    default:
      return "orange";
  }
};

const TextView2 = ({ color, label }: ITextViewProps) => {
  const style = {
    color: getColor(color),
  };
  return <p style={style}>{label}</p>;
};

// TextView2.propTypes = {
//   color: PropsTypes.string.isRequired,
//   label: PropsTypes.string.isRequired,
// };

export default TextView2;
