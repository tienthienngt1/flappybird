const initState = {
  status: "waiting", 
}

const rootReducer = (state = initState, action) => {
  switch (action){
    case "START":
      return {
       ...state, status: "starting"
      }
    default:
      return state;
  } 
}

export default rootReducer;