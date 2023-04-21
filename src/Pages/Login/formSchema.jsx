import * as Yup from "yup";

const loginSchema = Yup.object({
  password: Yup.string().min(6).required("Please enter your Password"),
  email: Yup.string().email().required("Please enter your Email"),
  rememberMe: Yup.bool(),
});

export default loginSchema;
