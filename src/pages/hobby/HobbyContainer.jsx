import { useParams } from "react-router-dom";

const HobbyContainer = () => {
  
  // url parameter를 가져오는 훅함수
  const {hobbies, name} = useParams();
  
  return (
    <div>
      <p>취미 : {hobbies}</p>
      <p>이름 : {name}</p>
    </div>
  );
};

export default HobbyContainer;