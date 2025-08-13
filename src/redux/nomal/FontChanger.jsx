import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const FontChanger = () => {
  const dispatch = useDispatch();
  const font = useSelector((state) => state);

  console.log(dispatch);
  console.log(font);

  const changeFont = () => {
    // dispatch().changeFontSize;
  }
  const changeColor = () => {

  }
  
  // value redux의 초기값
  return (
    
    <div>
      {/* {value} */}
      <div>
        <input type="text" placeholder='소원을 말해보세요'/>
        <button onClick={changeFont}>100px 크기로 변경</button>
      </div>
      <div>
        <input type="text" placeholder='컬러를 입력하세요' />
        <button onClick={changeColor}>컬러를 변경</button>
      </div>
    </div>
  );
};

export default FontChanger;

// ---

// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import useInput from '../../../hooks/useInput';
// import { changeColor, changeFontSize } from '../../../modules/font';

// const FontChanger = () => {
//   const [wish, setWish, onChangeWish] = useInput("");
//   const [color, setColor, onChangeColor] = useInput("");
//   const style = useSelector((state) => state.font)
//   const dispatch = useDispatch()

//   // value redux의 초기값
//   return (
//     <div>
//       <p style={style}>{wish}</p>
//       <div>
//         <input type="text" placeholder='소원을 말해보세요' onChange={onChangeWish}/>
//         <button onClick={() => { dispatch(changeFontSize()) }}>100px 크기로 변경</button>
//       </div>
//       <div>
//         <input type="text" placeholder='컬러를 입력하세요' onChange={onChangeColor} />
//         <button onClick={() => { dispatch(changeColor(color)) }}>컬러를 변경</button>
//       </div>
//     </div>
//   );
// };

// export default FontChanger;