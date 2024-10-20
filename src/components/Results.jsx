import { useContext } from "react";
import imgResult from "../assets/images/illustration-empty.svg";
import { RepaymentContext } from "../context/RepaymentContext";

export const Results = () => {
  const { view } = useContext(RepaymentContext);

  return (
    <div className="w-full bg-text-normal">
      {view ? (
        <section className="flex flex-col justify-center items-center p-6">
          <img src={imgResult} alt="empy-img" />
          <p className="text-white text-2xl my-4">Results shown here</p>
          <p className="text-gray-400  text-center">{`Complete the form and click "calculate repayments" to see what your monthly repayments would be`}</p>
        </section>
      ) : (
        <div className="p-6">
          <p className="text-white text-xl font-semibold my-4">Your results</p>
          <p className="text-gray-400 text-md mb-4">{`Yours results are show below based on the information you provided. To adjust the results. edit the form and click "calculate repayments" again`}</p>
          <div className="bg-gray-900 p-4  rounded-lg border-t-4 border-bg-button">
            <div className="border-b-[1px] border-text-form mb-4">
              <p className="text-text-form">Your monthly repayments</p>
              <p className="text-bg-button text-4xl pt-2 pb-4">£1,797.74</p>
            </div>

            <div>
              <p className="text-text-form">
                Total you will repay over the term
              </p>
              <p className="text-white text-xl font-bold">£539,322.94</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
