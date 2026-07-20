import React from "react";

function ProductCategory({ categoryOptions, setCategory, category }) {
  return (
    <section className="mb-6">
      <label
        htmlFor="category"
        className="mb-2 block text-sm font-medium text-gray-700"
      >
        Category
      </label>

      <select
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 shadow-sm transition-all duration-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      >
        {categoryOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </section>
  );
}

export default ProductCategory;
