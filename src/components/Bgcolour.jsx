import React, { useState } from "react";
import Button from "./Button";

function Bgcolour() {
  const [col, setCol] = useState("black");
  function handleClick(color) {
    setCol(color);
  }
  return (
    <div
      className="z-[1000] bottom-3 bg-black my-auto absolute w-full h-[70px] left-0 flex p-2 justify-between"
      style={{ backgroundColor: col }}
    >
      <Button color="blue" onClick={handleClick} />
      <Button color="red" onClick={handleClick} />
      <Button color="purple" onClick={handleClick} />
      <Button color="olive" onClick={handleClick} />
      <Button color="gray" onClick={handleClick} />
      <Button color="pink" onClick={handleClick} />
      <Button color="brown" onClick={handleClick} />
    </div>
  );
}

export default Bgcolour;
