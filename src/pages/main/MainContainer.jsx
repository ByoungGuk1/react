import { Link } from "react-router-dom";

const MainContainer = () => {
  return (
    <div>
      메인페이지
      <br />
      <br />
      <br />

      {/* <a href="/intro">소개 페이지 이동</a> */}
      {/* ㄴ> SSR 방식으로 권장하지 않음 */}

      {/* CSR 방식으로 사용ㄱ */}
      <Link to={"/intro"}>소개 페이지 이동</Link>
      <br />
      <br />
      <br />
      <Link to={"/hobby"}>취미 페이지 이동</Link>
    </div>
  );
};

export default MainContainer;