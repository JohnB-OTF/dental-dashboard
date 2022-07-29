import { createSlice } from "@reduxjs/toolkit"

export const getMarketingFilterSlice = createSlice({
  name: "getMarketingFilterSlice",
  initialState: {
    value: [],
  },
  reducers: {
    updateFilter: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { updateFilter } = getMarketingFilterSlice.actions

export default getMarketingFilterSlice.reducer
