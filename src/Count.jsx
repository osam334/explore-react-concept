import { useState } from "react"

export default function Count(){

    const [count,setCount] = useState(0)


   const addHandle=()=>{

    const newCount = count + 1
    setCount(newCount)

    }

    const reduce=()=>{
        const newReduce = count - 1
        setCount(newReduce)
    }
    

    return(
        <div>
            <h4>Count : {count} </h4>
            <button onClick={addHandle}>Add</button>
            <button onClick={reduce}>rdduce</button>
        </div>
    )
}