import React, { useState } from "react";

//result 는 사용자가 입력한 결과
// 빨간색 버튼을 누르면 글자색 빨간색
// 파란색 버튼을 누르면 글자색 파란색
// 핑크색 입력시 글자색 핑크색

const Colors = () => {
  const [result, setResult] = useState("");
  const [result_color, setColor] = useState("");

  const changeColor = (e) => {
    if (e.target.value !== "") setResult(e.target.value);
    if (e.target.innerText === "빨간색 버튼") setColor("red");
    if (e.target.innerText === "파란색 버튼") setColor("blue");
    if (e.target.value === "핑크색") setColor("");
  };

  return (
    <div>
      <p style={{ color: result_color }}>{result}</p>
      <input type="text" onChange={changeColor} />
      <button onClick={changeColor}>빨간색 버튼</button>
      <button onClick={changeColor}>파란색 버튼</button>
    </div>
  );
};

export default Colors;
