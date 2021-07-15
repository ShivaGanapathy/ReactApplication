import './App.css';
import Info from "./components/info.js"
import List from "./components/list.js"
// import { PropTypes } from "prop-types"
// import {useState} from "react";

function App() {
  return (
    <div className="App">
      <Info></Info>
      <List text="This is my first item!"></List>
      <List text="This is my second item!"></List>
      <List></List>
      
    </div>
  );
}



export default App;
