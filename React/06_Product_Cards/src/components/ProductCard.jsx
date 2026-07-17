function ProductCard({ product }) {
  return (
    <article className="overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <img
        src={product.image}
        alt={product.name}
        className="h-56 w-full object-cover"
      />

      <div className="p-5">
        <header className="mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            {product.name}
          </h2>
        </header>

        <section className="space-y-2 text-sm text-gray-600">
          <p>
            <span className="font-medium">Category:</span> {product.category}
          </p>

          <p>⭐ {product.rating}</p>

          <p className="text-lg font-bold text-green-600">
            ₹{product.price.toLocaleString("en-IN")}
          </p>
        </section>

        <footer className="mt-5 flex justify-end">
          <button
            type="button"
            className="rounded-full bg-gray-100 p-3 transition hover:bg-red-100 hover:scale-110"
          >
            🤍
          </button>
        </footer>
      </div>
    </article>
  );
}

export default ProductCard;
