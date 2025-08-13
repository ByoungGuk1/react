import { useState } from "react"

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
    
  const ChangeFontSize = (e) => setValue(e.target.value);

  return [value, ChangeFontSize];
}

export default useInput;