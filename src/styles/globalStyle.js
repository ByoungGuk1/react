// 전역에 사용되는 스타일을 적용 시키기 위한 파일
// 폰트, 리셋 ...

import { createGlobalStyle } from "styled-components";
// 자동완성 안되면 styled-components 먼저 쳐보기
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  // 이미 익스텐션 설치해서 임포트만 해주면 됨.
  // css reset

/* 
  400 Regular
  500 Medium
  600 SemiBold
  700 Bold
  800 Black
  900 ExtraBold
  950 ExtraBlack 
*/

  @font-face {
    font-family: 'WantedSansStd';
    font-weight: 400;
    src: url(${process.env.PUBLIC_URL}/assets/fonts/WantedSansStd/WantedSans-Regular.woff2);
    // 어디서든 public에 접근할 수 있는 경로
    /* ${process.env.PUBLIC_URL} */

    font-style: normal;
    font-display: swap;
    /* 다운이 안되면 디폴트 사용하다가 다운이 완료되면 스왑 */
  }

    @font-face {
    font-family: 'WantedSansStd';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/wanted/WantedSans-Medium.woff2) format('woff2');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'WantedSansStd';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/wanted/WantedSans-SemiBold.woff2) format('woff2');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'WantedSansStd';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/wanted/WantedSans-Bold.woff2) format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'WantedSansStd';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/wanted/WantedSans-Black.woff2) format('woff2');
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'WantedSansStd';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/wanted/WantedSans-ExtraBold.woff2) format('woff2');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'WantedSansStd';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/wanted/WantedSans-ExtraBlack.woff2) format('woff2');
    font-weight: 950;
    font-style: normal;
    font-display: swap;
  }

  body{
    font-family: WantedSansStd;
    font-weight: 400;

    box-sizing: border-box;
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.05);
    letter-spacing:  -0.2px;
    text-decoration: none;
    color: rgb(0, 0, 0);
    line-height: 1.3;
  }

  button{
    cursor: pointer;
    border: none;
  }
`;

export default GlobalStyle;