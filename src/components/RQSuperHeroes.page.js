import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4001/superheroes");
};

function RQSuperHeroesPage() {
  const { data, isLoading, isError, error, isFetching } = useQuery(
    "super-heros",
    fetchSuperHeroes,
    {
      staleTime: 30000,
    }
  );

  console.log({ isLoading, isFetching });
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <h2>RQ Supper Herros page</h2>
      {data?.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </>
  );
}

export default RQSuperHeroesPage;
