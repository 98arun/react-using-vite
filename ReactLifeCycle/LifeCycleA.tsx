import { Component } from "react";

export default class LifeCycleA extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      counter: 0,
    };
    console.log("Inside LifeCycleA Constructor");
  }
  static getDerivedStateFromProps(props: any, state: any) {
    console.log("Inside LifeCycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Inside LifeCycleA componentDidMount");
  }

  componentWillUnmount() {
    console.log("Inside LifeCycleA componentWillUnmount");
  }

  _handleCounterChange = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  componentDidUpdate(prevProps: any, prevState: any) {
    console.log("Inside LifeCycleA componentDidUpdate", prevProps, prevState);
  }

  shouldComponentUpdate(nextProps: any, nextState: any) {
    console.log(
      "Inside LifeCycleA shouldComponentUpdate",
      this.props,
      this.state
    );
    const { counter } = this.state;
    if (counter % 5 === 0) {
      return true;
    }

    return false;
  }

  render() {
    const { counter } = this.state;
    console.log("Inside LifeCycleA Render");
    return (
      <>
        <div>
          <p className="name">
            My Name is Arun LifeCycleA &amp; amy counter is : {counter}
          </p>
          <button onClick={this._handleCounterChange}>Increase counter</button>
        </div>
      </>
    );
  }
}
