// 공통적인 CSS를 변수에 담아 사용할 수 있도록 제공하는 파일(스타일의 집합).

import { css } from "styled-components"

const makeCenter = css`
  display : flex;
  align-items : center;
  justify-content : center;
`;

export default makeCenter;