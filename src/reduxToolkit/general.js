import { createSlice } from "@reduxjs/toolkit"

const general = createSlice({
  name: "general", 
  initialState: {
    status: "waiting",
    intervalId: false
  }, 
  reducers: {
    start: (state) => {
      state.status = "playing"
    }, 
    replay: (state) => {
      state.status = "waiting"
    }, 
    die: (state) => {
      state.status = "die"
    },
    setId: (state, payload) => {
      state.intervalId = payload.payload
    },
  }
})

export const { start, replay, die, setId } = general.actions
export default general.reducer