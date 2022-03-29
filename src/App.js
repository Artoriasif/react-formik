import React from "react";
import { Formik, Field, Form } from "formik";
import schema from "./schema";
import "./App.scss";
import logo from "./image/icone.cp.png";

function App() {
  function onBlurCep(e, setFieldValue) {
    const { value } = e.target;

    const cep = value?.replace(/[^0-9]/g, "");

    if (cep?.length !== 8) {
      return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((resp) => resp.json())
      .then((data) => {
        setFieldValue("bairro", data.bairro);
        setFieldValue("logradouro", data.logradouro);
        setFieldValue("uf", data.uf);
        setFieldValue("cidade", data.localidade);
        console.log(data);
      });
  }

  function onSubmit(values, actions) {
    console.log("SUBMIT", values);
  }

  return (
    <div className="App">
      <Formik
        validationSchema={schema}
        onSubmit={onSubmit}
        validateOnMount
        initialValues={{
          cep: "",
        }}
        render={({ isValid, setFieldValue }) => (
          <Form id="form-container">
            <img src={logo} alt="logo" />

            <div id="form-control-group">
              <label htmlFor="cep" className="label-cep">
                <span className="content-cep">CEP</span>
              </label>
              <Field
                name="cep"
                type="text"
                placeholder="ex: 00000-000"
                onBlur={(e) => onBlurCep(e, setFieldValue)}
              />
            </div>

            <span></span>

            <div id="form-control-group">
              <label htmlFor="cidade" className="label-cep">
                <span className="content-cep">Cidade</span>
              </label>
              <Field name="cidade" type="text" />
            </div>

            <div id="form-control-group">
              <label htmlFor="logradouro" className="label-cep">
                <span className="content-cep">Logradouro</span>
              </label>
              <Field name="logradouro" type="text" />
            </div>

            <div id="form-control-group">
              <label htmlFor="bairro" className="label-cep">
                <span className="content-cep">Bairro</span>
              </label>
              <Field name="bairro" type="text" />
            </div>

            <div id="form-control-group">
              <label htmlFor="uf" className="label-cep">
                <span className="content-cep">UF</span>
              </label>
              <Field component="select" name="uf" type="text">
                <option values={null}>Selecione o Estado</option>
                <option value="RO">Rondonia</option>
                <option value="AC">Acre</option>
                <option value="AM">Amazonas</option>
                <option value="RR">Roraima</option>
                <option value="PA">para</option>
                <option value="AP">Amapa</option>
                <option value="TO">Tocantins</option>
                <option value="MA">Maranhao</option>
                <option value="PI">Piaui</option>
                <option value="CE">Ceara</option>
                <option value="RN">Rio grande do norte</option>
                <option value="PB">Paraiba</option>
                <option value="PE">Pernambunco</option>
                <option value="AL">Alagoas</option>
                <option value="ES">Espirito Santo</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="PR">Parana</option>
                <option value="SC">Santa Catarina</option>
                <option value="MS">Rio Grande do Sul</option>
                <option value="MT">Mato Grosso do Sul</option>
                <option value="GO">Goias</option>
                <option value="DF">Distrito Federal</option>
                <option value="SP">Sao paulo</option>
              </Field>
            </div>
          </Form>
        )}
      />
    </div>
  );
}

export default App;
