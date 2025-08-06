import React from 'react';
import Food from './Food';

const FoodContainer = () => {
  const foods =[
    {
      id : 1,
      name : "마라탕",
    },
    {
      id : 2,
      name : "육개장",
    },
    {
      id : 3,
      name : "라면",
    },
    {
      id : 4,
      name : "뚝불",
    },
  ]

  const foodList = foods.map((food,index) => {
    return <Food key = {index} food = {food}/>;
  })

  return (
    <div>
      <ol>
        {foodList}
      </ol>
    </div>
  );
};

export default FoodContainer;