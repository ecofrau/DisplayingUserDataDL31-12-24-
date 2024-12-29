import React from "react";
import { remove, changeStatus } from "../store/Slices/TodoSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
//      id, completed, title
function SingleTodo({ todo }) {
  const { id, completed, title } = todo;
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/todos/${id}`);
  }
  const dispatch = useDispatch();
  return (
    <div>
      <p
        onClick={handleClick}
        style={{
          color: completed ? "gray" : "black",
          textDecoration: completed ? "line-through" : "",
          cursor: "pointer",
        }}>
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