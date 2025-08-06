import React, { useState } from 'react';

// 1. likeList를 화면에 출력한다.
// 2. 버튼을 누르면 해당 like를 삭제한다.
// 3. input 태그를 하나 생성 후 좋아하는 목록을 적고 엔터를 치면, 
// 리스트에 추가된다.

const LikesContainer = () => {
  const [likeList, setLikeList] = useState([
    {
      name : "운동",
    },
    {
      name : "게임",
    },
    {
      name : "음악",
    },
    {
      name : "코딩",
    },
  ])

  const keyUp = (e) => {
    if(e.target.value !== "" && e.key === "Enter"){
      // setLikeList([...likeList, {name : e.target.value}])
      setLikeList(likeList.concat({name : e.target.value}))
      e.target.value = "";
    }
  }

  const buttonClick = (index) => {
    console.log(index);
    console.log(likeList);
    setLikeList(likeList.filter((like,i) => i !== index));
  }

  const makeButton = likeList.map((data, index) => {
    // console.log(data.name);
    return <button key = {index} onClick={(e)=>{
     buttonClick(index);
    }}>{data.name}</button>
  })

  return (
    <div>
      {makeButton}
      <div>
        <input type="text" onKeyUp={keyUp} placeholder='추가할 이름'/>
      </div>
    </div>
  );
};

export default LikesContainer;