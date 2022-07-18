import { createContext, useContext } from "react";

const AppContext = createContext();

export const useApp = () => {
  return useContext(AppContext);
};

export default AppContext;
