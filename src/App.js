import "./App.css";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import schema from "./schema.js";

//baixar a dependencia do formik e yup

function App() {
  function onSubmitMaluco(values, actions) {
    console.log("Submit", values);
  }

  return (
    <div className="App">
      <Formik
        validationSchema={schema}
        onSubmit={onSubmitMaluco}
        initialValues={{
          name: "",
          email: "",
        }}
        render={({ values, errors, touched, isvalid }) => (
          <Form>
            <div>
              <label>Nome</label>
              <Field name="name" type="text" />
              <ErrorMessage name="name" />
            </div>
            <div>
              <label>Email</label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" />
            </div>
            <button type="submit" disabled={!isvalid}>
              Enviar maluco
            </button>
          </Form>
        )}
      />
    </div>
  );
}

export default App;
