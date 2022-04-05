import playButton from "../assets/playButton.png"
import replayButton from "../assets/replayButton.png"
import { useDispatch} from "react-redux"
import { down, refreshBird } from "../reduxToolkit/birdSlice"
import { run, refreshPipe } from "../reduxToolkit/pipeSlice"
import { start, replay, setId } from "../reduxToolkit/general"


const Button = props => {
  const dispatch = useDispatch()
  const startGame = () => {
    dispatch(start());
    dispatch(down());
    const idInterval = setInterval( () => {
      dispatch(down())
      dispatch(run())
    }, 300)
    dispatch(setId(idInterval))
  }
  const changeWaiting = () => {
    dispatch(replay());
    dispatch(refreshBird());
    dispatch(refreshPipe())
  }
  return (
    <>
    {
      props.keys === "waiting" ? 
      <img src = {playButton} style={{
        position: "absolute", 
        top: "40%",
        left: "40%", 
        zIndex: "10"
        }}
        width = "100px"
        height = "100px"
        alt = "playButton"
        onClick = {startGame} /> 
        : 
        <div style = {{
          position: "absolute", 
          top: "100px",
          left: "100px", 
          width: '300px',
          height: '300px',
          borderRadius: "10px",
          background: "#d7d7d7",
          zIndex: "100"
        }}>
        <h2> Your Score </h2>
        <h1> {props.score} </h1>
          <img src = {replayButton}
          style ={{ objectPosition: "bottom" }} 
          width = "100px"
          height = "100px"
          alt = "replayButton"
          onClick = {changeWaiting} />
        </div>
    }
    </>
  )
}

export default Button