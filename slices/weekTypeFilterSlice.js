import { createSlice } from "@reduxjs/toolkit"

export const weekTypeFilterSlice = createSlice({
  name: "weekType",
  initialState: {
    value: "Week Type",
  },
  reducers: {
    weekDays: (state) => {
      state.value = "Week Days"
    },
  },
})

export const { weekDays } = weekTypeFilterSlice.actions

export default weekTypeFilterSlice.reducer
