import { Component } from "react";
import { UserConsumer } from "./userContext";

export default class CompD extends Component<any, any> {
  render() {
    return (
      <>
        <UserConsumer>
          {(username) => {
            return <div>Hello {username}</div>;
          }}
        </UserConsumer>
      </>
    );
  }
}
