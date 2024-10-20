import { useFormik } from "formik";
import * as Yup from "yup";
//icons
import calcIcon from "../assets/images/icon-calculator.svg";
import { useContext } from "react";
import { RepaymentContext } from "../context/RepaymentContext";

//esquema de validacion de datos se le pasa al hook de formik
const validationSchema = Yup.object({
  amount: Yup.number()
    .typeError("amount must be a number")
    .positive("amount must be greater than zero")
    .required("this field is required"),
  term: Yup.number()
    .typeError("term must be a number")
    .required("this field is required"),
  rate: Yup.number()
    .typeError("amount must be a number")
    .positive("amount must be greater than zero")
    .required("this field is required"),
  type: Yup.string().required("select type is required"),
});
// initial value formulario se le pasa al hook de formik
const initialValues = {
  amount: "",
  term: "",
  rate: "",
  type: "",
};
// ------------------------------------------------------------------------>
export const Formulario = () => {
  const { setView, handlePayment } = useContext(RepaymentContext);
  //funcion submit se le pasa al hook de formik
  const onSubmit = () => {
    console.log({ values });
    handlePayment(values);
    setView(false);
    resetForm();
  };
  // funcion para reset form
  const handleResetForm = () => {
    resetForm();
    validateField();
    setView(true);
  };

  // hook de formik para el manejo de formulario
  const {
    touched,
    errors,
    isValid,
    values,
    handleSubmit,
    handleBlur,
    handleChange,
    resetForm,
    getFieldProps,
    validateField,
  } = useFormik({
    validationSchema,
    initialValues,
    validateOnMount: true,
    onSubmit,
  });
  // funcion para obtener el valor del radio buttons
  // const handleType = (e) => (values.type = e.target.value);

  return (
    <section className="p-6 md:w-1/2 bg-white ">
      <div className="mb-8 md:flex md:justify-between">
        <p className="font-semibold text-xl mb-1">Mortgage Calculator</p>
        <button
          onClick={handleResetForm}
          className="text-sm text-text-form underline underline-offset-2"
        >
          Clear All
        </button>
      </div>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="amount" className="text-text-form text-md mb-2 block">
            Mortgage Amount
          </label>
          <div className="border hover:border-text-normal hover:cursor-pointer  border-text-form text-text-form rounded-md flex overflow-hidden">
            <span
              className={`${
                touched.amount && errors.amount
                  ? "bg-red-600 text-white"
                  : "bg-cyan-100"
              }  px-4 py-2  font-semibold`}
            >
              £
            </span>
            <input
              className="w-full px-4 hover:cursor-pointer outline-none "
              type="text"
              name="amount"
              id="amount"
              {...getFieldProps("amount")}
            />
          </div>

          {touched.amount && errors.amount && (
            <div className="text-sm text-red-600 ml-2 absolute">
              {errors.amount}
            </div>
          )}
        </div>
        <div>
          <label htmlFor="term" className="text-text-form text-md mb-2 block">
            Mortgage term
          </label>
          <div className="border hover:border-text-normal hover:cursor-pointer  border-text-form text-text-form rounded-md flex overflow-hidden">
            <input
              className="w-full px-4 hover:cursor-pointer"
              type="text"
              name="term"
              id="term"
              {...getFieldProps("term")}
            />
            <span
              className={`${
                touched.term && errors.term
                  ? "bg-red-600 text-white"
                  : "bg-cyan-100"
              } px-4 py-2  font-semibold`}
            >
              years
            </span>
          </div>
          {touched.term && errors.term && (
            <div className="text-sm text-red-600 ml-2 absolute">
              {errors.term}
            </div>
          )}
        </div>
        <div>
          <label htmlFor="rate" className="text-text-form text-md mb-2 block">
            Interest Rate
          </label>
          <div className="border hover:border-text-normal  border-text-form text-text-form rounded-md flex overflow-hidden">
            <input
              className="w-full px-4 hover:cursor-pointer"
              type="text"
              name="rate"
              id="rate"
              {...getFieldProps("rate")}
            />
            <span
              className={`${
                touched.rate && errors.rate
                  ? "bg-red-600 text-white"
                  : "bg-cyan-100"
              } px-4 py-2  font-semibold`}
            >
              %
            </span>
          </div>
          {touched.rate && errors.rate && (
            <div className="text-sm text-red-600 ml-2 absolute">
              {errors.rate}
            </div>
          )}
        </div>
        {/* radio buttons */}
        <div>
          <label htmlFor="type" className="text-text-form text-md mb-2 block">
            Mortgage Type
          </label>
          <div className=" flex items-center ps-4 border border-text-form rounded-md text-text-normal mb-2 ">
            <input
              type="radio"
              id="one"
              name="type"
              value="repayment"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label
              htmlFor="one"
              className="w-full ms-2 py-2 text-lg font-bold cursor-pointer"
            >
              Repayment
            </label>
          </div>
          <div className="flex items-center ps-4 border border-text-form rounded-md text-text-normal ">
            <input
              type="radio"
              id="two"
              name="type"
              value="interest"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label
              htmlFor="two"
              className="w-full ms-2 py-2 text-lg font-bold hover:cursor-pointer "
            >
              Interest Only
            </label>
          </div>
          {touched.type && errors.type && (
            <div className="text-sm text-red-600 ml-2 absolute">
              {errors.type}
            </div>
          )}
        </div>
        <button
          disabled={!isValid}
          type="submit"
          className=" disabled:bg-gray-400 disabled:cursor-not-allowed bg-bg-button font-bold text-lg py-3 rounded-full flex items-center justify-center gap-4"
        >
          <span>
            <img src={calcIcon} alt="icon" />
          </span>
          Calculate Repayments
        </button>
      </form>
    </section>
  );
};
