import {useState} from "react";

function SearchBar(props){
    const [name, setname] = useState("");
    const [price, setprice] = useState(0)
    const [type, settype] = useState("")
    const [brand, setbrand] = useState("")

    const searchButtonPressed= () =>{
            props.updateSearchParams({name:name,price:price,type:type,brand:brand})
                
    }

    return(
        <div className="container">
            <div className="row">
            <h2>Search for an Item</h2>
            </div>
            
            <div className="row">
                <div className="col">
                    <label htmlFor="name-field"> Name: </label>
                    <input className="form-control" id="name-field" type="text" value={name} onChange={(e)=>setname(e.target.value)}/>
                </div>
                

                <div className="col">
                <label htmlFor="price-field"> Max Price: </label>
                <input className="form-control" id="price-field" type="number" value={price} onChange={(e)=>setprice(e.target.value)}/>
                </div>
                

                <div className="col">
                <label htmlFor="type-field"> Type: </label>
                <input className="form-control" id="type-field" type="text" value={type} onChange={(e)=>settype(e.target.value)}/>
                </div>
                

                <div className="col">
                <label htmlFor="brand-field"> Brand: </label>
                <input className="form-control" id="brand-field" type="text" value={brand} onChange={(e)=>setbrand(e.target.value)}/>
                </div>
                
            </div>

            <div className="row mt-3">
                <div className="col-4"></div>
                <button className="col-4 btn btn-primary" type="button" onClick={searchButtonPressed}> Search </button>
                
            
            </div>

            <p>Name: {name}</p>
            <p>Price: {price}</p>
            <p>Type: {type}</p>
            <p>Brand: {brand}</p>
        </div>
    )

}

export default SearchBar