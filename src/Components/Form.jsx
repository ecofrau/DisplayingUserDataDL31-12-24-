import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/Slices/TodoSlice";

function Form() {
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    const todo = {
      completed: false,
      title: e.target.title.value,
      id: Date.now(),
    };
    dispatch(add(todo));
    e.target.reset();
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="text" required name="title" />
      <button>Add</button>
    </form>
  );
}

export default Form;
