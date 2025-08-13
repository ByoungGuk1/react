import React from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

const IntroContainer = () => {
  const {jobs} = useSelector((state) => state?.jobs);

  // url?key=value : 쿼리스트링 형식
  // 쿼리스트링을 가져오기 위한 훅 함수
  const [searchParams, setSerchParams] = useSearchParams();
  const job = searchParams.get("jobs");

  const user = jobs[job];
  const {name, skills} = user;
  const skillList = skills.map((data, index) => <li key={index}>{data}</li>);

  return (
    <div>
      <h1>인트로 페이지</h1>
      <br/>
      <p>이름 : {name}</p>
      <p>직업 : {job}</p>
      <ul>
        {skillList}
      </ul>
    </div>
  );
};

export default IntroContainer;