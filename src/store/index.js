import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../store';
import todosReducer from '../store';

const store = configureStore({
  reducer: {
    user: userReducer,
    todos: todosReducer,
  },
});

export default store;
