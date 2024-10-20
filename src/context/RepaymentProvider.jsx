import { useState } from "react";
import { RepaymentContext } from "./RepaymentContext";

export const RepaymentProvider = ({ children }) => {
  const [view, setView] = useState(true);
  const [cuota, setCuota] = useState("");
  const [totalPayment, setTotalPayment] = useState("");

  const handlePayment = ({ amount, term, rate, type }) => {
    const months = term * 12;
    let monthlyPayment, subTotalPayment;

    if (type === "repayment") {
      monthlyPayment = amount * rate;
      subTotalPayment = monthlyPayment * months;
    } else {
      // interest-only
      monthlyPayment = amount * rate;
      subTotalPayment = monthlyPayment * months + amount;
    }
    setCuota(new Intl.NumberFormat("es-MX").format(monthlyPayment.toFixed(2)));
    setTotalPayment(new Intl.NumberFormat("es-MX").format(subTotalPayment));
  };

  return (
    <RepaymentContext.Provider
      value={{ view, setView, handlePayment, cuota, totalPayment }}
    >
      {children}
    </RepaymentContext.Provider>
  );
};
