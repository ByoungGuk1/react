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

      <div>
      {/* CSR 방식으로 사용ㄱ */}
        <div>
          <Link to={"/intro?jobs=developer"}>개발자 소개 페이지 이동</Link>
          {/* 쿼리스트링 방식 ---?key=value&key=value */}
        </div>
        <div>
          <Link to={"/intro?jobs=planner"}>기획자 소개 페이지 이동</Link>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div>
        <Link to={"/hobby"}>취미 페이지 이동</Link>
        {/* url parameter : url에 parameter를 심어서 전송하는 방법 */}
        {/* /routes/router 참조.js */}
      </div>
      <Link to={"/posts"}>게시판</Link>
      <br />
      <br />
      <br />
      <Link to={"/community"}>커뮤니티</Link>
    </div>
  );
};

export default MainContainer;