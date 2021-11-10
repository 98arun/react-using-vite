import Button from "../../Atoms/Buttons";
function ListComp(props: any) {
  const { icon, userName } = props;
  const list = [
    {
      label: "",
    },
  ];
  const listItem = list.map((item, index) => (
    <Button key={index} label={item.label} />
  ));
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: 250,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img
          style={{ width: "40px", height: "40px", borderRadius: "50%" }}
          src={icon}
          alt={userName}
        />
        <h4>{userName}</h4>
        {listItem}
        {listItem}
      </div>
    </>
  );
}

export default ListComp;
