import { useState } from "react";
import fetchTodo from "./fetchTodo";

const TodoInsert = ({todos,HandlerTodos,setHandlerTodos}) => {
  const [value, setValue] = useState();
  const onChangeValue = (e) => {
    setValue(e.target.value);
  }

  const insertOption = {
    method : "post",
    headers : {
      'Content-Type' : 'application/json',
    },
    // .stringify() : JSON 객체로 변환한 값을 리턴하는 메서드
    body : JSON.stringify({
      id : (todos.length+1).toString(),
      title : value,
    }),
  }

  const insertTodo = (e) => {
    if(e.key === "Enter"){
      if(!window.confirm("추가할까요?"))  return;
      fetchTodo("http://localhost:4000/todo",insertOption)
      .then ((res) => {
        if(!res.ok) return;
        alert("추가 완료")
        setHandlerTodos(!HandlerTodos)
      })
      .catch(console.error);
    }
  }
  
  return (
    <div>
      <input type="text" 
        onChange={onChangeValue}
        onKeyDown={insertTodo} 
        placeholder='오늘 할 일' />
    </div>
  );
};

export default TodoInsert;<input type="text" placeholder='오늘 할 일'/>