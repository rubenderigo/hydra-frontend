import * as Yup from 'yup';

const REQUIRED_MESSAGE = 'requerido *';

export default Yup.object({
  username: Yup.string().required(REQUIRED_MESSAGE),
  password: Yup.string().required(REQUIRED_MESSAGE),
});
