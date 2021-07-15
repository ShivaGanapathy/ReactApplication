import React from "react";

class List extends React.Component{

    constructor(props){
        super();
    }

    render(){
        return(
            <div>
                <ul>
                    <li>
                        {this.props.text}
                    </li>
                    
                </ul>
            </div>
        )
    }
}

List.defaultProps = {
    text: "default"
}

export default List;