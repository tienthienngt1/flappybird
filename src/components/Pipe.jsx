import pipe_up from '../assets/pipe_up.png'

const Pipe = (prop) => {
  return (
    <>
      <div style={{
      position: 'absolute', 
      bottom: '0px',
      right: prop.pipe.coordinate,
      width: '60px',
      height: prop.pipe.pipeDown,
      transition: "all 0.2s linear", 
     }}>
     <img src = {pipe_up} width = '60px' height="400px" style={{
       objectPosition: "bottom"
     }} alt="pipe" />
      </div>
      <div style={{
        position: 'absolute', 
        top: '0px',
        right: prop.pipe.coordinate,
        width: '60px',
        height: prop.pipe.pipeUp,
        transform: 'rotate(180deg)',
        transition: "all 0.2s linear", 
       }}>
         <img src = {pipe_up} width = '60px'height="400px" style={{ objectPosition: "top" }} alt="pipe" />
      </div>  
    </>
  )
}

export default Pipe