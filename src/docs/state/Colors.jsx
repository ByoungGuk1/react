import React, { useState } from 'react';

//result 는 사용자가 입력한 결과
// 빨간색 버튼을 누르면 글자색 빨간색
// 파란색 버튼을 누르면 글자색 파란색
// 핑크색 입력시 글자색 핑크색

const Colors = () => {
  const [result, setColor] = useState("123");
  let color = "";

  const changeColor = (e) => {
    if(e.target.innerText === "빨간색 버튼")  color = "red";
    if(e.target.innerText === "파란색 버튼")  color = "blue";
    if(e.target.innerText === "핑크색")  color = "";
    setColor(result.style);
    // console.log(result.style.color);
  }

  return (
    <div>
      <p>{result ?? "123"}</p>
      <input type="text" onChange={changeColor}/>
      <button onClick={changeColor}>빨간색 버튼</button>
      <button onClick={changeColor}>파란색 버튼</button>
    </div>
  );
};

export default Colors;