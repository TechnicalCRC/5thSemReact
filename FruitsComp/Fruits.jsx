import { useState } from "react";
import ItemFruit from "./ItemFruit";

export default function Fruits() {
    let nlist = ['Apple','Banana', 'Peach', 'Lichi', 'Orange', 'Grapes']

  let [list, setList] = useState(nlist);

  let handleOnChange = () => {
    if (event.key == "Enter") {
     let newFruit = event.target.value;
     newFruit = [...list,newFruit]
     setList(newFruit);
     // console.log(newFruit);
    }
  };
  return (
    <>
      <h1 className="text-center fw-bold" >Fruit List</h1>
      <hr />
      <input
        type="text"
        placeholder="Enter Fruit Name"
        className="m-2 mx-5"
        onKeyDown={handleOnChange}
      />
      <ol className="list-group">
        {list.map((item) => (
          <ItemFruit key={item} Item={item}></ItemFruit>
        ))}
      </ol>
    </>
  );
}
