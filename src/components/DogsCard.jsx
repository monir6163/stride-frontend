/* eslint-disable react/prop-types */

import SingleCard from "./SingleCard";

const DogsCard = ({ dogs }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div>
        <h1 className="text-3xl text-center mb-5">Latest Dogs</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 justify-center">
        {dogs?.map((dog) => (
          <SingleCard key={dog._id} dog={dog} />
        ))}
      </div>
    </div>
  );
};

export default DogsCard;
