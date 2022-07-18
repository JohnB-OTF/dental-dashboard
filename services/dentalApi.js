import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const dentalApi = createApi({
  reducerPath: "dentalAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  }),

  endpoints(builder) {
    return {
      getData: builder.query({
        query: (data) => {
          return `api/${data}`
        },
      }),
    }
  },
})

export const { useGetDataQuery } = dentalApi
