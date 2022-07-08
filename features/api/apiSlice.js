import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/dataBoard",
  }),

  endpoints: (builder) => ({
    getData: builder.query({
      query: () => {
        baseUrl
      },
    }),
  }),
})

export const { useGetDataQuery } = apiSlice.endpoints
