import React from "react";
import { Star, GitFork, ExternalLink } from "lucide-react";

function RepositoryCard({ repo }) {
  if (!repo) return null;
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <h3 className="text-xl font-bold text-gray-900">{repo.name}</h3>
      <p className="mt-2 text-sm leading-6 text-gray-600">
        {repo.description || "No description available."}
      </p>
      <section className="mt-5 flex flex-wrap items-center gap-6 text-sm text-gray-600">
        <p className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
          {repo.language || "Unknown"}
        </p>
        <p className="flex items-center gap-1">
          <Star className="h-4 w-4 text-yellow-500" />
          {repo.stargazers_count}
        </p>
        <p className="flex items-center gap-1">
          <GitFork className="h-4 w-4 text-gray-500" />
          {repo.forks_count}
        </p>
      </section>
      <a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex w-full items-center justify-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-black hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300"
      >
        Open Repository
        <ExternalLink className="ml-2 h-4 w-4" />
      </a>
    </div>
  );
}

export default RepositoryCard;
