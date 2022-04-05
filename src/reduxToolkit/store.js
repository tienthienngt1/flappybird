import { configureStore } from "@reduxjs/toolkit"
import bird from "./birdSlice"
import general from "./general"
import pipe from "./pipeSlice"

const rootReducer = {
  bird, general, pipe
}

const store = configureStore ({
  reducer: rootReducer, 
})

export default store