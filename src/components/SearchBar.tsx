import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(query);
    }, 300); // debouncing with a delay of 300ms

    return () => {
      clearTimeout(handler);
    };
  }, [query, onSearch]);

  return (
    <div data-testid="search-bar">
      <input
        type="text"
        className="text-sm text-gray-500 block w-full px-4 py-2 border-0 border-b-2 border-gray-200 focus:outline-none focus:ring-0"
        placeholder="Search by name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
