import * as Yup from "yup";

const loginSchema = Yup.object({
  email: Yup.string().email().required("Please enter your Email"),
  password: Yup.string().min(6).required("Please enter your Password"),
});

export default loginSchema;
