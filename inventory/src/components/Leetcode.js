import Data from "../data.json";

function Leetcode(props){

    // className="text-success"
    // className="text-warning"
    // className="font-weight-normal text-nowrap"
    const displayItems = (item) =>{

        let isEasy = item.difficulty === "Easy"
        let isMed = item.difficulty === "Medium"
        

        return(
            <tr>
                <th scope="row">{item.id}</th>
                <td>{item.title}</td>
                <td className={isEasy ? "text-success" : isMed ? "text-warning" : "text-danger"}>{item.difficulty}</td>
                <td>{item.blind}</td>
            </tr>
        )

    }

    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Problem</th>
                        <th scope="col">Difficulty</th>
                        <th scope="col">Included in Blind 75?</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {Data.map(displayItems)}
                </tbody>
            </table>
        </div>
        
    )

}

export default Leetcode