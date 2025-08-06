import React, { useState } from 'react';

const Attendance = ({person}) => {
  console.log(person);
  // const [color,changeColor] = useState("");
  let style ={};
  if(person.isPresent === true) style = {color : "blue"};
  else style = {fontSize : "10px"}
  return (
    <li style={style}>
      {person.name}
    </li>
  );
};

export default Attendance;


// import React from 'react';

// const Attendance = ({student}) => {
//   const {name, isPresent} = student

//   return (
//     <li style={isPresent ? {color: "blue"} : {fontSize: "10px"}}>이름: {name}</li>
//   );
// };

// export default Attendance;