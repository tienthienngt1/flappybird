import pipe_up from '../assets/pipe_up.png'

const PipeUp = () => {
  return (
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
    
  )
}

export default PipeUp