import React from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import { store } from "../app/store";
import { Provider } from "react-redux";
function Task() {
  return (
    <Provider store={store}>
      <div className=" bg-[#172842] h-screen w-screen">
        <div className="mx-auto py-3 px-4 max-w-4xl w-full">
          <AddTodo />

          <Todo />
        </div>
      </div>
    </Provider>
  );
}

export default Task;
