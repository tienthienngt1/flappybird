import pipe_down from '../assets/pipe_down.jpg'
import pipe_up from '../assets/pipe_up.png'

const PipeDown = () => {
  return (
    <>
      <div style={{
      position: 'absolute', 
      bottom: '0px',
      left: '50px',
      width: '60px',
      height: '200px',
      backgroundRepeat: 'no-repeat', 
      background: 'url(' + pipe_up +')',
      backgroundSize: 'cover',
     }}>
      </div>
      <div style={{
        position: 'absolute', 
        top: '0px',
        left: '50px',
        width: '60px',
        height: '200px',
        backgroundRepeat: 'no-repeat', 
        background: 'url(' + pipe_up +')',
        backgroundSize: 'cover',
        transform: 'rotate(180deg)',
       }}>
      </div>  
    </>
  )
}

export default PipeDown