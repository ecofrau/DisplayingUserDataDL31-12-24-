import { composeWithDevTools } from "@redux-devtools/extension";
import todoReducer from "./Slices/ToDoSlice";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore(
  {
    reducer: {
      todo: todoReducer,
    },
  },
  composeWithDevTools()
);
