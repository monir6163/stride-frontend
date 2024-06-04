import { useLoaderData } from "react-router-dom";
import DogsCard from "../components/DogsCard";

const Dogs = () => {
  const dogs = useLoaderData();
  return <DogsCard dogs={dogs?.data} />;
};

export default Dogs;
