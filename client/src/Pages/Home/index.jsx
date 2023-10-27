import  { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import jwt_decode from "jwt-decode";
import image from "../../assets/3426526-removebg-preview.png"
import  Anyware  from "../../API/config";
import  {fetchUser}  from "../../store/Slices/userSlice";

function Main() {
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values) => {
    setLoading(true); 
    try {
      const { data } = await Anyware.post("signIn", values);
      console.log(data);
      localStorage.setItem("token", data.token);
      const decodedToken = jwt_decode(data.token);
      if (decodedToken ) {
        console.log(decodedToken);
        dispatch(fetchUser(decodedToken.userId));
        setLoginError(false);
        navigate("/dashboard");
      } else {
        setLoginError(true);
      console.log(values);
      }
    } catch (error) {
      setLoginError(true);
    } finally {
      setLoading(false); 
    }
  };
  return (
    <>
      <div className="-m-3 sm:-mx-8 p-3 sm:px-8 relative h-screen overflow-hidden bg-[#3b8395] xl:bg-white dark:bg-darkmode-800 xl:dark:bg-darkmode-600 before:hidden before:xl:block before:content-[''] before:w-[57%] before:-mt-[28%] before:-mb-[16%] before:-ml-[13%] before:absolute before:inset-y-0 before:left-0 before:transform before:rotate-[-4.5deg] before:bg-primary/20 before:rounded-[100%] before:dark:bg-darkmode-400 after:hidden after:xl:block after:content-[''] after:w-[57%] after:-mt-[20%] after:-mb-[13%] after:-ml-[13%] after:absolute after:inset-y-0 after:left-0 after:transform after:rotate-[-4.5deg] after:bg-[#3b8395] after:rounded-[100%] after:dark:bg-darkmode-700">
        <div className=" relative z-10 sm:px-10 ">
          <div className="block grid-cols-2 gap-4 xl:grid">
            {/* BEGIN: Login Info */}
            <div className="flex-col hidden min-h-screen xl:flex overflow-hidden">
              <div className="my-auto">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  className="w-1/2 -mt-16 -intro-x rounded-xl"
                  src={image}
                />
                <div className="mt-10 text-4xl font-medium leading-tight text-white -intro-x">
                Welcome to Anyware Task 
                </div>
                <div className="mt-5 text-lg text-white -intro-x text-opacity-70 dark:text-slate-400">
                  This Task made by Eslam gouda Emam
                </div>
              </div>
            </div>
            {/* END: Login Info */}
            {/* BEGIN: Login Form */}
            <div className="flex h-screen py-5 my-10 xl:h-auto xl:py-0 xl:my-0 overflow-hidden">
              <div className="w-full px-5 py-8 mx-auto my-auto bg-white rounded-md shadow-md xl:ml-20 dark:bg-darkmode-600 xl:bg-transparent sm:px-8 xl:p-0 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto">
                <h2 className="text-2xl font-bold text-center intro-x xl:text-3xl xl:text-left">
                  Sign In
                </h2>

                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  <Form>
                    <div className="mt-8 intro-x">
                      <div className="mt-8 intro-x">
                        <Field
                          type="text"
                          name="email"
                          className="block px-4 py-3 intro-x min-w-full xl:min-w-[350px] border rounded-lg border-[#3b8395]"
                          placeholder="Email"
                          onClick={() => {
                            setLoginError(false);
                          }}
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-red-500 mt-2 text-sm"
                        />
                        <Field
                          type="password"
                          onClick={() => {
                            setLoginError(false);
                          }}
                          name="password"
                          className="block px-4 py-3 mt-4 intro-x min-w-full xl:min-w-[350px] border border-[#3b8395] rounded-lg"
                          placeholder="Password"
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="text-red-500 mt-2 text-sm"
                        />
                      </div>
                    </div>
                    {loginError ? (
                      <div className="text-red-500 my-5  text-sm flex justify-center items-center">
                        <span className="text-red-500  text-sm  mx-2"></span>{" "}
                        Email or Password is invalid
                      </div>
                    ) : (
                      ""
                    )}
                    <div className="flex justify-end mt-4 text-xs intro-x text-slate-600 dark:text-slate-500 sm:text-sm">
                      <Link to={"/"}>Forgot Password?</Link>
                    </div>

                    <div className="mt-5 text-center intro-x xl:mt-8 xl:text-left">
                      <button
                        type="submit"
                        className="w-full px-4 py-3 align-top xl:w-35 xl:mr-3 bg-[#3b8395] rounded-xl text-white"
                        disabled={loading} // Disable the button when loading is true
                      >
                        {loading ? (
                          <div className="flex items-center justify-center">
                            <div className="w-5 h-5 border-t-2 border-r-2 border-b-2 border-white rounded-full animate-spin" />
                            <span className="ml-2">Signing In...</span>
                          </div>
                        ) : (
                          "Sign in"
                        )}
                      </button>
                    </div>
                  </Form>
                </Formik>
              </div>
            </div>
            {/* END: Login Form */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
