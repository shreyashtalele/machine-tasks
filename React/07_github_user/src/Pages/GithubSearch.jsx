import React, { useState } from "react";
import {
  SearchBar,
  ProfileCard,
  RepositoryList,
  ErrorMessage,
} from "../components";
function GithubSearch() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [repositories, setRepositories] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search Clicked ");
    const searchUser = input.trim();
    setError(null);
    if (!searchUser) {
      setError("Input is empty ");
      return;
    }

    console.log(searchUser);
  };
  return (
    <div>
      <SearchBar
        input={input}
        handleInputChange={handleInputChange}
        handleSearch={handleSearch}
      />
      <ProfileCard />
      <RepositoryList />
    </div>
  );
}

export default GithubSearch;
