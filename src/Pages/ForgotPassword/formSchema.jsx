import * as Yup from "yup";

export const forgotPasswordSchemaStep1 = Yup.object({
  email: Yup.string().email().required("Please enter your Email"),
});

export const forgotPasswordSchemaStep3 = Yup.object({
  new_password: Yup.string()
    .min(6, "Password must be atleast 6 characters")
    .matches(
      /^(?=.*[a-z])/,
      "Password must contain at least 1 lower case letter"
    )
    .matches(
      /^(?=.*[A-Z])/,
      "Password must contain at least 1 upper case letter"
    )
    .matches(/^(?=.*[0-9])/, "Password must contain at least 1 number")
    .matches(
      /^(?=.*[!@#\$%\^&\*])/,
      "Password must contain at least 1 special case character"
    )
    .required("Please enter a password"),
  confirm_password: Yup.string().oneOf(
    [Yup.ref("new_password"), null],
    "Passwords must match"
  ),
});
