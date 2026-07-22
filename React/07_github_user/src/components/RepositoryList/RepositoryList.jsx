import React from "react";
import RepositoryCard from "../RepositoryCard/RepositoryCard";

function RepositoryList({ repositories }) {
  if (repositories === null) {
    return null;
  }
  if (!repositories || repositories.length === 0) {
    return (
      <div className="mt-10 rounded-xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center">
        <h2 className="text-lg font-semibold text-gray-700">
          No repositories found.
        </h2>
      </div>
    );
  }

  return (
    <section className="mt-10">
      <h2 className="mb-6 text-2xl font-bold text-gray-900">Repositories</h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {repositories.map((repo) => (
          <RepositoryCard key={repo.id} repo={repo} />
        ))}
      </div>
    </section>
  );
}

export default RepositoryList;
