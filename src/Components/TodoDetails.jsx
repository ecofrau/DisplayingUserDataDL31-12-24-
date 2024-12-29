import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchTodoById } from "../store/Slices/SingleTodoSlice";

import { useNavigate } from 'react-router-dom';
// import UserDetailPage from "./Pages/UserDetailPage";

function TodoDetails() {


  const nav = useNavigate();

    const handleUserClick = () => {
        nav.push(`/user/${todo.userId}`);
  
    }



  const { id } = useParams();
  const todo = useSelector((state) => state.singleTodo.todo);
  const error = useSelector((state) => state.singleTodo.error);
  const loading = useSelector((state) => state.singleTodo.loading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodoById(id));
  }, [dispatch, id]);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <h2>{todo.title}</h2>


      <p>{todo.body}</p>
      

      <p> <strong>User ID:</strong>{' '}
        <p to={`/users/${todo.userId}`}>{todo.userId}</p>
</p>
      <button onClick={handleUserClick} style={{ cursor: 'pointer', color: 'blue' }}>
      User ID: {todo.userId}</button>
    </div>
  );
}

export default TodoDetails;






   


