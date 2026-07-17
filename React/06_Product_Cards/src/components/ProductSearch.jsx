import React from "react";

function ProductSearch({ search, setSearch }) {
  return (
    <section className="mb-8">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="search here .."
        className="w-full rounded-lg border border-gray-300 bg-white px-3 py-4 text-gray-700 shadow-sm outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      />
    </section>
  );
}
export default ProductSearch;
