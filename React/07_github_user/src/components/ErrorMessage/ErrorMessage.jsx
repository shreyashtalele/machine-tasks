import React from "react";

function ErrorMessage({ message = "Something went wrong " }) {
  return (
    <div
      role="alert"
      className="w-full flex items-center gap-2 rounded-lg border border-red-300 bg-red-50 px-4 py-3"
    >
      <span className="text-lg">❌</span>
      <p className="text-sm font-medium text-red-700">{message}</p>
    </div>
  );
}

export default ErrorMessage;
