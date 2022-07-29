import { createSlice } from "@reduxjs/toolkit"

export const getOtherFilterSlice = createSlice({
  name: "otherFilter",
  initialState: {
    value: ["test other"],
  },
  reducers: {
    otherFilter: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { otherFilter } = getOtherFilterSlice.actions

export default getOtherFilterSlice.reducer
