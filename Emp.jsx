export default function Emp() {
  let employees = ['Vishal', 'Mohit','Sumit','Amit','Varun','Vipin']

  let students=[
    {
      Id:101,
      Name:'Ram',
      Branch:'CSDS',
      Marks:2021
    },
    {
      Id:102,
      Name:'Ram',
      Branch:'CSDS',
      Marks:2021
    },
    {
      Id:103,
      Name:'Ram',
      Branch:'CSDS',
      Marks:2021
    }
  ]

  return <>
    <h1>Employee List</h1>
    <ul>
     {
      employees.map((emp)=> 
      <li key={emp} style={{display:'inline',
        margin:'10px',
        border:'2px solid red',
        backgroundColor:'lightgreen',
        padding:"0px 5px"
 
      }}>{emp}</li>
      )
     }
 

    {/* <li>{employees[0]}</li>
    <li>{employees[1]}</li> */}
    </ul>
  </>
}
