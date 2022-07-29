//libraries
import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query/react"

//services
import counterSlide from "../features/counter/counterSlice"
import { dentalApi } from "../services/dentalApi"

//slices
import timeOfDayFilterSlice from "../slices/timeOfDayFilterSlice"
import weekTypeFilterSlice from "../slices/weekTypeFilterSlice"
import marketingFilterSlice from "../slices/marketingFilterSlice"

export const store = configureStore({
  reducer: {
    counter: counterSlide,
    marketing: marketingFilterSlice,
    timeOfDay: timeOfDayFilterSlice,
    weekType: weekTypeFilterSlice,
    [dentalApi.reducerPath]: dentalApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(dentalApi.middleware)
  },
})

setupListeners(store.dispatch)
