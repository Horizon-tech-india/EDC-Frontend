import * as Yup from "yup";

export const signupSchemaStep1 = Yup.object({
  first_name: Yup.string().required("Please enter your Full Name"),
  last_name: Yup.string().required("Please enter your Full Name"),
  email: Yup.string().email().required("Please enter your Email"),
  phone_number: Yup.number().required("Please enter a valid phone number"),
  password: Yup.string().min(6).required("Please enter your Password"),
});

export const signupSchemaStep2 = Yup.object({
  startup_name: Yup.string().required("Please enter your Startup Name"),
  applying_to: Yup.string(),
  profession: Yup.string(),
  website_link: Yup.string(),
});
