import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Leetcode from './components/Leetcode';
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

  const filterData = (data) =>{

    const filteredData = []

    if (!filters.name){
      return data
    }

    for(const item of data){
      if (filters.name !== "" && item.name !== filters.name){
        continue
      }
      if (filters.price !== 0 && item.price > filters.price){
        continue
      }
      if (filters.type  !== "" && item.type !== filters.type){
        continue
      }
      if (filters.brand !== "" && item.brand !== filters.brand){
        continue
      }

      filteredData.push(item)
    }

    return filteredData

  }

  return (
    <div className="container">

    <div className="row mt-3">
      <Leetcode></Leetcode>
    </div>

    <div className="row mt-3">
      <ItemsDisplay items = {filterData(data["items"])}></ItemsDisplay>
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
