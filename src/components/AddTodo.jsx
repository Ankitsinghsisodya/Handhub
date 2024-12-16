import React from "react";
import { useState } from "react";
import {useDispatch} from 'react-redux'
import { addToTask } from "../Features/Task/taskSlice";

function AddTodo() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch()
  return (
    <form
      className="mt-2 shadow-md w-[50%] flex justify-between items-center"
      onSubmit={(e) => {
        e.preventDefault();

        dispatch(addToTask(task))
        setTask("");

      }}
    >
      <input
        type="text"
        placeholder="Write Task"
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        onChange={(e) => setTask(e.target.value)}
        value={task}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0 h-9"
      >
        Add
      </button>
    </form>
  );
}

export default AddTodo;
