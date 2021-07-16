import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import {useState} from "react";

function App() {
  const [data, setdata] = useState({})

  const updateData = (searchParams) =>{
    setdata(searchParams)
  }

  return (
    <div className="App">
      <SearchBar callback={updateData}></SearchBar>
      <p>Name: {"name" in data ? data["name"]:"No data to display"}</p>
      <p>Price: {"price" in data ? data["price"]:"No data to display"}</p>
      <p>Type: {"type" in data ? data["type"]:"No data to display"}</p>
      <p>Brand: {"brand" in data ? data["brand"]:"No data to display"}</p>
    </div>
  );
}



export default App;
