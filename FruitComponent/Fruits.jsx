import { useState } from "react";
import ItemFruit from "./ItemFruit";

export default function Fruits() {
  let nlist = ["Apple", "Blueberry", "Orange", "Grapes", "Apple"];
  let count = 0;

  // useState - Hook
  let [list, setList] = useState(["Apple",'Lichi']);

  let [fruitName, setFruitName] = useState();
  
  let handleOnChange = () => {
     setFruitName(event.target.value);
  
    // if (event.key == "Enter") {
    //   //let newFruit = event.target.value;
    //  // newFruit = [newFruit,...list]
    //   setList([...list, event.target.value])
    //  // console.log(newFruit);
    // }
  };

  let handleOnClick=()=>{
    setList([...list, fruitName])
setFruitName("")
  }
  return (
    <>
      <h1>Fruit List </h1>
      <input type="text" className="w-50 m-2 mx-5" onChange={handleOnChange} value={fruitName} />


      <button className="w-25 btn btn-info" onClick={handleOnClick}>Add to List</button>
      <ol className="list-group">
        {list.map((item) => (
          <ItemFruit key={count++} Item={item} />
        ))}
      </ol>
    </>
  );
}
