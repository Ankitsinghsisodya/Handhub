import React, { useState } from "react";
import Counter from "./components/Counter";
import Bgcolour from "./components/Bgcolour";
import Passwordgenerator from "./components/Passwordgenerator";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Currencyconverter from "./components/Currencyconverter";
import Task from "./components/Task";


function App() {
  const [bgcolor, setBgColor] = useState("red");
  return (
    <div
      className="w-screen h-screen bg-blue-400 flex justify-center items-start relative"
      style={{ backgroundColor: bgcolor }}
    >
      <div className="flex justify-around w-full items-center h-screen">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/counter" element={<Counter />} />
              <Route
                path="/passwordGenerator"
                element={<Passwordgenerator />}
              />
          
              <Route
                path="/currencyconverter"
                element={
                 <Currencyconverter/>
                }
              />

              <Route
                path="/task"
                element={
                 <Task/>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
        <Counter/>
      </div>
    </div>
  );
}

export default App;
