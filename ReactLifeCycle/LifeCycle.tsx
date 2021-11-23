import { Component } from "react";
import LifeCycleA from "./LifeCycleA";

export default class LifeCycle extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      counter: 0,
    };
    console.log("Inside LifeCycle Constructor");
  }
  static getDerivedStateFromProps(props: any, state: any) {
    console.log("Inside LifeCycle getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Inside LifeCycle componentDidMount");
    // this._handleChangeCounter();
  }

  // _handleChangeCounter = () => {
  //   this.setState({ counter: this.state.counter + 2 }, () => {
  //     console.log("@Updated State: ", this.state.counter);
  //   });
  // };

  componentWillUnmount() {
    console.log("Inside LifeCycle componentWillUnmount");
  }

  _handleCounterChange = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  shouldComponentUpdate(nextProps: any, nextState: any) {
    console.log(
      "Inside LifeCycle shouldComponentUpdate",
      // this.props,
      // this.state,
      nextProps,
      nextState
    );
    // const { counter } = this.state;
    // if (counter % 5 === 0) {
    //   return true;
    // }

    return true;
  }
  getSnapshotBeforeUpdate(prevProps: any, prevState: any) {
    console.log(
      "Inside LifeCycle getSnapshotBeforeUpdate",
      prevProps,
      prevState
    );
    return null;
  }
  componentDidUpdate(prevProps: any, prevState: any) {
    console.log("Inside LifeCycle componentDidUpdate", prevProps, prevState);
  }

  render() {
    const { counter } = this.state;
    console.log("Inside LifeCycle Render");
    return (
      <>
        <div>
          <p className="name">
            My Name is Arun &amp; amy counter is : {counter}
          </p>
          <button onClick={this._handleCounterChange}>Increase counter</button>
          <LifeCycleA />
        </div>
      </>
    );
  }
}
