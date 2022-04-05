import { createSlice} from "@reduxjs/toolkit" ;

const birdSlice = createSlice({
  name: "bird",
  initialState: {
    status: 0,
    coordinate: 220, 
    rotation: 0,
  }, 
  reducers: {
    fly: (state) => {
      if(state.coordinate <= 0) {
        state.coordinate = 0;
      }else {
        state.coordinate = state.coordinate - 40;
      }
      state.rotation = -45
     } ,
    down: (state) => {
      if(state.coordinate >= 500) {
        state.coordinate = 500;
      }else {
        state.coordinate = state.coordinate + 15;
      }
      state.rotation = 0
    },
    refresh: (state) => {
      state.coordinate = 220
    }
  }
})
export const { fly, down, refresh } = birdSlice.actions
export default birdSlice.reducer