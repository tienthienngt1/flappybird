import { createSlice} from "@reduxjs/toolkit" ;

const birdSlice = createSlice({
  name: "bird",
  initialState: {
    coordinate: 220, 
    rotation: 0,
  }, 
  reducers: {
    fly: (state) => {
      if(state.coordinate <= 0) {
        state.coordinate = 0;
      }else {
        state.coordinate = state.coordinate - 50;
      }
      state.rotation = -55
     } ,
    down: (state) => {
      if(state.coordinate >= 500) {
        state.coordinate = 500;
      }else {
        state.coordinate = state.coordinate + 20;
      }
      state.rotation = 0
    },
    refreshBird: (state) => {
      state.coordinate = 220
      state.rotation = 0
    }
  }
})
export const { fly, down, refreshBird } = birdSlice.actions
export default birdSlice.reducer