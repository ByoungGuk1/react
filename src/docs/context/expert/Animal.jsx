// Animal.jsx

import { useContext } from "react";
import { AnimalsContext, AnimalsProvider } from "./AnimalsContext";

const Animal = () => {
  const {state, actions} = useContext(AnimalsContext);
  const {remove} = actions;
  const animal = state;

  const removeButton = (e) => {
    remove(e.target.innerText);
  }

  return (
    <div>
      <AnimalsProvider>
        <button onClick={removeButton}>
          야옹이
        </button>
      </AnimalsProvider>
    </div>
  );
};

export default Animal;