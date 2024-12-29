import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchTodoById = createAsyncThunk(
  "todos/fetchTodoById",
  async (todoId, thunkAPI) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${todoId}`
      );
      if (!response.ok) {
        throw new Error("Error!!!!!");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const singleTodoSlice = createSlice({
  name: "singleTodo",
  initialState: {
    todo: {},
    loading: true,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodoById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTodoById.fulfilled, (state, action) => {
        state.loading = false;
        state.todo = action.payload;
      })
      .addCase(fetchTodoById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default singleTodoSlice.reducer;

