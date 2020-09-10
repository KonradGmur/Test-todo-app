import React, { Component } from "react";
import { get, update } from "../../helpers/toDoItemApi";
import { Formik } from "formik";
import {
  SubmitButton,
  TextInput,
  Label,
  Select,
  ErrorMsg,
} from "../../helpers/theme";

class ToDoEditForm extends Component {
  state = {
    toDoItem: null,
    fetched: false,
  };

  itemId = () => this.props.match.params.itemId;

  componentDidMount = async () => {
    const toDoItem = await get(this.itemId());
    console.log(toDoItem);
    this.setState({ toDoItem, fetched: true });
  };
  render() {
    return (
      <div>
        Edit form for {this.props.match.params.itemId}
        {this.state.fetched ? (
          <Formik
            initialValues={{ ...this.state.toDoItem }}
            onSubmit={(values) => {
              update(this.itemId(), { ...values });
            }}
            validate={(values) => {
              let errors = {};

              if (!values.content) {
                errors.content = "Required";
              }
              return errors;
            }}
            render={({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <Label>
                  Content *<ErrorMsg>{errors.content}</ErrorMsg>
                  <TextInput
                    name="content"
                    onChange={handleChange}
                    value={values.content}
                  />
                </Label>
                <br />
                <SubmitButton type="submit">Update</SubmitButton>
              </form>
            )}
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

export default ToDoEditForm;
