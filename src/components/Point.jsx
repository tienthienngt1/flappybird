import {useSelector} from "react-redux"

const Point = () => {
  const {general} = useSelector(state=>state)
  return (
    <div style={{
      position: "absolute", 
      top: "20px",
      width: "100%"
    }} >
    <center>
      <h1> SCORE </h1>
      <h2>{general.point}</h2>
    </center>
    </div>
  )
}

export default Point