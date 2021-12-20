import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { trackPromise, usePromiseTracker } from 'react-promise-tracker';
import BeatLoader from 'react-spinners/BeatLoader';

import FormikWrapper from 'components/Form';
import FieldController from 'components/Form/FieldController';
import SessionController from 'networking/controllers/SessionController';
import HaveAccount from 'components/Form/HaveAccount/HaveAccount';
import validationSchema from './validationSchema';
import { initialValues } from './initialValues';

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
    console.log({ values });
  };

  return (
    <div className={styles['sing-in-form']}>
      <FormikWrapper
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <FieldController
          typeField="input"
          name="username"
          label="Nombre de usuario"
          placeholder="Nombre de usuario"
          typeInput="text"
        />
        <FieldController
          typeField="input"
          name="password"
          label="Contraseña"
          placeholder="Contraseña"
          typeInput="password"
        />
        <HaveAccount haveAccount={false}/>
        <div className={styles['button-container']}>
          <FieldController typeField="button">
            {promiseInProgress ? (
              <BeatLoader color="#fbeaeb" size="4px" />
            ) : (
              'iniciar sesión'
            )}{' '}
          </FieldController>
        </div>
        {error && (
          <p className={styles['error']}>no coinciden las credenciales</p>
        )}
      </FormikWrapper>
    </div>
  );
};

export default SingInForm;
