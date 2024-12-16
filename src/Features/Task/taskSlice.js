import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  Tasks: [],
};

/*
    id, text, complete
*/

export const taskSlice = createSlice({
  name: "Task",
  initialState,
  reducers: {
    addToTask: (state, action) => {
      const Task = {
        id: nanoid(),
        text: action.text,
        complete: action.payload,
      };
      state.Tasks.push(Task);
    },
    deleteTask: (state, action) => {
      state = state.Tasks.filter((Task) => Task.id !== action.payload);
    },
    updateTask: (state, action) => {
      const { id, text, complete } = action.payload;
      state = state.Tasks.map((Task) =>
        Task.id === action.payload.id
          ? {
              id: Task.id,
              text: action.payload.text,
              complete: action.payload.complete,
            }
          : Task
      );
    },
    toggleComplete: (state, action) => {
      const Task = state.Tasks.find((Task) => Task.id == action.payload);
      Task.complete = !Task.complete;
    },
  },
});

export const { addToTask, removeTask, updateTask } = taskSlice.actions;

export default taskSlice.reducer;
