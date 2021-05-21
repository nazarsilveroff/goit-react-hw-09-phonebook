import React from "react";
import classNames from "classnames";
import { useField } from "formik";
const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label className="block text-xs font-semibold text-gray-600 uppercase">
        {label}
        <input
          className={classNames(
            "block w-full text-base py-1 px-1 mt-1 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200",
            {
              "border-red-500": meta.error && meta.touched,
            }
          )}
          {...field}
          {...props}
        />
      </label>
      {meta.touched && meta.error ? (
        <p className="text-xs italic text-red-500">{meta.error}</p>
      ) : null}
    </>
  );
};

export default TextInput;
