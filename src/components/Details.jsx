import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Details = ({ data }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center md:flex-row gap-5">
        <div className="flex-1">
          <img src={data?.image?.url} alt="dog" className="rounded-lg" />
        </div>
        <div className="flex-1 space-y-3">
          <h2 className="text-3xl font-bold">{data?.name}</h2>
          <p className="text-lg text-wrap text-gray-500">
            <b className="text-blue-600">Short Description:</b>{" "}
            {data?.description.slice(0, 150)}...
          </p>
          <p className="text-lg text-gray-500">
            <b className="text-blue-600">Price:</b> ${data?.price}
          </p>
          <Link to={`/chekout/${data?._id}`}>
            <button className="btn mt-3 btn-primary">Buy Now</button>
          </Link>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold">More Details</h2>
        <p className="text-lg text-gray-500">{data?.description}</p>
      </div>
    </div>
  );
};

export default Details;
