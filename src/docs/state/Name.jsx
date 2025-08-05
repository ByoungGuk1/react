import React, { useState } from 'react';

const Name = () => {
  const [result, setResult] = useState("");

  const onChangeResult = (e) => {
    setResult(e.target.value);
  }

  return (
    <div>
      <p>네임 컴포넌트</p>
      <p>
        {result}
      </p>
      <input type="text" onChange={onChangeResult}/>
    </div>
  );
};

export default Name;