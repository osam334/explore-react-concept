// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'
import Count from './Count';
import Team from './Team';
import Users from './Users';
// import Todo from './Todo'
// import Person from './Person'
// import Singer from './Singer'

function App() {

  // function handle2(num){

  //   alert(num+8)

  // }


  // function handleClick (){
  //   alert("HELLO")
  
  return (

    <>

    <Users></Users>

    <Team></Team>

    

    <Count></Count>

    {/* <h2>Osama Uddin</h2>
    <button onClick={handleClick}>Click Me</button>
    <button onClick={()=>handle2(5)}>osam</button> */}
    </>

  )

}
  export default App;


  


  // const person = ["sakib","raj","dipjol","osam",
  //   "salman Shah"]

  //   const singer=[
  //     {id:1 ,name: "Atif Aslam",age: 34},
  //     {id:2, name: "Evan",age: 24},
  //     {id:3, name: "kk",age: 54},
  //     {id:4, name: "sonu nigam",age: 64},

  //   ]


   
  //   <>

  //   {/* <Person name={"osama"}></Person> */}


  //     {
  //       singer.map(singer => <Singer  singer={singer}></Singer>)
  //     }

  //     {
  //       person.map(person => <Person name={person}></Person>)
  //     }
  //     {/* <Todo task="Learning React " isDone={true}></Todo>
  //     <Todo task="Learning React " isDone={false}></Todo>
  //     <Todo task="Learning React " isDone={true}></Todo>
  //       {/* <Device name="Mobile" price="55"></Device> */}

  //     </>
    
  // }

  // const {name,price} = {name: "Mobile", price: "55"}

  // function Device({name,price}){
  //   // console.log(name,price)
  //   // return(
  //     <h3 > this is : {name} , price:  {price}</h3>
//    )
// }



