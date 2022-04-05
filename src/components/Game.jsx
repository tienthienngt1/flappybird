import Bird from './Bird'
import PipeDown from './PipeDown'
import Background from './Background'
import Foreground from './Foreground'
import background from "../assets/background.jpg"

const Game = () => {
  return (
    <center>
      <div style = {{
        maxWidth: '700px', 
        minWidth: '300px', 
        maxHeight: '1000px',
        minHeight: '500px',
        width: '90vw',
        height: '85vh',
        }} >
        <Background />
        <Foreground />
      </div>
    </center>
    )
}
export default Game