// const CheckTodo = ({data}) => {
//   const {done, task} = data;
//     return (
//       <li>
//         <input type="checkbox" defaultChecked = {done}/>
//         <span style={{"textDecoration": done?"line-through":""}}>{task}</span>
//       </li>
//     );
// };

// export default CheckTodo;

// ---

const CheckTodo = ({todo, handleDone}) => {
  const {id, task, done} = todo;
   
  return (
    <li>
      <input type="checkbox" checked={done} onChange={() => {handleDone(id)}} />
      <span style={{textDecoration : done ? "line-through" : ""}}>{task}</span>
    </li>
  );
};

export default CheckTodo;