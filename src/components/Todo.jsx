import React from "react";
import { useSelector } from "react-redux";

function Todo() {
  const Tasks = useSelector((state) => state.Tasks);
  console.log(Tasks);
  return (
    <div>
       <ul>

        {Tasks.Tasks.map((Task) => (
          <li key={Task.id}>{Task.text}</li>
        ))}
        {
            console.log(Tasks.Tasks)
        }
      </ul>

    </div>
  );
}

export default Todo;
