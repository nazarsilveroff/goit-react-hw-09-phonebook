import { Formik, Form } from "formik";
import React from "react";
import { toast } from "react-toastify";
import TextInput from "../../Auth/TextInput/TextInput";
import { textSchema } from "../../Auth/Validation/Validation";
import { useForm } from "../../hooks/useForm";
const FormContact = () => {
  const { items, addContact } = useForm();
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={textSchema}
      onSubmit={(values) => {
        if (items.some(({ name }) => name === values.name)) {
          toast.warn(`🦄${values.name}, is already in contacts!`);
        } else {
          addContact(values);
        }
      }}
    >
      <Form className="mt-10">
        <TextInput name="name" type="text" label="Name" component="p" />
        <TextInput name="number" type="number" label="Phone" component="p" />
        <button
          className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none"
          type="submit"
        >
          ADD CONTACT
        </button>
      </Form>
    </Formik>
  );
};

export default FormContact;
