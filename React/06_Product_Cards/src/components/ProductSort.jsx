import React from "react";

function ProductSort({ sortBy, setSortBy, sortOptions }) {
  return (
    <section>
      <label
        htmlFor="sort"
        className="mb-2 block text-sm font-medium text-gray-700"
      >
        Sort By
      </label>

      <select
        id="sort"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        {sortOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </section>
  );
}

export default ProductSort;
