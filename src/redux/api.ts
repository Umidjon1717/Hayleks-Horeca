import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mainApi = createApi({
  reducerPath: "mainApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  tagTypes: ["Product", "Cart"],
  endpoints: (build) => ({
    getProducts: build.query<any, { limit: number; skip: number }>({
      query: ({ limit, skip }) => `products?limit=${limit}&skip=${skip}`,
      providesTags: ["Product"],
    }),

    toggleCart: build.mutation<any, { productId: number; customerId: number }>({
      query: (body) => ({
        url: "cart",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Cart", "Product"],
    }),

    getCart: build.query<any, number>({
      query: (customerId) => `cart/customer/${customerId}`,
      providesTags: ["Cart"],
    }),
  }),
});

export const { 
  useGetProductsQuery, 
  useToggleCartMutation, 
  useGetCartQuery 
} = mainApi;
