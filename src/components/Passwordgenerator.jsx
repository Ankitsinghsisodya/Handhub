import React, { useCallback, useEffect, useState, useRef } from "react";

function Passwordgenerator() {
  const [password, setPassword] = useState("");
  const [isNumber, setIsNumber] = useState(false);
  const [isCharacter, setIsCharacter] = useState(false);
  const [length, setLength] = useState(8);
  const passwordRef = useRef(null);
  useEffect(() => {
    let sample = "";
    for (
      let ch = 97;
      ch <= 122;
      ++ch // ASCII codes for 'a' to 'z'
    )
      sample += String.fromCharCode(ch);
    for (
      let ch = 65;
      ch <= 90;
      ++ch // ASCII codes for 'A' to 'Z'
    )
      sample += String.fromCharCode(ch);
    console.log(sample);
    if (isNumber) for (let num = 0; num < 10; ++num) sample += num;
    const specialCharacters = "!@#$%^&*()_+[]{}|;:',.<>?/~`-=";
    if (isCharacter) sample += specialCharacters;

    let ans = "";
    for (let len = 0; len < length; ++len) {
      ans += sample.charAt(Math.ceil(Math.random() * sample.length));
    }
    setPassword(ans);
  }, [isCharacter, isNumber, length]);
  return (
    <div
    className="w-screen h-screen relative flex justify-center items-center"
    style={{
        backgroundImage : `url('https://images.pexels.com/photos/620337/pexels-photo-620337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`
    }}
    >
      <div className="bg-gray-400 rounded-3xl flex flex-col min-w-[500px]">
        <h1 className="text-black font-bold mx-auto text-3xl mb-10">
          Password Generator
        </h1>

        {/* password output  */}
        <div className="flex">
          <input
            type="text"
            className="bg-white rounded-3xl text-orange w-[85%] ml-1"
            value={password}
            placeholder="Password"
            ref={passwordRef}
          />
          <button
            className="bg-blue-800  text-orange-400 rounded-xl p-3 m-2 h-[40px] flex justify-center items-center"
            onClick={useCallback(() => {
              passwordRef.current?.select();
              window.navigator.clipboard.writeText(password);
            }, [password])}
          >
            Copy
          </button>
        </div>

        <div className="flex justify-between mx-2">
          {/* length  */}
          <div className="flex">
            <input
              type="range"
              value={length}
              min={6}
              max={40}
              onChange={(e) => {
                setLength(e.target.value);
              }}
              className="cursor-pointer"
              id="len"
            />
            <label htmlFor="len" className="ml-2">
              Length:{length}
            </label>
          </div>

          {/* number  */}
          <div>
            <input
              type="checkbox"
              onChange={() => setIsNumber(() => !isNumber)}
              id="num"
              checked={isNumber}
              className="mr-1"
            />
            <label htmlFor="num">Numbers</label>
          </div>

          {/* character  */}
          <div>
            <input
              type="checkbox"
              onChange={() => setIsCharacter((prev) => !prev)}
              id="ch"
              checked={isCharacter}
              className="mr-1"
            />
            <label htmlFor="ch">character</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Passwordgenerator;
