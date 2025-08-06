// import React, { useState } from 'react';
// import CheckTodo from './CheckTodo';

// const CheckTodoContainer = () => {

// // 1. 화면에 todo의 데이터를 출력한다.
// // 2. todo의 상태(done)이 true 상태라면 
// // textdecoration: line-through 적용시킨다.
// // 3. todo의 상태(done)이 false라면 아무스타일도 들어가지 않는다.
// // 4. checkbox를 클릭하면 상태(done)가 변경되고, 스타일도 맞게 들어간다.
// // .map(), 삼항연산자 이용

//     const todoData = [
//     { id: 1, task: "React 공부하기", done: false },
//     { id: 2, task: "운동하기", done: true },
//     { id: 3, task: "장보기", done: false },
//     { id: 4, task: "점심 먹기", done: false },
//     { id: 5, task: "코딩하기", done: true },
//   ]
  
//   const [check, changeCheck] = useState(false);
//   const [style, changeStyle] = useState({"textDecoration":""})
  
//   const isCheck = (e) =>{
//     changeCheck(e.target.checked);
//     if(e.target.checked){
//       changeStyle({"textDecoration":"line-through"});
//     }
//     else{
//       changeStyle({"textDecoration":""});
//     }
//   }
  
//   const tags = todoData.map((data, index) => {
//     const {done, task} = data;
//     return (
//       <li key = {index}>
//         <input type="checkbox" onChange={isCheck} checked = {check}/>
//         <span style={style}>{task}</span>
//       </li>
//       // <CheckTodo key = {index} data = {data} onchange = {isCheck}/>
//     );
//   })

//   return (
//     <ul>
//       {tags}
//     </ul>
//   );
// };

// export default CheckTodoContainer;


// ----


// import React, { useState } from 'react';

// const CheckTodoContainer = () => {

// // 1. 화면에 todo의 데이터를 출력한다.
// // 2. todo의 상태(done)이 true 상태라면 
// // textdecoration: line-through 적용시킨다.
// // 3. todo의 상태(done)이 false라면 아무스타일도 들어가지 않는다.
// // 4. checkbox를 클릭하면 상태(done)가 변경되고, 스타일도 맞게 들어간다.
// // .map(), 삼항연산자 이용

//   const [todoData,changeTodoData] = useState([
//     { id: 1, task: "React 공부하기", done: false },
//     { id: 2, task: "운동하기", done: true },
//     { id: 3, task: "장보기", done: false },
//     { id: 4, task: "점심 먹기", done: false },
//     { id: 5, task: "코딩하기", done: true },
//   ])

//   const [style, changeStyle] = useState({"textDecoration":""})
  
//   const handleDone = (id) => {
//     changeTodoData(
//       todoData.map((todo)=>{
//         if (!todo.done) {
//           changeStyle({"textDecoration":"line-through"});
//         }
//         return todo.id === id ? {...todo, done : !todo.done} : todo;
//       })
//     )
//   }

//   const tags = todoData.map((data, index) => {
//     return (
//       <li key = {index}>
//         <input type="checkbox" checked = {data.done} onChange={(e)=>{return handleDone(data.id)}}/>
//         <span style={style}>{data.task}</span>
//       </li>
//     );
//   })

// return (
//   <ul>
//     {tags}
//   </ul>
// );
// };

// export default CheckTodoContainer;


// ---

import React, { useState } from 'react';
import Todo from '../basic/Todo';

const CheckTodoContainer = () => {

  // 1. 화면에 todo의 데이터를 출력한다.
  // 2. todo의 상태(done)이 true 상태라면 
  // textdecoration: line-through 적용시킨다.
  // 3. todo의 상태(done)이 false라면 아무스타일도 들어가지 않는다.
  // 4. checkbox를 클릭하면 상태(done)가 변경되고, 스타일도 맞게 들어간다.
  // .map(), 삼항연산자 이용

  const [todos, setTodos] = useState([
    { id: 1, task: "React 공부하기", done: false },
    { id: 2, task: "운동하기", done: true },
    { id: 3, task: "장보기", done: false },
    { id: 4, task: "점심 먹기", done: false },
    { id: 5, task: "코딩하기", done: true },
  ])

  const handleDone = (id) => {
    setTodos(
      todos.map((todo) => todo.id === id ? {...todo, done: !todo.done} : todo)
    )
  }

  const todoList = todos.map((todo, i) => {
    return (
      <Todo key = {i}  todo = {todo} handleDone = {handleDone}/>
    )
  })

  return (
    <ul>
      {todoList}
    </ul>
  );
};

export default CheckTodoContainer;