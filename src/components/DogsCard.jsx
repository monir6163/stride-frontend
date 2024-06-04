/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";

const DogsCard = ({ dogs }) => {
  // implement the DogsCard component search functionality

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = dogs?.filter((dog) =>
      dog.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, dogs]);
  return (
    <div className="px-4 py-4">
      <div>
        <h1 className="text-3xl text-center mb-5">New Dogs</h1>
      </div>

      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search Dogs"
          className="border-2 border-gray-300 p-2"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="flex justify-center">
        <h1 className="text-2xl text-center mt-5">
          {searchResults?.length} Dogs Found
        </h1>
      </div>
      <div className="flex justify-center">
        <h1 className="text-2xl text-center mt-5 mb-5">
          {searchTerm === "" ? "All Dogs" : "Search Results"}
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 justify-center">
        {searchResults?.map((dog) => (
          <SingleCard key={dog._id} dog={dog} />
        ))}
      </div>
    </div>
  );
};

export default DogsCard;
