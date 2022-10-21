import * as Yup from "yup";

export const signup = Yup.object({
  email: Yup.string().email().required("Email is required."),
});








