import { RepaymentProvider } from "../context/RepaymentProvider";
import { Formulario } from "./Form";
import { Results } from "./Results";

export const PageView = () => {
  return (
    <RepaymentProvider>
      <main>
        <Formulario />
        <Results />
      </main>
    </RepaymentProvider>
  );
};
