import React, { useState } from 'react';

const Count = () => {
  // console.log("useState()", useState());
  
  const [number, setNumber] = useState(1);
  // console.log("useState(0)[0]", number);
  // console.log("useState(0)[1]", setNumber);

  const increase = (e) => {
    setNumber(number + 1);
  }
  const decrease = (e) => {
    setNumber(number - 1);
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={increase}>1 증가</button>
      <button onClick={decrease}>1 감소</button>
    </div>
  );
};

export default Count;