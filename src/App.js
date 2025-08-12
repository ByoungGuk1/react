// import React from 'react';
import "./App.css";
// import Styled08 from "./docs/styled/Styled08";
import GlobalStyle from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import Styled10 from "./docs/styled/Styled10";

function App() {
  return (
    <>
      {/* <React.Fragment> */}
      <ThemeProvider theme={theme}>
        {/* 부모의 속성이 자식에게 상속되는 성질 이용 -> 부모에 theme 을 줌으로써 래핑 -> 하위 태그에 상속됨.*/}
        <GlobalStyle />
        {/* ㄴ>모든 글로벌 컴포넌트 적용 */}
        <Styled10/>
        {/* <Styled08/> */}
      </ThemeProvider>
      {/* </React.Fragment> */}
    </>
  );
}

export default App;
