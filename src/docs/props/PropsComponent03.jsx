import React from 'react';

const PropsComponent03 = (props) => {
  const {func, name} = props;
  return (
    <div>
      {func(name)}
      <p>콘솔창에 출력될 이름은 {name}입니다.</p>
    </div>
  );
};

export default PropsComponent03;