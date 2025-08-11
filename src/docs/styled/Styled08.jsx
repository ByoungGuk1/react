import S from "./style";

const Styled08 = () => {
  return (
    <div>
      <S.ThemeButton>버튼 컬러 변경-</S.ThemeButton>
      <br/>
      {/* input - 글자의 컬러를 theme : secondary컬러로 적용 */}

      <S.ThemeInput/>
    </div>
  );
};

export default Styled08;