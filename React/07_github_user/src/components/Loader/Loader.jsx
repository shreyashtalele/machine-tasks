import React from "react";

function Loader({ message = "Loading...." }) {
  return (
    <div
      role="status"
      className="flex flex-col items-center justify-center gap-3 py-10"
    >
      <div
        aria-hidden="true"
        className="rounded-full w-10 h-10 border-4 border-blue-600
            border-t-transparent animate-spin "
      ></div>
      <p className="text-sm font-medium text-gray-600">{message}</p>
    </div>
  );
}

export default Loader;
