import { Component } from "react";
import "./App.css";

export default class ClassComp extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      counter: 0,
      inp1: "",
      inp2: "",
    };
  }
  _handleOnchange1 = (data: any) => {
    this.setState({ inp1: data.target.value });
    console.log(this.state.inp1);
  };
  _handleOnchange2 = (data: any) => {
    this.setState({ inp2: data.target.value });
    console.log(this.state.inp2);
  };

  _handleAdd = () => {
    this.setState({
      counter: parseInt(this.state.inp1) + parseInt(this.state.inp2),
    });
  };
  _handleSub = () => {
    this.setState({
      counter: this.state.inp1 - this.state.inp2,
    });
  };
  _handleMultiply = () => {
    this.setState({
      counter: this.state.inp1 * this.state.inp2,
    });
  };
  _handleDivide = () => {
    this.setState({
      counter: this.state.inp1 / this.state.inp2,
    });
  };

  render() {
    const { inp1, inp2, counter } = this.state;
    return (
      <>
        <div className="Apps">
          <div className="wrap">
            <p>The Answer is : {counter}</p>
            <input type="text" value={inp1} onChange={this._handleOnchange1} />
            <input type="text" value={inp2} onChange={this._handleOnchange2} />
            <button onClick={this._handleAdd}>Add</button>
            <button onClick={this._handleSub}>Sub</button>
            <button onClick={this._handleMultiply}>Multiply</button>
            <button onClick={this._handleDivide}>Divide</button>
          </div>
        </div>
      </>
    );
  }
}
