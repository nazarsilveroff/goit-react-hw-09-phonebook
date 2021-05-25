import * as Yup from "yup";
export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email must be @email!")
    .required("Field is Required!"),
  password: Yup.string()
    .required("Field is Required")
    .min(6, "min-6 simbols")
    .max(12, "max-12 simbols"),
});

export const textSchema = Yup.object().shape({
  name: Yup.string().required(),
  number: Yup.string().required(),
});
