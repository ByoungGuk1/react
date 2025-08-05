// export const Jsx02 = () =>{ }
// export {Jsx02}

// return() 안에서는 html 이기 때문에 연산이 안됨
// 연산을 하기 위해서는 반드시 {} 중괄호로 묶어서 사용

const Jsx02 = () =>{
  const name = "NAME";
  return(
    <>
    <p>저의 이름은 {name}입니다.</p>
    </>
  )
}
export default Jsx02;