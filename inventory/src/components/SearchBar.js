import {useState} from "react";

function SearchBar(props){
    const [name, setname] = useState("");
    const [price, setprice] = useState(0)
    const [type, settype] = useState("")
    const [brand, setbrand] = useState("")

    const searchButtonPressed= () =>{
            props.callback({name:name,price:price,type:type,brand:brand})
                
    }

    return(
        <div>
            <h2>Search for an Item</h2>
            <form>
                <label htmlFor="name-field"> Name: </label>
                <input id="name-field" type="text" value={name} onChange={(e)=>setname(e.target.value)}/>
                <label htmlFor="price-field"> Max Price: </label>
                <input id="price-field" type="number" value={price} onChange={(e)=>setprice(e.target.value)}/>
                <label htmlFor="type-field"> Type: </label>
                <input id="type-field" type="text" value={type} onChange={(e)=>settype(e.target.value)}/>
                <label htmlFor="brand-field"> Brand: </label>
                <input id="brand-field" type="text" value={brand} onChange={(e)=>setbrand(e.target.value)}/>
                <button type="button" onClick={searchButtonPressed}> Search </button>

            </form>

            <p>Name: {name}</p>
            <p>Price: {price}</p>
            <p>Type: {type}</p>
            <p>Brand: {brand}</p>
        </div>
    )

}

export default SearchBar