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
      // console.log(new Date().getSeconds);
      const Task = {
        id: nanoid(),
        text: action.payload,
        complete: false,
      };
      state.Tasks.push(Task);

    },
    deleteTask: (state, action) => {

      console.log("state", state.Tasks);
      state.Tasks = state.Tasks.filter((Task) => Task.id !== action.payload);
      localStorage.setItem("tasks",JSON.stringify(state.Tasks)); 
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
      console.log("state", state);
      const Task = state.Tasks.find((Task) => Task.id == action.payload);
      Task.complete = !Task.complete;
      console.log("state", state);
    },
  },
});

export const { addToTask, deleteTask, updateTask, toggleComplete } =
  taskSlice.actions;

export default taskSlice.reducer;
