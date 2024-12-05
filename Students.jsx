import React from "react";

export default function Students() {
  let student = [
    {
      Id: 101,
      Name: "Ram",
      Branch: "CSDS",
      Marks: 2021,
    },
    {
      Id: 102,
      Name: "Varun",
      Branch: "CSAI",
      Marks: 1934,
    },
    {
      Id: 103,
      Name: "Shyam",
      Branch: "IT",
      Marks: 2021,
    },
  ];

  return (
    <>
      <div>Students</div>
      <br />
      {student.map((stu) => (
        <div key="" style={{display:'inline', 
          float:'left',
          border:'2px solid blue',
          marginLeft:'10px',
          backgroundColor:'cyan',
          padding:'15px'
        }}>
          {stu.Name}
          <br />
          {stu.Branch}
          <br />
          {stu.Id}
          <br />
          {stu.Marks}
        </div>
      ))}
    </>
  );
}
