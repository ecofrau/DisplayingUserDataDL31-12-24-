import React from "react";
import { remove, changeStatus } from "../store/Slices/ToDoSlice";
import { useDispatch } from "react-redux";

//completed id title: key
function SingleTodo({ todo }) {
  const { id, completed, title } = todo;

  const dispatch = useDispatch();
  return (
    <div>
      <p
        style={{
          color: completed ? "gray" : "black",
          textDecoration: completed ? "line-through" : " ",
        }}
      >
        {title}
      </p>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(changeStatus(id))}
      />
      <button onClick={() => dispatch(remove(id))}>Remove</button>
    </div>
  );
}

export default SingleTodo;
