// Div, Button
// div : width, height, background-color
// Button : border, font-size

import styled from "styled-components";
import makeCenter from "../../styles/common";

const S = {};

  S.Div = styled.div`
    width: 150px;
    height: 150px;
    background-color:rgb(60, 15, 60);
  `;

  S.Button = styled.button`
    border: dashed 3px black;
    font-size: 20px;
  `;

  S.P = styled.p`
    color : ${(props) => props.fontColor ?? "black"};
  `;

  S.H1 = styled.h1`
    color : ${(props) => props.color ? props.color : "black"};
    font-family: WantedSansStd;
  `;

  S.Box = styled.div`
    width: 300px;
    height: 300px;
    border: solid 1px black;
    ${makeCenter}
  `;

  S.Ul = styled.ul`
    ${makeCenter}
  `;

  S.Form = styled.form`
    ${makeCenter};
    flex-direction: column;
  `;

  S.Wrap = styled.div`
    ${makeCenter};
    /* 탬플릿 리터럴로 자바 변수 사용 */
    flex-direction: column;
    align-items: start;
  `;

  S.ThemeButton = styled.button`
    background-color: ${(props) => props.theme.PALLETE.primary.main};
    font-size: ${({theme}) => theme.FONT_SIZE["h1"]};
    /* props.theme을 비구조 할당으로 theme으로 바로 사용 */
    line-height: ${({theme}) => theme.FONT_LINE["h1"]};
  `;

  S.ThemeInput = styled.input`
    /* input - 글자의 컬러를 theme : secondary컬러로 적용 */
    color: ${({theme}) => theme.PALLETE["secondary"]};
  `;

  // & : 자기 자신 선택자
  // ex> input 자식 태그
  //  & > input { ... }

export default S;

// ----

// import styled from "styled-components";

// const S = {}

//   S.Box = styled.div`
//     border: solid 1px black;
//   `

//   S.P = styled.p`
//     font-size: 14px;
//   ` 

// export default S;