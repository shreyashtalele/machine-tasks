import React from "react";

function SearchBar({ input, handleInputChange, handleSearch, loading }) {
  return (
    <form
      className="flex flex-col gap-4 sm:flex-row sm:items-center"
      onSubmit={handleSearch}
    >
      <input
        id="github-search"
        type="text"
        value={input}
        placeholder="Search GitHub username..."
        onChange={handleInputChange}
        disabled={loading}
        className="
          flex-1
          rounded-lg
          border
          border-gray-300
          bg-white
          px-4
          py-3
          text-gray-900
          placeholder:text-gray-400
          outline-none
          transition
          duration-200
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-200
          disabled:cursor-not-allowed
          disabled:opacity-60
        "
      />
      <button
        type="submit"
        disabled={loading}
        className="
          rounded-lg
          bg-blue-600
          px-6
          py-3
          font-medium
          text-white
          transition
          duration-200
          hover:bg-blue-700
          active:scale-95
          disabled:cursor-not-allowed
          disabled:opacity-60
        "
      >
        {loading ? "searching" : "search"}
      </button>
    </form>
  );
}

export default SearchBar;
