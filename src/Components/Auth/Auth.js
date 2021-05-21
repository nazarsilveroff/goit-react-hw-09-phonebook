import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
  loginOperations,
  registerOperations,
} from "../../redux/auth/authOperations";
import { Formik, Form } from "formik";
import { validationSchema } from "./Validation/Validation";
import TextInput from "./TextInput/TextInput";
class Auth extends Component {
  render() {
    return (
      <div className="flex flex-col h-screen bg-gray-100">
        <div className="grid place-items-center mx-2 my-20 sm:my-auto">
          <div
            className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
            px-6 py-10 sm:px-10 sm:py-6 
            bg-white rounded-lg shadow-md lg:shadow-lg"
          >
            <h1 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
              {this.props.location.pathname === "/registration"
                ? "Registeration"
                : "Login"}
            </h1>
            <Formik
              initialValues={{
                displayName: "",
                email: "",
                password: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                this.props.location.pathname === "/registration"
                  ? this.props.registerOperations(values)
                  : this.props.loginOperations(values);
              }}
            >
              {({ isSubmitting }) => (
                <Form className="mt-10">
                  {this.props.location.pathname === "/registration" ? (
                    <>
                      <TextInput
                        name="displayName"
                        type="displayName"
                        label="Name"
                        component="p"
                      />
                      <TextInput
                        name="email"
                        type="email"
                        label="Email"
                        component="p"
                      />

                      <TextInput
                        name="password"
                        type="password"
                        label="Password"
                        component="p"
                      />
                    </>
                  ) : (
                    <>
                      <TextInput
                        name="email"
                        type="email"
                        label="Email"
                        component="p"
                      />

                      <TextInput
                        name="password"
                        type="password"
                        label="Password"
                        component="p"
                      />
                    </>
                  )}

                  <button
                    className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {this.props.location.pathname === "/registration"
                      ? "register"
                      : "login"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(null, { registerOperations, loginOperations })(
  withRouter(Auth)
);
