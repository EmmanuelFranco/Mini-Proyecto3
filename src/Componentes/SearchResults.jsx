// SearchResults.js
import React from "react";
import Card from "./Card";

function SearchResults({ searchResults }) {
  return (
    <div>
      <h2>Search Results</h2>
      <p>{searchResults.length} {searchResults.length !== 1 ? "stays" : "stay"} found</p>
      {searchResults.map((stay, index) => (
        <Card key={index} stay={stay} />
      ))}
    </div>
  );
}

export default SearchResults;
