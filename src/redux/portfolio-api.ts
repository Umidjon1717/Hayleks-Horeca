import { IGetResponseRecipes, IRecipe, IRecipeQuery } from "../types/types";
import { mainApi } from "./api";

const portfolioApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    getRecipes: build.query<IGetResponseRecipes, IRecipeQuery>({
      query: (params) => ({
        url: "recipes",
        method: "GET",
        params,
      }),
      providesTags: ["Recipe"],
    }),

    getSingleRecipe: build.query<IRecipe, number>({
      query: (id) => ({
        url: `recipes/${id}`,
        method: "GET",
      }),
      providesTags: ["Recipe"],
    })
  }),
});

export const {
  useGetRecipesQuery,
  useGetSingleRecipeQuery
} = portfolioApi;

export default portfolioApi;
