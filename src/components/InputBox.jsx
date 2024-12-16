import React, { useState, useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  swap
}) {
  const amountInputId = useId();

  return (
    <div className="bg-white w-full h-[50px] my-2 rounded-3xl">
      <div className="flex justify-between relative">
        {/* left side  */}
        <div className="flex flex-col pl-4">
          <label form={amountInputId}>{label}</label>
          <input
            type="number"
            placeholder="amount"
            value={amount}
            onChange={(e) => {
              onAmountChange && onAmountChange(Number(e.target.value));
            }}
            id={amountInputId}
          ></input>
        </div>
        
        {/* right side  */}
        <div className="flex flex-col pr-3">
          <p className="text-black/40  w-full">Currency Type</p>
          <select
            type="options"
            placeholder="Currency"
            value={selectCurrency}
            onChange={(e) => {
              onCurrencyChange && onCurrencyChange(e.target.value);
            }}
          >
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
