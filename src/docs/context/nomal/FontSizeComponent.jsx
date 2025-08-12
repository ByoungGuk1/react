import { useContext, useState } from "react";
import { FontContext } from "./FontContext";
import useInput from "../../../hooks/useInput";

const FontSizeComponent = () => {
  
  const {state, actions} = useContext(FontContext);
  const {setFontSize} = actions;
  const {fontSize} = state;
  
  const [value, ChangeFontSize] = useInput("");
  
  const keyDown = (e) => {
    if(e.key === "Enter")
      setFontSize(value+"px");
  }
  
  return (
    <div>
      <p style={{fontSize : fontSize}}>최하위 컴포넌트</p>
      <input type="text" onChange={ChangeFontSize} onKeyDown={keyDown}/>
      <button onClick={()=>(setFontSize("150px"))}>커지는 버튼</button>
    </div>
  );
};

export default FontSizeComponent;