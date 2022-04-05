import birdJpg from '../assets/bird.png'
import { useSelector, useDispatch } from "react-redux"
import { die } from "../reduxToolkit/general"

const Bird = () => {
  const dispatch = useDispatch()
  const { bird, general } = useSelector(state=>state)
  if(bird.coordinate >= 500 && general.status === "playing") {
    dispatch(die())
  }
  return (
    <div style= {{
     width: '50px',
     height:'50px', 
     position: 'absolute', 
     top: bird.coordinate + 'px',
     left: '50px', 
     zIndex: "10",
     transform: "rotate(" + bird.rotation + "deg)", 
   }}>
      <img src={ birdJpg } alt="bird" width='40px' height = '40px' />
    </div>
  )
}

export default Bird