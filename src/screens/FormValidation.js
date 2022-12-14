import * as Yup from "yup";

export const signupEmail = Yup.object({
  email: Yup.string().email().required("Email is required."),
});
// this validation is same for both signIn as well as fro SignUp form.
export const signInForm = Yup.object({
  username: Yup.string()
    .min(7, "Mininum 7 characters")
    .required("Please enter a valid email address or phone number."),
  password: Yup.string()
    .min(7, "Mininum 7 characters")
    .required("Your password must contain between 4 and 60 characters."),
});
