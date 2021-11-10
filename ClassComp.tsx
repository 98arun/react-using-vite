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
    const counter = Number(this.state.inp1) + Number(this.state.inp2);
    this.setState({
      counter,
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

  _handleInput = (key: string, value: string) => {
    console.log({ key, value });
    this.setState({
      [key]: value,
    });
  };

  _handleInputWithEvent = (e: any) => {
    const { name, value } = e.target;
    console.log({ name, value });
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { inp1, inp2, counter } = this.state;
    return (
      <>
        <div className="Apps">
          <div className="wrap">
            <p>The Answer is : {counter}</p>
            <input
              type="text"
              name="inp1"
              value={inp1}
              /*  onChange={(e) => {
                this._handleInput("inp1", e.target.value);
              }} 
              // onChange={this._handleInputWithEvent}
            />
            <input
              type="text"
              name="inp2"
              value={inp2}
              /* onChange={(e) => {
                this._handleInput("inp2", e.target.value);
              }} */
              onChange={this._handleInputWithEvent}
            />
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
