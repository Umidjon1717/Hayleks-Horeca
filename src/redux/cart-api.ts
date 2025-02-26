import { mainApi } from "./api";

const extendedApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    toggleCart: build.mutation<any, { productId: number; customerId: number }>({
      query: (body) => ({
        url: "cart",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Cart", "Product"],
    }),
    getCart: build.query<any, number>({
      query: (id) => ({
        url: `cart/customer/${id}`,
        method: "GET",
      }),
      providesTags: ["Cart"],
    }),

    setCart: build.mutation<any, any>({
      query: (args) => ({
        url: `cart/${args.customerId}`,
        method: "POST",
        body: args.cart,
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
});

export const {
  useToggleCartMutation,
  useGetCartQuery,
  useSetCartMutation,
} = extendedApi;
