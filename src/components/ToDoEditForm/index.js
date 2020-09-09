import React, { Component } from "react";
import { get } from "../../helpers/toDoItemApi";

class ToDoEditForm extends Component {
  state = {
    toDoItem: null,
    fetched: false,
  };

  componentDidMount = async () => {
    const toDoItem = await get(this.props.match.params.itemId);
    console.log(toDoItem);
    this.setState({ toDoItem, fetched: true });
  };
  render() {
    return (
      <div>
        Edit form for {this.props.match.params.itemId}
        {this.state.fetched ? <p>Item fetched</p> : <p>Loading...</p>}
      </div>
    );
  }
}

export default ToDoEditForm;
