import AppName from "./AppName";
import InputTodo from "./InputTodo";
import Task1 from "./Task1";
import Task2 from "./Task2";
import Task from './Task.jsx'
import "./Todo.css";

export default function Todo() {
  let TaskTodo = [
    {
      todoName: "DBMS Practical",
      todoDate: "28-11-2024",
    },
    {
      todoName: "DAA Practical",
      todoDate: "29-11-2024",
    },
    {
      todoName: "DA Practical",
      todoDate: "03-12-2024",
    },
    {
      todoName: "CRC Project 3",
      todoDate: "07-12-2024",
    },
  ];

  return (
    <>
      <center>
        <div className="container">
          <AppName aName="TODO App" />
          <InputTodo />
          <Task1 todoName={"DBMS Internal Practical"} todoDate={"28-11-2024"} />
          <Task2 todoName={"CRC Project 2"} todoDate={"02-12-2024"} />
          <Task2 todoName={"DAA"} todoDate={"29-11-2024"} />
         
          {
           TaskTodo.map((item)=>
            <Task key="" todoName={item.todoName} todoDate={item.todoDate} />
          )

          }

        </div>
      </center>
    </>
  );
}
