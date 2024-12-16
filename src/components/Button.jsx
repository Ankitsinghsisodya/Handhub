import React from "react";

function Button({ color, onClick }) {
  return (
    <button
      className={`text-white rounded-xl w-[80px] h-[40px] mt-2`}
      style={{ backgroundColor: color }}
      onClick={() => onClick(color)}
    >
      <span className="font-bold"> {color}</span>
    </button>
  );
}

export default Button;
