import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

function useInputValue(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);

  return {
    bind: {
      value,
      onChange: (event) => setValue(event.target.value),
    },
    clear: () => setValue(""),
    value: () => value,
  };
}

const AddTodo = ({ onCreate }) => {
  const input = useInputValue("");
  function submitHandler(e) {
    e.preventDefault();
    if (input.value().trim()) {
      onCreate(input.value());
      input.clear();
    }
  }

  return (
    <form onSubmit={submitHandler} style={{ marginBottom: "1rem" }}>
      <input {...input.bind} type="text" />
      <button type="submit">Add todo</button>
    </form>
  );
};

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default AddTodo;
