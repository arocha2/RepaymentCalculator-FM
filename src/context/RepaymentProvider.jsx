import { useState } from "react";
import { RepaymentContext } from "./RepaymentContext";

export const RepaymentProvider = ({ children }) => {
  const [view, setView] = useState(true);
  return (
    <RepaymentContext.Provider value={{ view, setView }}>
      {children}
    </RepaymentContext.Provider>
  );
};
