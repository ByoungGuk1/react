import { useState } from 'react';
import S from './style';

const Styled04 = () => {
  const [value, setValue] = useState("");
  const [color, setColor] = useState("");

  const onChangeValue = (e) => {
    setValue(e.target.value);
  }

  const handleColor = (e) => {
    if (e.key === "Enter") {
      setColor(value);
    }
  }

  return (
    <div>
      <input type="text" onClick={onChangeValue} onKeyDown={handleColor} />
      <S.H1 color = {color}>컬러가 적용될 문단</S.H1>
      {/* <S.P fontColor={"red"}>
        styled component!
      </S.P> */}
    </div>
  );
};

export default Styled04;