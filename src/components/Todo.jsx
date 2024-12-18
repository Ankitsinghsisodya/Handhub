import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  deleteTask,
  toggleComplete,
  updateTask,
  addToTask,
} from "../Features/Task/taskSlice";
import { useEffect } from "react";
import { useCallback } from "react";

function Todo() {
  const Tasks = useSelector((state) => state.Tasks);
  const dispatch = useDispatch();

  const [isEditable, setIsEditable] = useState({});
  const [taskTexts, setTaskTexts] = useState({});

  // // Load tasks from local storage when the component mounts
  useEffect(() => {
    async function pp() {
      await clean();
      async function clean() {
        Tasks.Tasks.map((task) => {
          dispatch(deleteTask(task.id));
        });
      }
    }
    pp();
    const temp = [];
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks && storedTasks.length > 0) {
      storedTasks.forEach((task) => {
        dispatch(addToTask(task.text));
      });
    }
  }, []);

  // // // Save tasks to local storage whenever they change
  useEffect(() => {
    if (Tasks && Tasks.Tasks.length > 0) {
      localStorage.removeItem("tasks");
      if (Tasks) localStorage.setItem("tasks", JSON.stringify(Tasks?.Tasks));
    }
  }, [Tasks?.Tasks]);

  useEffect(() => {
    const initialEditableState = {};
    const initialTaskTexts = {};
    Tasks?.Tasks.forEach((Task) => {
      initialEditableState[Task.id] = false;
      initialTaskTexts[Task.id] = Task.text;
    });
    setIsEditable(initialEditableState);
    setTaskTexts(initialTaskTexts);
  }, [Tasks?.Tasks]);
  const handleEditClick = (taskid) => {
    if (isEditable[taskid]) {
      dispatch(
        updateTask({ id: taskid, text: taskTexts[taskid], complete: false })
      );
    }
    setIsEditable((prev) => ({
      ...prev,
      [taskid]: !prev[taskid],
    }));
  };

  const handleTextChange = (taskId, newText) => {
    setTaskTexts((prev) => ({
      ...prev,
      [taskId]: newText,
    }));
  };

  return (
    <div className="flex flex-col gap-y-2 my-3 w-[50%]">
      {Tasks?.Tasks.map((Task) => (
        <li
          key={Task.id}
          className="text-black bg-[#ccbed7] h-[40px] font-bold flex items-center p-2 max-w-md rounded-md justify-between"
        >
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              onChange={() => dispatch(toggleComplete(Task.id))}
              checked={Task.complete}
            />

            <input
              type="text"
              disabled={!isEditable[Task.id]}
              value={taskTexts[Task.id]}
              className={Task.complete ? "line-through" : ""}
              onChange={(e) => handleTextChange(Task.id, e.target.value)}
            />
          </div>
          <div className="flex gap-x-2">
            <button
              className="bg-green-800 rounded-md h-[40px] w-[50px] inline-flex justify-center items-center hover:bg-blue-800 cursor-pointer"
              onClick={() => handleEditClick(Task.id)}
            >
              {isEditable[Task.id] ? "Save" : "Edit"}
            </button>
            <button
              className="bg-green-800 rounded-md h-[40px] w-[50px] inline-flex justify-center items-center hover:bg-blue-800 cursor-pointer"
              onClick={() => {
                dispatch(deleteTask(Task.id));
              }}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </div>
  );
}

export default Todo;
