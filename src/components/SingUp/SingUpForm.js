import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Button from 'components/Button/Button';
import Input from 'components/Input/Input';

import styles from './SingUpForm.module.css';

const SingUpForm = () => {
  return (
    <div className={styles['sing-up-form']}>
      <Formik
        initialValues={{
          name: '',
          lastname: '',
          username: '',
          password: '',
          dateBirth: '',
          email: '',
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={Yup.object({
          name: Yup.string().required('requerido *'),
          lastname: Yup.string().required('requerido *'),
          username: Yup.string().required('requerido *'),
          password: Yup.string()
            .required('requerido *')
            .min(6, 'longitud minima de 6 caracteres'),
          dateBirth: Yup.date().required('requerido *'),
          email: Yup.string().required('requerido *'),
        })}
      >
        <Form>
          <div className={styles['name-surname-container']}>
            <Input name="name" label="Nombre" placeholder="Nombre" />
            <Input name="lastname" label="Apellido" placeholder="Apellido" />
          </div>
          <Input
            name="username"
            label="Nombre de usuario"
            placeholder="Nombre de usuario"
          />
          <Input name="dateBirth" label="Fecha de nacimiento" type="date" />
          <Input name="email" label="Email" type="email" placeholder="Email" />
          <Input
            name="password"
            label="Contraseña"
            type="password"
            placeholder="Contraseña"
          />
          <p className={styles['p']}>
            ¿ Ya tienes una cuenta ?{' '}
            <Link to="/iniciar-sesion">
              <span>Iniciar sesión</span>
            </Link>
          </p>
          <div className={styles['container-button']}>
            <Button className={'button-primary'} type="submit">
              Continuar
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SingUpForm;
