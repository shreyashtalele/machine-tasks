import products from "./data/Product";
import ProductCard from "./components/ProductCard";
import { useEffect, useMemo, useState } from "react";
import ProductSearch from "./components/ProductSearch";
import ProductCategory from "./components/ProductCategory";
import sortOptions from "./data/constant";
import ProductSort from "./components/ProductSort";
import sortProducts from "./utils/helper";
function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Default");
  const searchTerm = search.toLowerCase().trim();

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => category === "All" || product.category === category)
      .filter((product) => product.name.toLowerCase().includes(searchTerm));
  }, [products, category, searchTerm]);
  const categoryOptions = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const sortedProducts = useMemo(() => {
    return sortProducts(sortBy, filteredProducts);
  }, [sortBy, filteredProducts]);
  return (
    <>
      <main className="min-h-screen bg-gray-100 p-8">
        <h1 className="mb-8 text-center text-3xl font-bold">Product Catelog</h1>
        <section className="mb-8 flex flex-col gap-4 md:flex-row">
          <div className="flex-1">
            <ProductSearch search={search} setSearch={setSearch} />
          </div>

          <div className="w-full md:w-64">
            <ProductCategory
              category={category}
              setCategory={setCategory}
              categoryOptions={categoryOptions}
            />
          </div>

          <div>
            <ProductSort
              sortBy={sortBy}
              setSortBy={setSortBy}
              sortOptions={sortOptions}
            />
          </div>
        </section>
        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
