function Button(props: any) {
  const { label } = props;

  return (
    <>
      <button style={{ width: "20px", height: "20px", borderRadius: "50%" }}>
        {label}
      </button>
    </>
  );
}

export default Button;
