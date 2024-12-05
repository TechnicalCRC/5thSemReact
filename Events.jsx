export default function Events() {

   let handleOnClick=(name)=>{
    alert("Hello in alert... Mr. " + name)
   }

  return (
    <>
    <h1>Events</h1>
    <button className="w-25" onClick={()=>handleOnClick("Sumit")}>Click Here</button>
    </>
  )
}
