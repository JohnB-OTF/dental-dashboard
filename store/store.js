import { configureStore } from "@reduxjs/toolkit"
import counterSlide from "../features/counter/counterSlice"

export default configureStore({
  reducer: {
    counter: counterSlide,
  },
})
