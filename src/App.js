// import React from 'react';
import "./App.css";
// import Styled08 from "./docs/styled/Styled08";
import GlobalStyle from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
// import {Route, Routes} from 'react-router-dom'
// import MainContainer from "./pages/main/MainContainer";
// import IntroContainer from "./pages/intro/IntroContainer";
// import HobbyContainer from "./pages/hobby/HobbyContainer";

function App() {
  return (
    <>
      {/* <React.Fragment> */}
      <ThemeProvider theme={theme}>
        {/* 부모의 속성이 자식에게 상속되는 성질 이용 -> 부모에 theme 을 줌으로써 래핑 -> 하위 태그에 상속됨.*/}
        <GlobalStyle />
        {/* ㄴ>모든 글로벌 컴포넌트 적용 */}
        {/* <Styled08/> */}

        {/* router로 추가하기 */}
        {/* <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/intro" element={<IntroContainer />} />
          <Route path="/hobby" element={<HobbyContainer />} />
        </Routes> */}
        {/* ㄴ> 권장하지 않음 / 파일 분할 */}
      
        <RouterProvider router={router}/>

      </ThemeProvider>
      {/* </React.Fragment> */}
    </>
  );
}

export default App;
