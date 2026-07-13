import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCounter((prev) => prev - 1);
  };

  const handleStepIncrement = () => {
    setCounter((prev) => prev + 5);
  };

  const handleStepDecrement = () => {
    setCounter((prev) => prev - 5);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
          Counter App
        </h1>

        <div className="mb-6 text-center">
          <p className="text-lg text-gray-600">Count Value</p>
          <p className="mt-2 text-5xl font-bold text-blue-600">{counter}</p>
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={handleIncrement}
            className="rounded-lg bg-green-500 px-6 py-2 text-xl font-semibold text-white transition hover:bg-green-600 active:scale-95"
          >
            +
          </button>

          <button
            onClick={handleDecrement}
            className="rounded-lg bg-red-500 px-6 py-2 text-xl font-semibold text-white transition hover:bg-red-600 active:scale-95"
          >
            -
          </button>
          <button
            onClick={handleStepIncrement}
            className="rounded-lg bg-green-500 px-6 py-2 text-xl font-semibold text-white transition hover:bg-red-600 active:scale-95"
          >
            + 5{" "}
          </button>

          <button
            onClick={handleStepDecrement}
            className="rounded-lg bg-red-500 px-6 py-2 text-xl font-semibold text-white transition hover:bg-red-600 active:scale-95"
          >
            - 5{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
