import { createSlice } from "@reduxjs/toolkit"

export const marketingFilterSlice = createSlice({
  name: "marketing",
  initialState: {
    value: "Marketing Type store",
  },
  reducers: {
    dentalprenr: (state) => {
      state.value = "Dentalprenr Marketing"
    },
    other: (state) => {
      state.value = "Other Marketing"
    },
  },
})

export const { dentalprenr, other } = marketingFilterSlice.actions

export default marketingFilterSlice.reducer
