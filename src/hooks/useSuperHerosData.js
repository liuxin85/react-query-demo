import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4001/superheroes");
};

const addSuperHero = (hero) => {
  return axios.post("http://localhost:4001/superheroes", hero);
};

export const useSuperHerosData = (onSuccess, onError) => {
  return useQuery("super-heroes", fetchSuperHeroes, {
    onSuccess,
    onError,
    // select: (data) => {
    //   const superHeroNames = data.data.map((hero) => hero.name);
    //   return superHeroNames;
    // },
  });
};

export const useAddSuperHeroData = () => {
  const queryClient = useQueryClient();
  return useMutation(addSuperHero, {
    // onSuccess: (data)=> {
    //   // queryClient.invalidateQueries('super-heroes')
    //   queryClient.setQueryData('super-heroes', (oldQueryData)=>{
    //     return {
    //       ...oldQueryData,
    //       data: [...oldQueryData.data, data.data]
    //     }

    //   })
    // }
    onMutate: async (newHero) => {
      await queryClient.cancelQueries("super-heroes");
      const previouseHeroData = queryClient.getQueryData("super-heroes");
      queryClient.setQueryData("super-heroes", (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [...oldQueryData.data, { id: oldQueryData?.data?.length + 1, ...newHero }],
        };
      });
      return {
        previouseHeroData,
      };
    },
    onError: (_error, _hero, context) => {
      queryClient.setQueryData("super-heroes", context.previouseHeroData);
    },
    onSettled: () => {
      queryClient.invalidateQueries("super-heroes");
    },
  });
};
