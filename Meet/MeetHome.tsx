import Meet from "./Meet";
import "./Meet.css";
const userList = [
  {
    uname: "Arun",
    image:
      "https://lh3.googleusercontent.com/a-/AOh14GhdMZ7lKMkbyGosrh-KNZLrq4hmp2BF_xVxKFq6Qg=s192-c-mo",
  },
  {
    uname: "Arun",
    image:
      "https://lh3.googleusercontent.com/a-/AOh14GhdMZ7lKMkbyGosrh-KNZLrq4hmp2BF_xVxKFq6Qg=s192-c-mo",
  },
  {
    uname: "Arun",
    image:
      "https://lh3.googleusercontent.com/a-/AOh14GhdMZ7lKMkbyGosrh-KNZLrq4hmp2BF_xVxKFq6Qg=s192-c-mo",
  },
  {
    uname: "Arun",
    image:
      "https://lh3.googleusercontent.com/a-/AOh14GhdMZ7lKMkbyGosrh-KNZLrq4hmp2BF_xVxKFq6Qg=s192-c-mo",
  },
  {
    uname: "Arun",
    image:
      "https://lh3.googleusercontent.com/a-/AOh14GhdMZ7lKMkbyGosrh-KNZLrq4hmp2BF_xVxKFq6Qg=s192-c-mo",
  },
  {
    uname: "Arun",
    image:
      "https://lh3.googleusercontent.com/a-/AOh14GhdMZ7lKMkbyGosrh-KNZLrq4hmp2BF_xVxKFq6Qg=s192-c-mo",
  },
  {
    uname: "Arun",
    image:
      "https://lh3.googleusercontent.com/a-/AOh14GhdMZ7lKMkbyGosrh-KNZLrq4hmp2BF_xVxKFq6Qg=s192-c-mo",
  },
  {
    uname: "Arun",
    image:
      "https://lh3.googleusercontent.com/a-/AOh14GhdMZ7lKMkbyGosrh-KNZLrq4hmp2BF_xVxKFq6Qg=s192-c-mo",
  },
  {
    uname: "Arun",
    image:
      "https://lh3.googleusercontent.com/a-/AOh14GhdMZ7lKMkbyGosrh-KNZLrq4hmp2BF_xVxKFq6Qg=s192-c-mo",
  },
  {
    uname: "Arun",
    image:
      "https://lh3.googleusercontent.com/a-/AOh14GhdMZ7lKMkbyGosrh-KNZLrq4hmp2BF_xVxKFq6Qg=s192-c-mo",
  },
  {
    uname: "Arun",
    image:
      "https://lh3.googleusercontent.com/a-/AOh14GhdMZ7lKMkbyGosrh-KNZLrq4hmp2BF_xVxKFq6Qg=s192-c-mo",
  },
  {
    uname: "Arun",
    image:
      "https://lh3.googleusercontent.com/a-/AOh14GhdMZ7lKMkbyGosrh-KNZLrq4hmp2BF_xVxKFq6Qg=s192-c-mo",
  },
  {
    uname: "Arun",
    image:
      "https://lh3.googleusercontent.com/a-/AOh14GhdMZ7lKMkbyGosrh-KNZLrq4hmp2BF_xVxKFq6Qg=s192-c-mo",
  },
  {
    uname: "Arun",
    image:
      "https://lh3.googleusercontent.com/a-/AOh14GhdMZ7lKMkbyGosrh-KNZLrq4hmp2BF_xVxKFq6Qg=s192-c-mo",
  },
  {
    uname: "Arun",
    image:
      "https://lh3.googleusercontent.com/a-/AOh14GhdMZ7lKMkbyGosrh-KNZLrq4hmp2BF_xVxKFq6Qg=s192-c-mo",
  },
];

const listName = userList.map((item, index) => (
  <Meet key={index} uname={item.uname} image={item.image} />
));
function MeetHome() {
  return (
    <>
      <p className="meet-home-p"> Meet Home</p>
      <div className="meet-home">{listName}</div>
    </>
  );
}

export default MeetHome;
