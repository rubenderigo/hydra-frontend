import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { trackPromise, usePromiseTracker } from 'react-promise-tracker';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import SessionController from 'networking/controllers/SessionController';
import BeatLoader from 'react-spinners/BeatLoader';

import styles from 'components/SingIn/SingInForm.module.css';

const SingInForm = () => {
  const history = useHistory();
  const [error, setError] = useState(false);
  const { promiseInProgress } = usePromiseTracker();

  const onSubmit = async (values) => {
    const formData = new FormData();
    formData.append('username', values.username);
    formData.append('password', values.password);

    try {
      await trackPromise(SessionController.signIn(formData));
      setError(false);
      history.push('/inicio');
    } catch (requestError) {
      setError(true);
    }
  };

  return (
    <div className={styles['sing-in-form']}>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        onSubmit={onSubmit}
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
              {promiseInProgress ? (
                <BeatLoader color="#fbeaeb" size="4px" />
              ) : (
                'Iniciar sesión'
              )}{' '}
            </Button>
          </div>
          {error && <p className={styles['error']}>no coinciden las credenciales</p>}
        </Form>
      </Formik>
    </div>
  );
};

export default SingInForm;
