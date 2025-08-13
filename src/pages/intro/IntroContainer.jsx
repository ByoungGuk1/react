import React from 'react';
import { useSelector } from 'react-redux';

const IntroContainer = () => {
  const {jobs} = useSelector((state) => state.jobs);
  console.log (jobs);
  return (
    <div>
      인트로 페이지
    </div>
  );
};

export default IntroContainer;