import React from "react";

function EmployeeSort({ sortBy, setSortBy }) {
  return (
    <div className="mb-6">
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="w-full md:w-64 border border-gray-300 rounded-lg px-4 py-3 shadow-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="">Default</option>
        <option value="name-asc">Name (A-Z)</option>
        <option value="name-dsc">Name (Z-A)</option>
        <option value="salary-asc">Salary (Low-High)</option>
        <option value="salary-dsc">Salary (High-Low)</option>
        <option value="date-asc">Joining Date (Oldest)</option>
        <option value="date-dsc">Joining Date (Newest)</option>
      </select>
    </div>
  );
}

export default EmployeeSort;
