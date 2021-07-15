import React from "react";

class List extends React.Component{
    render(){
        return(
            <div>
                <ol>
                    <li>
                        This is our first item!
                    </li>
                    <li>
                        This is our second item!
                    </li>
                    <li>
                        This is our third item!
                    </li>
                </ol>
            </div>
        )
    }
}

export default List;