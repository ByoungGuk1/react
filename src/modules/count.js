import { createAction, handleActions } from 'redux-actions'

// 하단의 파일을 하나의 파일로 관리하는 패턴 -> dux패턴 -> 해당 파일이 있는 폴더 = modules

// type
const INCREASE = "count/INCREASE";
const DECREASE = "count/DECREASE";
// 해당 파일이 무엇에 관한 타입인지 같이 선언

// action
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
// 특정 조건 선언

// state
const initialState = {
  number : 0,
}
// ㄴ>스토어에 들어가는 초깃값

// reducer

// 과거 형태 ㄱ
// const reducer = (state, action) => {
//   switch(action.type){
//     case INCREASE:
//       action.setNumber(state.number + 1)
//       break
//     case DECREASE:
//       action.setNumber(state.number - 1)
//       break
//     default:
//   }
// }

// handleActions 분기처리를 해주는 훅 함수 (switch 역할)
const count = handleActions({
  [INCREASE] : (state, action) => ({number: state.number + 1}),
  [DECREASE] : (state, action) => ({number: state.number - 1}),
}, initialState)

export default count;