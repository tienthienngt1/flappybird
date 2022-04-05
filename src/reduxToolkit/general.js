import {
  createSlice
} from "@reduxjs/toolkit"

const general = createSlice({
  name: "general",
  initialState: {
    status: "waiting",
    intervalId: false, 
    point: 0,
    idPipe: ""
  },
  reducers: {
    start: (state) => {
      state.status = "playing"
    },
    replay: (state) => {
      state.status = "waiting"
      state.point = 0
      state.idPipe = ""
    },
    die: (state) => {
      state.status = "die"
    },
    checkDie: (state, payload) => {
      const { bird, pipe} = payload.payload
      if(pipe[0]){
        const yBird = bird.coordinate
        const xPipe = pipe[0].coordinate
        const heightPipe = pipe[0].pipeUp
        if (xPipe > 340 && xPipe < 450) {
          if ( yBird > heightPipe && yBird < heightPipe + 130 - 30 ) {
            if(state.idPipe !== pipe[0].id){
              state.point++
              state.idPipe = pipe[0].id
            }
          }else {
            state.status = "die"
          }
        }
      }
    },
    setId: (state, payload) => {
      state.intervalId = payload.payload
    },
  }
})

export const {
  start, replay, die, setId, checkDie
} = general.actions
export default general.reducer