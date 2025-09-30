import { useState } from "react";

const useToggle = (initial: boolean): [boolean, () => void] => {
  const [state, setState] = useState(initial);

  const toggle = () => setState((prev) => !prev);

  return [state, toggle];
};

export default useToggle;
