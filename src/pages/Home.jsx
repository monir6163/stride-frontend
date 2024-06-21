import { useLoaderData } from "react-router-dom";
import According from "../components/According";
import DogsCard from "../components/DogsCard";
import DogsCat from "../components/DogsCat";
import Hero from "../components/Hero";
import Reviews from "../components/Reviews";

const Home = () => {
  const dogs = useLoaderData();
  return (
    <>
      <Hero />
      <DogsCat />
      <DogsCard dogs={dogs?.data?.slice(0, 3)} />
      <Reviews />
      <According />
    </>
  );
};

export default Home;
