import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchToDos = createAsyncThunk(
  "todos/fetchToDos",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      if (!response.ok) {
        throw new Error("Error!!!");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    list: [],
    loading: true,
    error: null,
  },
  reducers: {
    add(state, action) {
      state.list.push(action.payload);
    },
    remove(state, action) {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
    changeStatus(state, action) {
      const todo = state.list.find((todo) => todo.id === action.payload);
      todo.completed = !todo.completed;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchToDos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchToDos.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchToDos.rejected, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      });
  },
});

// actions{add,remove, changeStatus}, reducer

export const { add, remove, changeStatus } = todoSlice.actions;
export default todoSlice.reducer;
