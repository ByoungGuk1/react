import { useRef, useState } from "react";

const CheckBoxRef = () => {

  const inputRef = useRef([]);
  const [result, setResult] = useState("");

  const onClickToPrintHobby = () => {
    // console.log(inputRef.current);
    let hobby = "";
    inputRef.current.forEach((input)=>{
      if(input.checked)
        hobby += input.value + " ";
    });
    setResult(hobby);
    inputRef.current.forEach((input)=>console.log(input.value));
  }

  return (
    <div>
      <p>{result}</p>
      <label>
        <span>축구</span>
        <input type="checkbox" name ="hobby" value = "축구"
          ref = {(el) => inputRef.current[0] = el} />
      </label>
      <label>
        <span>야구</span>
        <input type="checkbox" name ="hobby" value = "야구"
          ref = {(el) => inputRef.current[1] = el} />
      </label>
      <label>
        <span>농구</span>
        <input type="checkbox" name ="hobby" value = "농구"
          ref = {(el) => inputRef.current[2] = el}/>
      </label>
      <button type="button" onClick={onClickToPrintHobby}>취미 확인하기</button>
    </div>
  );
};

export default CheckBoxRef;