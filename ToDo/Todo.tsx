import { Component } from "react";
import { Button, Input, List, ListInlineItem } from "reactstrap";
import "./Todo.css";
export default class Todo extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      input: "",
      todoList: [],
    };
  }
  //   listItem = this.state.todoList.map((data: any) => {
  //     return <li>{data}</li>;
  //   });
  _handleOnchange = (data: any) => {
    this.setState({ input: data.target.value });
    console.log(this.state.input);
  };
  _handleAddNote = (val: any) => {
    this.setState({
      todoList: [this.state.input],
      input: "",
    });
  };
  _deleteNote = () => {
    this.setState({
      todoList: [],
    });
  };
  render() {
    return (
      <>
        <div className="todo-container">
          <h1 className="todo-title">ToDo List</h1>
          <div className="todo-item">
            <Input
              className="todo-input"
              placeholder="Add a Note"
              value={this.state.input}
              onChange={this._handleOnchange}
            ></Input>
            <Button
              onClick={this._handleAddNote}
              className="todo-btn"
              color="secondary"
            >
              +
            </Button>
          </div>
          <List className="list" type="unstyled">
            <div className="list-item">
              <li className="list-text">{this.state.todoList}</li>
              <Button
                onClick={this._deleteNote}
                className="todo-btn"
                color="secondary"
              >
                x
              </Button>
            </div>
            {/* <div className="list-item">
              <li className="list-text">Lorem ipsum dolor sit amet</li>
              <Button className="todo-btn" color="secondary">
                x
              </Button>
            </div>
            <div className="list-item">
              <li className="list-text">Lorem ipsum dolor sit amet</li>
              <Button className="todo-btn" color="secondary">
                x
              </Button>
            </div> */}
          </List>
        </div>
      </>
    );
  }
}
