import React, { Component } from "react";
import styled from "styled-components";

const Item = styled.div`
  background: #343744;
  border-radius: 10px;
  padding: 14px;
  margin-bottom: 7px;
  color: ${(props) => (props.done ? "#1fd84d" : "auto")};
  text-decoration: ${(props) => (props.done ? "line-through" : "auto")};
`;

class ToDoItem extends Component {
  static defaultProps = {
    done: false,
  };
  state = {
    done: this.props.false,
  };

  toggleDone = () => {
    fetch(`http://localhost:4454/servers/${this.props.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json; charser=utf-8",
      },
      body: JSON.stringify({
        servers: {
          done: !this.state.done,
        },
      }),
    }).then((response) => {
      if (response.ok) {
        this.setState({ done: !this.state.done });
      }
    });
  };

  render() {
    const { text } = this.props;
    return (
      <Item onClick={this.toggleDone} done={this.state.done}>
        {text}
      </Item>
    );
  }
}

export default ToDoItem;
