import products from "./data/Product";
import ProductCard from "./components/ProductCard";
import { useState } from "react";
import ProductSearch from "./components/ProductSearch";
function App() {
  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("");
  const searchTerm = search.toLowerCase().trim();
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm),
  );

  const productsCategory = filteredProducts.return(
    <>
      <main className="min-h-screen bg-gray-100 p-8">
        <h1 className="mb-8 text-center text-3xl font-bold">Product Catelog</h1>
        <ProductSearch search={search} setSearch={setSearch} />
        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </main>
    </>,
  );
}

export default App;
