import { useEffect, useState } from "react"
import Friend from "./Friend"

export default function Users(){

    const [users,setUsers] = useState([])

    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUsers(data))

        .catch()
    } ,[])



    return (

        <div>

           {
            users.map(user => <Friend user={user}></Friend>)
           }

        </div>

    )
}