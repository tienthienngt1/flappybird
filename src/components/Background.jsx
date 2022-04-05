import { useEffect} from "react"
import Bird from './Bird'
import Pipe from './Pipe'
import Point from './Point'
import background from "../assets/background.jpg"
import { useDispatch, useSelector } from "react-redux"
import { fly, down, refresh} from "../reduxToolkit/birdSlice"
import { run, stop } from "../reduxToolkit/pipeSlice"
import { start, replay, setId} from "../reduxToolkit/general"

const Background = () => {
  const dispatch = useDispatch();
  const { bird,  general, pipe} = useSelector( state => state)
  useEffect(() => {
  }, [])
  if (general.status === "die") {
    clearInterval(general.intervalId)
  }
  const click = () => {
    dispatch(start());
    dispatch(down());
    const setIn = setInterval( () => {
      dispatch(down())
      dispatch(run())
    }, 200)
    dispatch(setId(setIn))
  }
  const changeWaiting = () => {
    dispatch(replay());
    dispatch(refresh());
    console.log(general.status)
  }
    console.log(general.status)
  const birdFly = () => {
    if (general.status === "playing"){
      dispatch(fly());
    }
  }
  
  return (
    <center>
      <div style = {{
        position: 'relative', 
        width: '90vw',
        height: '500px',
        background: 'url(' + background + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom', 
        backgroundSize: 'cover',
        position: 'relative',
        overflow: "hidden"
        }} 
        onClick = { birdFly } 
        >
        { general.status === "waiting" ? 
        <button style={{
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid red",
          background: "none", 
          position: "absolute", 
          top: "50%",
          left: "50%"
        }}
          onClick = {click} >
          PLAY
        </button> : general.status === "die" ? 
        <button style={{
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid red",
          background: "none", 
          position: "absolute", 
          top: "50%",
          left: "50%"
        }}
          onClick = {changeWaiting} >
          REPLAY
        </button> : "" } 
        <Bird />
        {
          pipe.map((p) => <Pipe key={p.coordinate} pipe={p} />)
        }
      </div>
      <Point />
    </center>
    )
}
export default Background