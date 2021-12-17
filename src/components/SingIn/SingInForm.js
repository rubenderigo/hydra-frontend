import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Button from 'components/Button/Button';
import Input from 'components/Input/Input';

import styles from 'components/SingIn/SingInForm.module.css';

const SingInForm = () => {
  return (
    <div className={styles['sing-in-form']}>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={Yup.object({
          username: Yup.string().required('requerido *'),
          password: Yup.string().required('requerido *'),
        })}
      >
        <Form>
          <Input
            name="username"
            label="Nombre de usuario"
            placeholder="Nombre de usuario"
          />
          <Input
            name="password"
            label="Contraseña"
            placeholder="Contraseña"
            type="password"
          />
          <p>
            ¿ No tienes una cuenta ?{' '}
            <Link to="/registro">
              <span>Registate</span>
            </Link>
          </p>
          <div className={styles['container-button']}>
            <Button className={'button-primary'} type="submit">
              Iniciar sesión
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SingInForm;
