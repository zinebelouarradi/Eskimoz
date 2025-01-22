import React, { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/CardList";
import FilterDropdown from "./components/FilterDropdown";
import SearchBar from "./components/SearchBar";
import mockedData from "./mockData.json";

function App() {
  const [job, setJob] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCards, setFilteredCards] = useState(mockedData);

  const jobOptions = ["All", ...new Set(mockedData.map((card) => card.job))];

  useEffect(() => {
    let filtered = mockedData;

    if (job && job !== "All") {
      filtered = filtered.filter((card) => card.job === job);
    }

    if (searchQuery) {
      filtered = filtered.filter((card) =>
        card.name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    }

    setFilteredCards(filtered);
  }, [job, searchQuery]);

  const getResultsMessage = () => {
    if (!job && !searchQuery) {
      return "Showing all available results.";
    }

    const resultsCount = filteredCards.length;

    return (
      <p>
        Showing <b>{resultsCount}</b> result{resultsCount !== 1 ? "s" : ""}{" "}
        {job && job !== "All" && (
          <>
            {" "}
            for job: <span className="text-[#309128]">{job}</span>{" "}
          </>
        )}
        {searchQuery && (
          <>
            matching names starting with:{" "}
            <span className="text-[#309128]">{searchQuery}</span>
          </>
        )}
      </p>
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center sticky top-0 z-10 bg-white">
        <div className="w-full sm:w-1/2 lg:w-1/4">
          <SearchBar onSearch={setSearchQuery} />
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/4 sm:text-right">
          <FilterDropdown
            options={jobOptions}
            selectedValue={job}
            onChange={setJob}
          />
        </div>
      </div>

      <div className="mt-4 text-centertext-sm text-gray-500 text-sm">
        {getResultsMessage()}
      </div>

      <CardList cards={filteredCards} />
    </div>
  );
}

export default App;
