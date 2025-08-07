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

// ---

// import React, { useRef, useState } from 'react';

// const CheckBoxRefTask = () => {
//   // ref를 이용하여, checkbox를 선택한 언어를 화면에 출력하기
//   // checkbox가 선택 해제되면 언어도 사라진다.
  
//   const checkboxRef = useRef([])
//   const [language, setLanguage] = useState("") 

//   const addLanguage = (e, index) => {
//     let value = checkboxRef.current[index].value;
//     let isLast = checkboxRef.current.length - 1 == index
    
//     if(e.target.checked){
//       setLanguage(isLast ? language + value : language + value + ", ")
//     }else {
//       setLanguage(isLast ? language.replaceAll(value, "") : language.replaceAll(value + ", ", ""))
//     }
//   }

//   return (
//     <div>
//       <h1>{language}</h1>
//       <label>
//         <input 
//           type="checkbox" 
//           name="language" 
//           ref={(el) => checkboxRef.current[0] = el} onChange={(e) => addLanguage(e, 0)} value={"JAVA"} />
//         <span>JAVA</span></label>
//       <label>
//         <input 
//           type="checkbox" 
//           name="language" 
//           ref={(el) => checkboxRef.current[1] = el} onChange={(e) => addLanguage(e, 1)} value={"Python"} />
//         <span>Python</span></label>
//       <label>
//         <input 
//           type="checkbox" 
//           name="language" 
//           ref={(el) => checkboxRef.current[2] = el} onChange={(e) => addLanguage(e, 2)} value={"JS"} />
//         <span>JS</span></label>
//     </div>
//   );
// };

// export default CheckBoxRefTask;