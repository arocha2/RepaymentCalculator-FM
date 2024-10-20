import { useContext } from "react";
import imgResult from "../assets/images/illustration-empty.svg";
import { RepaymentContext } from "../context/RepaymentContext";

export const Results = () => {
  const { view, cuota, totalPayment } = useContext(RepaymentContext);

  return (
    <div className="w-full bg-text-normal md:w-1/2 md:rounded-bl-[100px] md:flex md:flex-col md:justify-center md:items-center">
      {view ? (
        <section className="flex flex-col justify-center items-center p-6">
          <img src={imgResult} alt="empy-img" />
          <p className="text-white text-2xl my-4">Results shown here</p>
          <p className="text-gray-400  text-center">{`Complete the form and click "calculate repayments" to see what your monthly repayments would be`}</p>
        </section>
      ) : (
        <section className="p-6">
          <p className="text-white text-xl font-semibold my-4">Your results</p>
          <p className="text-gray-400 text-md mb-4">{`Yours results are show below based on the information you provided. To adjust the results. edit the form and click "calculate repayments" again`}</p>
          <div className="bg-gray-900 p-4  rounded-lg border-t-4 border-bg-button">
            <div className="border-b-[1px] border-text-form mb-4">
              <p className="text-text-form">Your monthly repayments</p>
              <p className="text-bg-button text-4xl pt-2 pb-4">£{cuota}</p>
            </div>

            <div>
              <p className="text-text-form">
                Total you will repay over the term
              </p>
              <p className="text-white text-xl font-bold">£{totalPayment}</p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
