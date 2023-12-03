import React from "react";
import { useSuperHerosData } from "../hooks/useSuperHerosData";
import { Link } from "react-router-dom";

function RQSuperHeroesPage() {
  const onSuccess = (data) => {
    console.log("Perform side effect after data fetching", data);
  };

  const onError = (error) => {
    console.log("Perform side efect after encoutnering error", error);
  };
  const { data, isLoading, isError, error, isFetching, refetch } = useSuperHerosData(
    onSuccess,
    onError
  );

  console.log({ isLoading, isFetching });
  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <h2>RQ Supper Herros page</h2>
      <button onClick={refetch}>Fetch heroes</button>
      {data?.data.map((hero) => {
        return (
          <div key={hero.id}>
            <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
          </div>
        );
      })}
      {/* {data.map((heroName) => {
        return <div key={heroName}>{heroName}</div>;
      })} */}
    </>
  );
}

export default RQSuperHeroesPage;
