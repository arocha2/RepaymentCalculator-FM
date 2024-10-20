import { RepaymentProvider } from "../context/RepaymentProvider";
import { Formulario } from "./Form";
import { Results } from "./Results";

export const PageView = () => {
  return (
    <RepaymentProvider>
      <main className="flex flex-col md:flex-row max-w-4xl md:rounded-3xl md:overflow-hidden md:bg-white ">
        <Formulario />
        <Results />
      </main>
    </RepaymentProvider>
  );
};
