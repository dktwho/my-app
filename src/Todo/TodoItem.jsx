import PropTypes from "prop-types";
import React, { useContext } from "react";
import Context from "../context";

const styles = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: ".5 rem 1rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginBottom: ".5rem",
  },
  input: {
    marginRight: "1rem",
  },
};

const TodoItem = ({ id, title, completed, todo, index, onChange }) => {
  const classes = [];
  const { removeTodo } = useContext(Context);

  if (todo.completed) {
    classes.push("done");
  }

  return (
    <li style={styles.li}>
      <span className={classes.join("")}>
        <input
          style={styles.input}
          type="checkbox"
          checked={todo.completed}
          onChange={() => onChange(todo.id)}
        />
        &nbsp;
        {todo.title}
      </span>
      <button onClick={() => removeTodo(todo.id)} className="rm">
        &times;
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TodoItem;
