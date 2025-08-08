import AddLiTag from "./AddLiTag";

const AddUlTag = ({data}) => {
  const addLiTag =  data.map((food,index)=>{
      // console.log(food);
      return <AddLiTag food = {food} key = {index}/>
    })

  return (
    <ul>
      {addLiTag}
    </ul>
  );
};

export default AddUlTag;