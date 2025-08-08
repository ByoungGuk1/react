import { useEffect, useState } from "react";

const SideEffect = () => {

  const [color, setColor] = useState("");
  const [number, setNumber] = useState(0);
  
  const getRendomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  const onClickToChangeColor = () => setColor(getRendomColor());
  const increase = () => setNumber(number+1);

  useEffect(() => {
    console.log("useEffect : 리렌더링");
  }, [number]);

  console.log("컴포넌트 : 리렌더링");

  return (
    <div>
      <h1 style={{color}}>글자</h1>
      <h1>{number}</h1>
      <button onClick={onClickToChangeColor}>색상 변경</button>
      <button onClick={increase}>+1</button>
    </div>
  );
};

export default SideEffect;