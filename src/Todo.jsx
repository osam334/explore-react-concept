// export default function Todo({task}){
//     return(
//         <li>Task : {task}</li>
//     )
// }
// export default function Todo({ task, isDone }) {


//     if (isDone === true) {
//         return <li>Finished : {task}</li>
//     }
//     else {
//         return <li>Work on : {task}</li>
//     }
// }


export default function Todo({ task, isDone }) {

    if (isDone) {
        return <li>Finished : {task}</li>
    }
    return <li>Work on : {task}</li>
}
