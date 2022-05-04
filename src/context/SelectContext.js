import { createContext, useState } from "react";

const SelectContext = createContext();

export const SelectProvider = ({ children }) => {
  const [activeSelect, setActiveSelect] = useState(null);
  let values = {
    activeSelect,
    setActiveSelect,
  };
  return <SelectContext.Provider value={values}>{children}</SelectContext.Provider>;
};

export default SelectContext;
