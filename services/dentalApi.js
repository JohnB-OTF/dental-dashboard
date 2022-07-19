import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const dentalApi = createApi({
  reducerPath: "dentalAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dentalprenr.herokuapp.com/api/booking",
  }),

  endpoints(builder) {
    return {
      getData: builder.query({
        query: (data) => {
          return `/${data}`
        },
      }),
    }
  },
})

export const { useGetDataQuery } = dentalApi
