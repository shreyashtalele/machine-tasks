import React, { useState } from "react";
import {
  SearchBar,
  ProfileCard,
  RepositoryList,
  ErrorMessage,
  Loader,
} from "../components";
import { fetchRepositories, fetchUser } from "../Services/githubApi";

function GithubSearch() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [repositories, setRepositories] = useState(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    const searchUser = input.trim();

    setError(null);

    if (!searchUser) {
      setError("Please enter a GitHub username.");
      return;
    }

    setLoading(true);
    setUser(null);
    setRepositories(null);

    try {
      const userData = await fetchUser(searchUser);
      const repoData = await fetchRepositories(searchUser);

      setUser(userData);
      setRepositories(repoData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <SearchBar
        input={input}
        handleInputChange={handleInputChange}
        handleSearch={handleSearch}
        loading={loading}
      />

      {loading && (
        <div className="mt-8">
          <Loader message="Fetching GitHub profile..." />
        </div>
      )}

      {error && (
        <div className="mt-8">
          <ErrorMessage message={error} />
        </div>
      )}

      {!loading && !error && user && (
        <>
          <ProfileCard user={user} />
          <RepositoryList repositories={repositories} />
        </>
      )}
    </div>
  );
}

export default GithubSearch;
