import React, { useState } from "react";
import { createTodo } from "../services/todoServices";
function TodoForm() {
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("select");

  async function handleSubmit(e) {
    e.preventDefault();

    if (task.trim() === "" || status === "select") {
      alert("All fields are required");
      return;
    }

    const todo = {
      name: task,
      status,
    };

    const result = await createTodo(todo);
    console.log(result);
  }

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Add Todo</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Task Name
          </label>

          <input
            type="text"
            placeholder="Enter task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">Status</label>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="select">Select Status</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-200 font-medium"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
