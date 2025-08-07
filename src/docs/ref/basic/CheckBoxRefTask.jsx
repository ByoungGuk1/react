import { useRef, useState } from "react";

const CheckBoxRefTask = () => {

  const inputRef = useRef([]);
  const [ment, setMent] = useState("");

  const changeChecked = (e) => {
    let ments = [];
    let index = 0;
    inputRef.current.forEach((input) => {
      if(input.checked)
        ments[index++] = input.name;
    })
    setMent(ments.join(", "));
  }

  return (
    <div>
      <h1>{ment}</h1>
      <label>
        <span>JAVA</span>
        <input type="checkbox" name="JAVA" 
        ref = {(el) => inputRef.current[0] = el}
        onChange = {changeChecked}/>
      </label>
      <label>
        <span>Python</span>
        <input type="checkbox" name="Python" 
        ref = {(el) => inputRef.current[1] = el}
        onChange = {changeChecked}/>
      </label>
      <label>
        <span>JS</span>
        <input type="checkbox" name="JS" 
        ref = {(el) => inputRef.current[2] = el}
        onChange = {changeChecked}/>
      </label>
    </div>
  );
};

export default CheckBoxRefTask;