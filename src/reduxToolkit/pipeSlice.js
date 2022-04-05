import { createSlice } from "@reduxjs/toolkit"

const pipeSlice = createSlice ({
  name: "pipe", 
  initialState: [
    {
      pipeDown: 170,
      pipeUp: 210,
      coordinate: 0,
    }
  ], 
  reducers: {
    run: (state) => {
      let flag;
      state.map((pipe) => {
        pipe.coordinate = pipe.coordinate + 10
      })
      if(state[0] && state[0].coordinate >=900){
        flag = 0
      }
        if(state.length <= 5 && state[state.length - 1].coordinate>=200){
          flag = 1
      }
      if (flag === 1 && state.length <=5 ) {
        const numberRandom = Math.floor(Math.random() * 200 + 50)
        state.push({
          pipeDown: numberRandom,
          pipeUp: 500 - 150 - numberRandom,
          coordinate: -60,
        })
      }else if(flag === 0){
        state.shift();
      } else {
        flag = undefined;
      }
    }, 
    stop: (state) => {
      
    }
   }
})

export const { run, stop } = pipeSlice.actions
export default pipeSlice.reducer