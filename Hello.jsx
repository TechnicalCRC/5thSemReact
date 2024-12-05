function Hello() {
  let name = "Ravi";
  let branch = "IT";

  let display=function(){
   return <u>UnderLine Text</u>
  }

  return (
    <h1 style={{color:"GrEEn",backgroundColor:"black",borderRadius:"10"}}>
      Hello World!
      <br />
      Welcome Mr. {name}, Your Branch would be {branch}
      <br />
      <b style={{fontSize:"100px"}}>Bold</b> 
      <br />
      <b style={{fontSize:"100pt"}}>Bold</b>
      <br /> 
       {display()}
       <br />
    </h1>
    
  );
}
export let HellA = 10;
export let HellB = "Varun";
export function NewWE() {
  return "New-----";
}

export default Hello;
