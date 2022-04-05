import pipe_down from '../assets/pipe_down.jpg'
import pipe_up from '../assets/pipe_up.png'

const Pipe = (prop) => {
  return (
    <>
      <div style={{
      border: "1px solid red", 
      position: 'absolute', 
      bottom: '0px',
      right: prop.pipe.coordinate,
      width: '60px',
      height: prop.pipe.pipeDown,
      transition: "all 0.3s linear"
     }}>
     <img src = {pipe_up} width = '60px' height="400px" style={{
       objectPosition: "bottom"
     }} />
      </div>
      <div style={{
        border: "1px solid red", 
        position: 'absolute', 
        top: '0px',
        right: prop.pipe.coordinate,
        width: '60px',
        height: prop.pipe.pipeUp,
        transform: 'rotate(180deg)',
        transition: "all 0.3s linear"
       }}>
         <img src = {pipe_up} width = '60px'height="400px" style={{ objectPosition: "top" }} />
      </div>  
    </>
  )
}

export default Pipe