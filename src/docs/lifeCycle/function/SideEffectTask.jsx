import { useEffect, useState } from "react";

// https://jsonplaceholder.typicode.com/todos/
// ㄴ> https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10
//      ㄴ> 0부터 10개
// number가 증가할 때 마다 데이터를 요청하는 코드 만들기
// 데이터를 요청 후 화면에 출력

const SideEffectTask = () => {
  const [number, setNumber] = useState(0);
  const [todos, setTodos] = useState([]);
  const [loding, setLoding] = useState(true);

  const getData = async(url) => {
    const jsonFile = await fetch(url);
    const data = await jsonFile.json();
    return data;
  }
  useEffect(() => {
    getData(`https://jsonplaceholder.typicode.com/todos?_start=${10*number+1}&_limit=10`)
      .then((data)=>{
        setTodos(data);
        setLoding(false);
      })
      .catch();
  },[number])
  
  const increase = () => setNumber(number+1);

  if(loding) return <div>로딩중</div>

  const todo = todos.map(({title}, i)=><li key = {i}>{title}</li>);

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={increase}>+1</button>
      <ol>
        {todo}
      </ol>
    </div>
  );
};

export default SideEffectTask;


// ---


// import React, { useEffect, useState } from 'react';

// const SideEffectTask = () => {
//   const [number, setNumber] = useState(0)
//   const [todos, setTodos] = useState([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const getTodos = async () => {
//       try {
//         const dataLength = 10 * number
//         const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_start=${dataLength}&_limit=10`)
//         console.log(response)
//         if(!response.ok) throw new Error(`${response} todos datas fetch Error`)
//         const todos = await response.json()
//         if(!todos.length) throw new Error(`todos 데이터가 없습니다.`)
//         return todos
//       } catch (error) {
//         console.error(`${error.message}`)
//         console.error("getTodos fetching error")
//       }
//     }
    
//     getTodos()
//       .then((todos) => {
//         setTodos(todos)
//         setLoading(false)
//       })
//       .catch((erorr) => {
//         setLoading(true)
//       })
//   }, [number])

//   const todoList = todos.map(({title}, i) => <li key={i}>{title}</li>)

//   if(loading) return (
//     <div>로딩중...</div>
//   )

//   return (
//     <div>
//       <h1>{number}</h1>
//       <button onClick={() => setNumber(number + 1)}>+1</button>
//       <ul>
//         {todoList}
//       </ul>
//     </div>
//   );
// };

// export default SideEffectTask;