import { Component } from "react";
import CompB from "./CompB";

export default class CompA extends Component<any, any> {
  render() {
    return (
      <>
        <CompB />
      </>
    );
  }
}
