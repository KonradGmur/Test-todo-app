import React, { useState, useReducer, useEffect } from "react";
import ToDoItem from "../../components/ToDoItem/index";
import NewTodoForm from "../../components/NewTodoForm/index";
import styled from "styled-components";
import * as ToDoItemApi from "../../helpers/toDoItemApi";
import * as _ from "ramda";
import { toDoItemsApiUrl } from "../../helpers/routes";

const Header = styled.h1`
  color: #fff;
`;

const DestroyButton = styled.button`
  border-radius: 10px;
  background: red;
  padding: 5px;
  color: #fff;
  margin-bottom: 10px;
`;

const initialState = {
  todos: {},
  todoIds: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: {
          ...state.todos,
          [action.todo.id]: action.todo,
        },
        todoIds: [...state.todoIds, action.todo.id],
      };
    default:
      return state;
  }
};

const ToDoList = () => {
  const [draft, setDraft] = useState("");
  const [store, dispatch] = useReducer(reducer, initialState);

  useEffect(async () => {
    const todos = await ToDoItemApi.getAll();
    todos.map((todo) => {
      dispatch({ type: "ADD_TODO", todo });
    });
  }, []);

  const addToDo = async () => {
    const todo = await ToDoItemApi.create({ content: draft });
    dispatch({
      type: "ADD_TODO",
      todo,
    });
    setDraft("");
  };

  return (
    <div>
      <Header>My project</Header>
      <DestroyButton onClick={this.removeAll}>Remove all</DestroyButton>
      {store.todoIds.map((id) => (
        <ToDoItem
          key={id}
          id={id}
          text={store.todos[id].name}
          toggleDone={this.toggleDone}
          destroy={this.destroyToDo}
          done={store.todos[id].done}
        />
      ))}
      <NewTodoForm
        onSubmit={addToDo}
        onChange={(event) => {
          setDraft(event.target.value);
        }}
        draft={draft}
      />
    </div>
  );
};

export default ToDoList;

// class ToDoList extends Component {
//   componentDidMount = async () => {
//     const tasks = await ToDoItemApi.getAll();
//     this.setState({ tasks });
//   };

//   static defaultProps = {
//     tasks: [],
//     title: "Todo list",
//   };

//   state = {
//     tasks: this.props.tasks,
//     draft: "",
//   };

//   updateDraft = (e) => {
//     this.setState({
//       draft: e.target.value,
//     });
//   };

//   addToDo = async () => {
//     const { tasks, draft } = this.state;
//     const task = await ToDoItemApi.create({ content: draft });

//     this.setState({
//       tasks: _.append(task, tasks),
//       draft: "",
//     });
//   };

//   removeAll = () => {
//     this.setState({ tasks: [] });
//   };

//   findById = (id, arr) => {
//     const index = _.findIndex(_.propEq("id", id))(arr);

//     return { index, task: arr[index] };
//   };

//   destroyToDo = async (id) => {
//     const { tasks } = this.state;
//     await ToDoItemApi.destroy(id);
//     const { index } = this.findById(id, tasks);

//     this.setState({ tasks: _.remove(index, 1, tasks) });
//   };

//   toggleDone = async (id) => {
//     const { tasks } = this.state;
//     const { index, task } = this.findById(id, tasks);
//     const response = await ToDoItemApi.update(id, { done: !task.done });

//     this.setState({ tasks: _.update(index, response, tasks) });
//   };

//   render() {
//     const { title } = this.props;
//     const { tasks, draft } = this.state;
//     return (
//       <div>
//         <Header>{title}</Header>
//         <DestroyButton onClick={this.removeAll}>Remove all</DestroyButton>
//         {tasks.map((task) => (
//           <ToDoItem
//             destroy={this.destroyToDo}
//             key={task.id}
//             id={task.id}
//             text={task.name}
//             toggleDone={this.toggleDone}
//             done={task.done}
//           />
//         ))}
//         <NewTodoForm
//           onSubmit={this.addToDo}
//           onChange={this.updateDraft}
//           draft={draft}
//         />
//       </div>
//     );
//   }
// }

// export default ToDoList;
