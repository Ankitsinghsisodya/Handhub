import React from "react";
import useCurrencyInfo from "../Hooks/useCurrencyInfo";
import { useState, useEffect } from "react";
import InputBox from "./InputBox";

function Currencyconverter() {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  function convert() {
    setConvertedAmount(amount * currencyInfo[to]);
  }

  const swap = () => {
    console.log("swap");
    // Swap currency types
    const tempFrom = from;
    const tempTo = to;
    setFrom(tempTo);
    setTo(tempFrom);

    // Swap amounts
    const tempAmount = amount;
    setAmount(convertedAmount);
    setConvertedAmount(tempAmount);
  };

  return (
    <div
      className="w-screen h-screen  flex justify-between items-center"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("convert");
          console.log(amount, convertedAmount);
          convert();
        }}
        className="z-[1000] w-[600px] h-[200px] mx-auto my-auto  bg-gray-500 rounded-3xl p-2 relative"
      >
        <InputBox
          label="From"
          amount={amount}
          onAmountChange={setAmount}
          onCurrencyChange={setFrom}
          currencyOptions={options}
          selectCurrency={from}
        />
        <button
          className="absolute top-12 right-80 font-bold bg-blue-800 rounded-xl
        p-2"
        //   type="button"
          onClick={swap}
        >
          Swap
        </button>
        <InputBox
          label="To"
          amount={convertedAmount}
          onAmountChange={setConvertedAmount}
          onCurrencyChange={setTo}
          currencyOptions={options}
          selectCurrency={to}
        />

        <button
          type="submit"
          className="bg-blue-800 rounded-xl w-full h-[50px]  text-3xl"
        >
          Convert {from} to {to}
        </button>
      </form>
    </div>
  );
}

export default Currencyconverter;
