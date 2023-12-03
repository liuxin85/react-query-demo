import React from "react";
import { useQueries } from "react-query";
import axios from "axios";


const fetchSuperHero = (heroId) =>{
  return axios.get(`http://localhost:4001/superheroes/${heroId}`)
}

const DynamaicParallelPage = ({heroIds}) => {

 const queryResults =  useQueries(
    heroIds.map(id =>{
      return {
        queryKey: ['super-hero', id],
        queryFn: () => fetchSuperHero(id)
      }
    })
  )

  console.log({queryResults})
  return (
    <div>DynamaicParallel.page</div>
  )
}

export default DynamaicParallelPage