import "./Meet.css";
function Meet(props: any) {
  const { uname, image } = props;
  return (
    <div className="meet-container">
      <p className="meet-title">{uname}</p>
      <img className="meet-img" src={image} alt={uname} />
    </div>
  );
}

export default Meet;
