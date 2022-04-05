import author from "../assets/author.gif"

const Author =() => {
  return (
    <div style = {{
      marginTop: "100px", 
      position: "relative"
    }} >
      <center>
        <h2>Designed by</h2> <img src = {author} width="400px" height="80px" alt="author" />
      </center>
    </div>
  )
}

export default Author