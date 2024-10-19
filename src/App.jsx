
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {
  function handleClick (){
    alert('button click')
  }
  const handleClick2=()=>{
    alert('button2 clicked')
  }
  const addToFive=(num)=>{
    alert(num + 4)
  }
  return (
    <>  


      <h3>React core concepts</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}> click me </button>
      <button onClick={handleClick2}>click 2</button>
      <button onClick={()=>addToFive(4)}>add Four</button>
       
    </>
  )
}

export default App
