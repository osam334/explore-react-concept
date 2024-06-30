import { useState } from "react"

export default function Team(){

    const [team,setTeam] = useState(11);

    const handleAdd = () =>{

        const newTeam = team + 1
        setTeam(newTeam) 


    }

    const handleRemove = () =>{
        const newTeam = team - 1
        setTeam(newTeam) 

    }



    const teamStyle  = {
        border : "2px solid purplr ",
        margin : "25px",
        padding : "15px",
        borderRadius : "15px"
    }
    return(
        <div style={teamStyle}>
            <h3>Player : {team} </h3>

            <button onClick={handleAdd}>add</button>
            <button onClick={handleRemove}>reduce</button>
        </div>
    )
}