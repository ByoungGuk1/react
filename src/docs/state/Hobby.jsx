import React, { useState } from 'react';

// 사용자에게 취미를 입력받고, 화면에 실시간으로 출력한다.

// 취미가 축구라면 글자 크기를 50px
// 취미가 농구라면, 글자의 컬러를 blue

const Hobby = () => {
  const [result, changeResult] = useState("");
  const [fontSize, changeFontSize] = useState({});
  const [color, changeColor] = useState({});
  // const [style, changeStyle] = useState({});

  const getHobby = (e) =>{
    if (e.target.value === "축구") {
      changeFontSize("50px");
      changeColor("");
      // changeStyle({fontSize : "50px"});
    }
    else if (e.target.value === "농구") {
      changeColor("blue");
      changeFontSize("");
    }
    else{
      changeColor("");
      changeFontSize("");
    }
    changeResult(e.target.value);
  }

  return (
    <div>
      <h1 style={{color : color, fontSize : fontSize}}>{result}</h1>
      <input type="text" onChange={getHobby}/>
    </div>
  );
};

export default Hobby;