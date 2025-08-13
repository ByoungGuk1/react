import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <p>에러</p>
      <Link to={"/"}>메인으로</Link>
    </div>
  );
};

export default NotFound;