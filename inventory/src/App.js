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
    <div className="container">

    <div className="row mt-3">
      <ItemsDisplay items = {data["items"]}></ItemsDisplay>
      </div>

    <div className="row mt-3">
      <SearchBar updateSearchParams={updateFilters}></SearchBar>
      </div>
      
    <div className="row mt-3">
      <AddItem addItem={addItemToData}/>
      </div>
      
      
      
      
    </div>
  );
}



export default App;
