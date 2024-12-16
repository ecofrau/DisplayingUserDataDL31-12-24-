import React, { useEffect } from "react";
import { fetchToDos } from "../store/Slices/ToDoSlice";
import { useDispatch, useSelector } from "react-redux";
import SingleTodo from "./SingleTodo";

function TodoList() {
  const list = useSelector((state) => state.todo.list);
  const error = useSelector((state) => state.todo.error);
  const loading = useSelector((state) => state.todo.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchToDos());
  }, [dispatch]);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <div>
      {list.map((todo) => (
        <SingleTodo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
