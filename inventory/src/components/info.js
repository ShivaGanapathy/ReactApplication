import React from "react";

class Info extends React.Component{
    constructor(props){
        super(props);
        
    }

    render(){
        const title = this.props.title
        return (
            <div>
                <h1>{title}</h1>
                <p>Manage Your Stuff</p>
                <ul>
                    <li>
                        hi
                    </li>
                    <li>
                        hello
                    </li>
                    <li>
                        salutations
                    </li>
                </ul>
            </div>
        )


    }
}

Info.defaultProps = {
    title:"DEfault"
}


 export default Info;