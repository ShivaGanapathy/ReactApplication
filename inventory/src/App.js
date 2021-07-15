import './App.css';
import Info from "./info.js"
import { PropTypes } from "prop-types"
import {useState} from "react";
function App() {
  return (
    <div className="App">
      <Info></Info>
      <ButtonState></ButtonState>
    </div>
  );
}

function ButtonState(){
  const [title, setTitle] = useState("This is our default title set by the state")
  const [count,setCount] = useState(0)
  const updateTitleClicked = () => {
    setTitle("We clicked the button")

  }
  

  
  const updateCounterClicked = () => {
    setCount(count + 1)

  }  

  return(
    <div>
      <Data title={title} count={count}></Data>
      <button onClick={updateTitleClicked}>Update Title</button>
      <button onClick={updateCounterClicked}>Update Counter</button>

    </div>
  )

}

function Data(props){
  return(
    <div>
      <p>Title : {props.title}</p>
      <p>Count : {props.count}</p>
    </div>
  )

}
export default App;
