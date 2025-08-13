import { handleActions } from "redux-actions";

// state
const initialState = {
  jobs : {
    developer : {
      name : "동길동",
      skills : ["React.js", "JavaScript"],
    },
    planner : {
      name : "이순신",
      skills : ["Excel", "Figma"],
    },
  }
}

// font
const jobs = handleActions({
  
}, initialState)

export default jobs;