import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const dentalApi = createApi({
  reducerPath: "dentalAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dentalprenr.herokuapp.com/api",
  }),

  endpoints(builder) {
    return {
      getBooking: builder.query({
        query: (data) => {
          return `/booking/${data}`
        },
      }),
      getLeads: builder.query({
        query: (data) => {
          return `/leads?location=${data}`
        },
      }),
      getResponseTime: builder.query({
        query: (data) => {
          return `/leads/outbound/${data}/search`
        },
      }),
    }
  },
})

export const { useGetBookingQuery, useGetLeadsQuery, useGetResponseTimeQuery } =
  dentalApi
