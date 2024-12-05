import Emp from "./Emp";
import FoodPlanner1 from "./FoodPlanner1";
import Person from "./Person";
import Students from "./Students";
import FoodPlanner from "./FoodComponent/FoodPlanner";
import Todo from "./TodoComponent/Todo";
import Events from "./Events";
import Fruits from "./FruitComponent/Fruits";
import Counter from "./Counter";

export default function App() {
  let nameData = 'Rajeev';
  let courseData = 'B.Tech';
  let branchData = 'IT'
  return (
    <>
   {/* <Counter></Counter> */}
<Fruits></Fruits>
    {/* <Events></Events> */}
      {/* <Students></Students> */}
      {/* <Person name={nameData} course={courseData} branch={branchData} /> */}
      {/* <FoodPlanner></FoodPlanner> */}

      {/* <Todo></Todo> */}
    </>
  );
}









// let App = () => {
//  let x = 10;
//  let y = 20;
//  let arr = [1,2,3,4,5];

//  let arr1 = arr.map((data)=>{
//   return <>  <br/> {data}</> }
//  )
//   return (
//     <>
//       <h1>Hello</h1>
//       x = {x} <br />
//       y = {y}  <br />
//       Sum = {x+y} <br />
//       {arr1}
//     </>
//   );
// };

// export default App;

// import Greet from "./greet";
// import Hello from "./Hello";
// import Image from "./Image";
// import React from "react";
// import MyButton from "./MyButton";

// function App() {
//   return (
//     <>
//       <Image />
//       <br />
//       <Image></Image>
//       <MyButton></MyButton>
//       <MyButton />
//       <br/>
//       <Hello></Hello>
//     </>
//   );
// }

// export default App;
