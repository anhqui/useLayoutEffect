import { useEffect, useLayoutEffect, useRef } from "react"
function App() {
  const inputRef = useRef(null)
  useEffect(() => {
    // console.log("UseEffect")
    inputRef.current.value = "HELLO WORLD"
  }, [])

  useLayoutEffect(() => {
    // console.log("UseLayoutEffect")
    console.log(inputRef.current.value);
  }, [])
  const handleChange = () => { }
  return (
    <div className="App">
      <input ref={inputRef} value="JOHN DOE" onChange={handleChange} />
    </div>
  )
}
export default App
