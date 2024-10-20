import { useState } from "react";
import { RepaymentContext } from "./RepaymentContext";

export const RepaymentProvider = ({ children }) => {
  const [view, setView] = useState(true);
  const [cuota, setCuota] = useState("");
  const [totalPayment, setTotalPayment] = useState("");

  const handlePayment = ({ amount, term, rate }) => {
    const result = (amount * term) / ((1 - (1 + term)) ^ -rate);
    const total = amount * (term / 100) + amount;

    setCuota(new Intl.NumberFormat("es-MX").format(result.toFixed(2)));
    setTotalPayment(new Intl.NumberFormat("es-MX").format(total));
  };

  return (
    <RepaymentContext.Provider
      value={{ view, setView, handlePayment, cuota, totalPayment }}
    >
      {children}
    </RepaymentContext.Provider>
  );
};
