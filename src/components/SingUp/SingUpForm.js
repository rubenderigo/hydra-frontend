import BeatLoader from 'react-spinners/BeatLoader';

import FormikWrapper from 'components/Form';
import FieldController from 'components/Form/FieldController';
import HaveAccount from 'components/Form/HaveAccount/HaveAccount';
import validationSchema from './validationSchema';
import { initialValues } from './initialValues';
import { useSingUp } from 'hooks/auth';

import styles from './SingUpForm.module.css';

const SingUpForm = () => {
  const { onSubmit, promiseInProgress } =  useSingUp();

  return (
    <div className={styles['sing-up-form']}>
      <FormikWrapper
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <div className={styles['name-surname-container']}>
          <FieldController
            typeField="input"
            name="name"
            label="Nombre"
            placeholder="Nombre"
          />
          <FieldController
            typeField="input"
            name="lastname"
            label="Apellido"
            placeholder="Apellido"
          />
        </div>
        <FieldController
          typeField="input"
          name="username"
          label="Nombre de usuario"
          placeholder="Nombre de usuario"
        />
        <FieldController
          typeField="input"
          name="dateBirth"
          label="Fecha de nacimiento"
          type="date"
          typeInput="date"
        />
        <FieldController
          typeField="input"
          name="email"
          label="Email"
          type="email"
          placeholder="Email"
          typeInput="mail"
        />
        <FieldController
          typeField="input"
          name="password"
          label="Contraseña"
          type="password"
          placeholder="Contraseña"
          typeInput="password"
        />
        <HaveAccount haveAccount />
        <div className={styles['container-button']}>
          <FieldController typeField="button">
            {promiseInProgress ? (
              <BeatLoader color="#fbeaeb" size="4px" />
            ) : (
              'continuar'
            )}{' '}
          </FieldController>
        </div>
      </FormikWrapper>
    </div>
  );
};

export default SingUpForm;
