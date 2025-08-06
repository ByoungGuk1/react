import React from 'react';

const Todo = ({data}) => {
  // const {data} = props;
  console.log(data);
  const {done, task} = data;
  return (
    <div>
      <input type='checkbox' defaultChecked = {done}/>
      {task}
    </div>
  );
};

export default Todo;