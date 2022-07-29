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
import getDentalFilterSlice from "../slices/getDentalFilterSlice"
import getOtherFilterSlice from "../slices/getOtherFilterSlice"

export const store = configureStore({
  reducer: {
    counter: counterSlide,
    marketing: marketingFilterSlice,
    timeOfDay: timeOfDayFilterSlice,
    weekType: weekTypeFilterSlice,
    dentalFilter: getDentalFilterSlice,
    otherFilter: getOtherFilterSlice,
    [dentalApi.reducerPath]: dentalApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(dentalApi.middleware)
  },
})

setupListeners(store.dispatch)
