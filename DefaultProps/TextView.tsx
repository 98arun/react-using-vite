interface ITextViewProps {
  lines: number;
  textDecoration: string;
  label: string;
  color: string;
  size: string;
  weight: number;
  letterSpacing: string;
  align: string;
  lineHeight: string;
}

const TextView = ({
  lines,
  textDecoration,
  label,
  color,
  size,
  weight,
  letterSpacing,
  align,
  lineHeight,
}: ITextViewProps) => {
  console.log("textView Render");
  const style = {
    color,
    letterSpacing,
    lineHeight,
    align,
    fontSize: size,
    fontWeight: weight,
  };
  return <p style={style}>{label}</p>;
};

TextView.defaultProps = {
  lines: 1,
  textDecoration: "none",
  color: "blue",
  size: "26px",
  weight: 700,
  letterSpacing: "normal",
  align: "left",
  lineHeight: "normal",
};

export default TextView;
