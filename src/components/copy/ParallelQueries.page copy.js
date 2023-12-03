import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4001/superheroes");
};

const fetchFriends = () => {
  return axios.get("http://localhost:4001/friends");
};

const ParallelQueriesPage = () => {
  const { data: superHeros } = useQuery("super-heros", fetchSuperHeroes);
  const { data: friends } = useQuery("friends", fetchFriends);

  return <div>ParallelQueriesPage</div>;
};

export default ParallelQueriesPage;
