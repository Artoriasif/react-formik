import * as Yup from "yup";
export default Yup.object().shape({
  Cep: Yup.number().min(2).required(),
});
