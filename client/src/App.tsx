import { TextInput } from "./components/TextInput/TextInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import shop from "./assets/image/istockphoto-1170920072-612x612.jpg";
import "./App.css";
import axios from "axios";

const message = () => {
  return (
    <>
      <ul className="error-info-box">
        <li>
          <small>Please make sure your password includes:</small>
        </li>
        <li>
          <small>- Minimum 8 characters</small>
        </li>
        <li>
          <small>- Maximum 16 characters</small>
        </li>
        <li>
          <small>- 1 upper-case letter</small>
        </li>
        <li>
          <small>- 1 lowercase letter</small>
        </li>
        <li>
          <small>- 1 number</small>
        </li>
        <li>
          <small>- Special character (eg !?+-)</small>
        </li>
      </ul>
    </>
  );
};

const validationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(3, "Length must be 3 characters long")
    .max(250, "Length must be less than or equal to 250 characters")
    .matches(/^[a-zA-Z ._-]*$/, "Some special characters are not allowed")
    .required("Required field"),
  lastName: Yup.string()
    .trim()
    .min(1, "Length must be 1 character long")
    .max(250, "Length must be less than or equal to 250 characters")
    .matches(/^[a-zA-Z ._-]*$/, "Some special characters are not allowed")
    .required("Required field"),
  mobileNumber: Yup.string()
    .matches(/^\d{10}$/, "Enter a valid mobile number")
    .required("Required field")
    .trim(),
  password: Yup.string()
    .trim()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?+!@$%^&?*-])\S{7,15}.$/,
      message
    )
    .required("Required field"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Required field"),
});

function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      lastName: "",
      password: "",
      mobileNumber: "",
    },
    validationSchema,
    async onSubmit(values, { resetForm }) {
      try {
        const response = await axios.post(
          "https://localhost:8080/signup/create/signup",
          values
        );
        console.log("Response:", response);
      } catch (error) {
        console.error("Error:", error);
      }

      resetForm();
    },
  });
  return (
    <div className=" h-screen flex items-center bg-container">
      <div className=" flex  w-3/4 m-auto p-5">
        <div className="w-1/2">
          <img
            className="h-full w-full object-cover rounded-l-2xl"
            src={shop}
            alt="coffee shop"
          />
        </div>
        <div className="w-1/2 bg-secondary p-5 rounded-r-2xl">
          <h1 className="text-center font-extrabold text-3xl italic text-primary">
            Welcome to cafe
          </h1>
          <p className="text-center font-semibold text-xl my-2 text-primary">
            Sign up
          </p>
          <form
            className="space-y-6 mt-5 flex flex-col"
            onSubmit={formik.handleSubmit}
          >
            <TextInput
              type="text"
              label="First Name"
              name="name"
              placeholder="Enter your first name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              values={formik.values.name}
              errors={
                formik.touched.name && formik.errors.name
                  ? formik.errors.name
                  : null
              }
            />
            <TextInput
              type="text"
              label="Last Name"
              name="lastName"
              placeholder="Enter your last name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              values={formik.values.lastName}
              errors={
                formik.touched.lastName && formik.errors.lastName
                  ? formik.errors.lastName
                  : null
              }
            />
            <TextInput
              type="text"
              label="Mobile number"
              name="mobileNumber"
              placeholder="Enter your number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              values={formik.values.mobileNumber}
              errors={
                formik.touched.mobileNumber && formik.errors.mobileNumber
                  ? formik.errors.mobileNumber
                  : null
              }
            />
            <TextInput
              type="email"
              label="Email"
              name="email"
              placeholder="Enter your email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              values={formik.values.email}
              errors={
                formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : null
              }
            />
            <TextInput
              type="password"
              label="Password"
              name="password"
              placeholder="Enter your password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              values={formik.values.password}
              errors={
                formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : null
              }
            />
            <button
              type="button"
              className="w-1/3 mx-auto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-primary/80 duration-200 text-center bg-primary px-10 py-5 text-secondary rounded-full"
              onClick={() => {
                formik.submitForm();
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
