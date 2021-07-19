import {useState} from "react";

function AddItem(props){
    const [name, setname] = useState("");
    const [price, setprice] = useState(0)
    const [type, settype] = useState("")
    const [brand, setbrand] = useState("")

    const addItemButtonPressed= () =>{
            props.addItem({name:name,price:price,type:type,brand:brand})
            setname("")
            setprice(0)
            settype("")
            setbrand("")
                
    }

    return(
        <div className="container">
            <div className="row">
            <h2>Add an Item</h2>
            </div>
            
            <div className="row">
                <label htmlFor="name-field"> Name: </label>
                <input className="form-control" id="name-field" type="text" value={name} onChange={(e)=>setname(e.target.value)}/>
                <label htmlFor="price-field"> Price: </label>
                <input className="form-control" id="price-field" type="number" value={price} onChange={(e)=>setprice(e.target.value)}/>
                <label htmlFor="type-field"> Type: </label>
                <input className="form-control" id="type-field" type="text" value={type} onChange={(e)=>settype(e.target.value)}/>
                <label htmlFor="brand-field"> Brand: </label>
                <input className="form-control" id="brand-field" type="text" value={brand} onChange={(e)=>setbrand(e.target.value)}/>
            </div>
            <div className="row mt-3">
            <button className="btn btn-primary" type="button" onClick={addItemButtonPressed}> Add Item </button>
            </div>
            


            
        </div>
    )

}

export default AddItem