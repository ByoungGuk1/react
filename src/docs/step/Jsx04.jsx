import React from 'react';

// jsx는 if문 대신 삼항연산자 사용
// 조건식 ? 참일 때 랜더링할 jsx문법 : 거짓일 때 랜더링할 jsx문법
// 컴포넌트 또는 돔의 리턴.
// 조건식 && 참일 때 랜더링 할 JSX, 거짓이면 아무것도 하지 않음
// && 연산자는 앞의 조건식이 false라면 뒤를 실행하지 않으며, false라는 값은 랜더링 되지 않는다.

const Jsx04 = () => {
  const name = undefined ?? "초기";  
  const login = true;
  const guest = false;
  return (
    <div>
      {
        login && guest && (
          <p>비회원입니다.</p>
        )
      }
      {
        login?(
        <p>{name}님 환영합니다</p>
        ):(
        <p>로그인 실패</p>)
      }
    </div>
  );
};

export default Jsx04;