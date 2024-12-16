import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="z-[30] w-screen h-screen relative flex justify-center items-center"
    style={{
        backgroundImage : `url('https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`
    }}
    >
      <div className=" text-white rounded-xl w-[400px] h-[200px] mx-auto">
        <h1 className="w-full text-center text-3xl  bg-purple-600 border rounded-md">
          Counter
        </h1>
        <div className="w-full h-full flex justify-around items-center bg-green-500 mx-auto flex-col">
          <div className="text-red-400 font-bold text-2xl">
            Counter: <span className="text-white">{counter}</span>
          </div>

          <div className="flex gap-x-10">
            <button
              className="text-2xl text-black font-bold border bg-blue-700 rounded-full p-2
            hover:bg-red-900 hover:text-white transition-all duration-200"
              onClick={() => setCounter(counter + 1)}
            >
              Increase
            </button>

            <button
              className="text-2xl text-black font-bold border bg-blue-700 rounded-full p-2
            hover:bg-red-900 hover:text-white transition-all duration-200"
              onClick={() => setCounter(counter - 1)}
            >
              Decrease
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
