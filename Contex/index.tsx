import { Component } from "react";
import CompA from "./CompA";
import { UserProvider } from "./userContext";

export default class ClassContext extends Component<any, any> {
  render() {
    return (
      <>
        <UserProvider value="arun">
          <CompA />
        </UserProvider>
      </>
    );
  }
}
