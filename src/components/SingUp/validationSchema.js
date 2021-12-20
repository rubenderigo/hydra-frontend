import * as Yup from 'yup';

const MIN_PASSWORD_LENGTH = 6;

const REQUIRED_MESSAGE = 'requerido *';
const PASSWORD_TOO_SHOWRT = `La contraseña debe tener al menos ${MIN_PASSWORD_LENGTH} caracteres`;

export default Yup.object({
  name: Yup.string().required(REQUIRED_MESSAGE),
  lastname: Yup.string().required(REQUIRED_MESSAGE),
  username: Yup.string().required(REQUIRED_MESSAGE),
  password: Yup.string().required(REQUIRED_MESSAGE).min(6, PASSWORD_TOO_SHOWRT),
  dateBirth: Yup.date().required(REQUIRED_MESSAGE),
  email: Yup.string().required(REQUIRED_MESSAGE),
});
