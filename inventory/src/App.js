import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import AddItem from './components/AddItem';
import ItemsDisplay from './components/ItemsDisplay';
import {useState} from "react";

function App() {
  const [filters, setfilters] = useState({})
  const [data, setdata] = useState({items:[]})

  const updateFilters = (searchParams) =>{
    setfilters(searchParams)
  }

  const addItemToData = (item) =>{
    let items = data["items"]
    item.id = items.length
    console.log(items.length)
    items.push(item)
    setdata({items:items})
    console.log(data)


  }

  return (
    <div className="App">
      <SearchBar updateSearchParams={updateFilters}></SearchBar>
      <ItemsDisplay items = {data["items"]}></ItemsDisplay>
      <AddItem addItem={addItemToData}/>
      
    </div>
  );
}



export default App;
