import { createSlice } from "@reduxjs/toolkit"

export const timeOfDayFilterSlice = createSlice({
  name: "timeOfDay",
  initialState: {
    value: "Time of Day",
  },
  reducers: {
    businessHours: (state) => {
      state.value = "Business Hours"
    },
    afterHours: (state) => {
      state.value = "After Hours"
    },
  },
})

export const { businessHours, afterHours } = timeOfDayFilterSlice.actions

export default timeOfDayFilterSlice.reducer
