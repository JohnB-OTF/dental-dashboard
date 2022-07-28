//libraries
import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query/react"

//services
import counterSlide from "../features/counter/counterSlice"
import { dentalApi } from "../services/dentalApi"

export const store = configureStore({
  reducer: {
    counter: counterSlide,
    [dentalApi.reducerPath]: dentalApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(dentalApi.middleware)
  },
})

setupListeners(store.dispatch)
