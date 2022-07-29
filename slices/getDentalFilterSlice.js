import { createSlice } from "@reduxjs/toolkit"

export const getDentalFilterSlice = createSlice({
  name: "dentalFilter",
  initialState: {
    value: ["test dental"],
  },
  reducers: {
    dentalFilter: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { dentalFilter } = getDentalFilterSlice.actions

export default getDentalFilterSlice.reducer
