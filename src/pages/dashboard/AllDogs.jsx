import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleCard from "../../components/dashboard/SingleCard";

const AllDogs = () => {
  const data = useLoaderData();
  const [dogs, setDogs] = useState(data);

  const handleFilter = (id) => {
    const newDogs = dogs?.data?.filter((dog) => dog._id !== id);
    setDogs({ ...dogs, data: newDogs });
  };
  return (
    <div className="">
      <div>
        <h1 className="text-3xl text-center mb-5">All Dogs</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 justify-center">
        {dogs?.data?.map((dog, i) => (
          <SingleCard key={i} dog={dog} handleFilter={handleFilter} />
        ))}
      </div>
    </div>
  );
};

export default AllDogs;
