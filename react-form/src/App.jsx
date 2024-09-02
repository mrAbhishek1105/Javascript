import { useState } from "react"
function App() {
  const [name, setName] = useState('')
  console.log(name)
  return (
    <>
    <form>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" onChange={(e)=>{
        setName(e.target.value)
      }}/>
    </form>
      
    </>
  )
}

export default App
