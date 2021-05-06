function App() {
const clickMe=()=>{
  window.alert("Hello world")
}
  return (
       
        <div>
          <button onClick={clickMe}>
            Hello Word
          </button>
        </div>
    

  )
}

export default App;
