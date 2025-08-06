import React from 'react';

const Food = ({food}) => {
  const {key, name} = food;
  console.log(food);
  return (
    <li>
      {name}
    </li>
  );
};

export default Food;