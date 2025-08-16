import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header>
        <Link to={"/"}>메인</Link> |
        <Link to={"/posts"}>게시판</Link> |
        <Link to={"/intro?jobs=developer"}>개발자 소개</Link> |
        <Link to={"/intro?jobs=planner"}>기획자 소개</Link> |
        <Link to={"/hobby"}>취미</Link> |
        <Link to={"/community"}>커뮤니티</Link> |
        <Link to={"/sign-up"}>회원가입</Link>
      </header>
      <br />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;