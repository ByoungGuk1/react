const AddLiTag = ({food}) => {
  // console.log(food);
  const checking = (e) => {
    if(e.target.checked === true)
      food.checked = true;
    else if(e.target.checked === false)
      food.checked = false;
    // console.log(food);
  }
  return (
    <li>
        <input type="checkbox" name = "checkbox" onChange={checking} defaultChecked = {food.checked}/>
        {food.korFoodName}({food.enFoodName})
    </li>
  );
};

export default AddLiTag;