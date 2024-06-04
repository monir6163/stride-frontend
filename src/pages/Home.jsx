import { useLoaderData } from "react-router-dom";
import According from "../components/According";
import DogsCard from "../components/DogsCard";
import Hero from "../components/Hero";
import DogsInfo from "../components/dogsInfo";

const Home = () => {
  const dogs = useLoaderData();
  return (
    <>
      <Hero />
      <DogsInfo />
      <DogsCard dogs={dogs?.data?.slice(0, 3)} />
      <According />
    </>
  );
};

export default Home;
