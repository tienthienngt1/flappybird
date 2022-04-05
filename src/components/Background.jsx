import Bird from './Bird'
import Pipe from './Pipe'
import Point from './Point'
import Button from './Button'
import background from "../assets/background.jpg"
import { useDispatch, useSelector } from "react-redux"
import { fly } from "../reduxToolkit/birdSlice"
import { checkDie } from "../reduxToolkit/general"

const Background = () => {
  const dispatch = useDispatch();
  const { bird,  general, pipe} = useSelector( state => state)
  if (general.status === "die") {
    clearInterval(general.intervalId)
  }
  if (general.status === "playing") {
    dispatch(checkDie({pipe, bird}))
  }
  const birdFly = () => {
    if (general.status === "playing"){
      dispatch(fly());
    }
  }
  
  return (
    <center>
      <div style = {{
        position: 'relative', 
        width: '500px',
        height: '500px',
        background: 'url(' + background + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom', 
        backgroundSize: 'cover',
        overflow: "hidden",
        }} 
        onClick = { birdFly } 
        >
        { 
        general.status === "waiting" ? 
        <Button keys="waiting" score={general.point} /> 
        : general.status === "die" ? 
          <Button keys="die" score={general.point}/> 
        : ""
        }
        <Bird />
        {
          general.status === "playing" || general.status === "die" ? pipe.map((p) => <Pipe key={p.coordinate} pipe={p} />) : ""
        }
        { general.status !== "die" ? <Point /> : "" } 
      </div>
    </center>
    )
}
export default Background