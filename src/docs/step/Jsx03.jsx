// 이름과 나이, 만나이 메세지를 만들고
// 화면에 랜더링 시키기

const user1 = {
  name : "송병국",
  age : 27,
  korAge : this.age - 1,
}

const Jsx03 = () => {
  const {name, age, korAge} = user1;
  const ments = `이름은 ${name} 나이는 ${age}세, 만나이는 ${korAge}세 입니다.`;
  return(
    <>
      <p>{ments}</p>
    </>
  )
}

export default Jsx03;