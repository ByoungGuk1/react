import { handleActions } from "redux-actions";

// state
const initialState = {
  jobs : {
    developer : {
      skills : ["React.js", "JavaScript"],
    },
    planner : {
      skills : ["Excel", "Figma"],
    },
  }
}

// font
const jobs = handleActions({
  
}, initialState)

export default jobs;