import foreground from '../assets/foreground.jpg'

const Foreground = () => {
  return (
    <div style = {{
      background: 'url(' + foreground + ')',
      width: '90vw',
      height: '100px', 
      backgroundSize: 'cover'
    }}>
    </div>
  )
}

export default Foreground