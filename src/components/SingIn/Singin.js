import OnboardingLayout from 'layouts/OnboardingLayout';
import SingInForm from './SingInForm';

import styles from './SingIn.module.css';

const SingIn = () => {
  return (
    <OnboardingLayout background="sing-in">
      <div className={styles['sign-in-container']}>
        <p>¡Bienvenido/a de nuevo!</p>
        <h2>Inicia sesión</h2>
        <SingInForm />
      </div>
    </OnboardingLayout>
  );
};

export default SingIn;
