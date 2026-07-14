import React from "react";

function EmployeeSearch({ searchTerm, setSearchTerm }) {
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="search here .."
        onChange={handleChange}
        value={searchTerm}
        className="
          w-full
          md:w-96
          px-4
          py-3
          border
          border-gray-300
          rounded-lg
          shadow-sm
          outline-none
          transition
          duration-200
          focus:ring-2
          focus:ring-blue-500
          focus:border-blue-500
          placeholder:text-gray-400
        "
      />
    </div>
  );
}

export default EmployeeSearch;
