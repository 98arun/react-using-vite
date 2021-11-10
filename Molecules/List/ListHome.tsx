import ListComp from "./ListComp";

function ListHome() {
  const uList = [
    {
      icon: "https://lh3.googleusercontent.com/a-/AOh14GhdMZ7lKMkbyGosrh-KNZLrq4hmp2BF_xVxKFq6Qg=s192-c-mo",
      userName: "Arun Gupta",
    },
    {
      icon: "https://lh3.googleusercontent.com/a-/AOh14GhdMZ7lKMkbyGosrh-KNZLrq4hmp2BF_xVxKFq6Qg=s192-c-mo",
      userName: "Arun Gupta",
    },
    {
      icon: "https://lh3.googleusercontent.com/a-/AOh14GhdMZ7lKMkbyGosrh-KNZLrq4hmp2BF_xVxKFq6Qg=s192-c-mo",
      userName: "Arun Gupta",
    },
    {
      icon: "https://lh3.googleusercontent.com/a-/AOh14GhdMZ7lKMkbyGosrh-KNZLrq4hmp2BF_xVxKFq6Qg=s192-c-mo",
      userName: "Arun Gupta",
    },
  ];
  const uListName = uList.map((item, index) => (
    <ListComp key={index} userName={item.userName} icon={item.icon} />
  ));

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {uListName}
      </div>
    </>
  );
}
export default ListHome;
