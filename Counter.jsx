import React, { useState } from 'react'

export default function Counter() {
 //let count = 0 ;

  let [count, setCount] = useState(0);

  return (
    <><h1>Counter</h1>
    <p>Counter Value : {count}</p>
    <button onClick={()=>setCount(count+1)}>Add 1</button>
    <button onClick={()=>setCount(count-1)}>Sub 1</button>

    <br />
    <br />
    <button onClick={()=>setCount(count+10)}>Add 10</button>
    <button onClick={()=>setCount(count-10)}>Sub 10</button>

 <br />
 <br />
 <button onClick={()=>setCount(0)}>Reset to 0 </button>


    </>
  )
}
