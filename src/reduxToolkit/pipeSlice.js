import { createSlice } from "@reduxjs/toolkit"
import {v4 as uuidv4} from "uuid"

const pipeSlice = createSlice ({
  name: "pipe", 
  initialState: [], 
  reducers: {
    run: (state) => {
      const createPipe = () => {
        const numberRandom = Math.floor(Math.random() * 200 + 50)
        state.push({
          id: uuidv4(), 
          pipeDown: numberRandom,
          pipeUp: 500 - 130 - numberRandom,
          coordinate: -60,
        })
      }
      if(state.length === 0){
        createPipe()
      }
      state.map((pipe) => pipe.coordinate = pipe.coordinate + 15)
      let flag;
      if(state[0] && state[0].coordinate >=550){
        flag = 0
      }
      if(state.length <= 5 && state[state.length - 1].coordinate>=200){
        flag = 1
      }
      if (flag === 1 && state.length <=5) {
        createPipe()
      }else if(flag === 0){
        state.shift();
      } else {
        flag = undefined;
      }
      return state
    },
    refreshPipe: state => {
      return state = []
    }, 
    checkMark: ( state, payload )=> {
      const {pipe} = payload.payload
      if(pipe[0] && pipe[0].coordinate > 340){
        state[0].status = true
      }
    }, 
   }
})

export const { run, refreshPipe, checkMark} = pipeSlice.actions
export default pipeSlice.reducer