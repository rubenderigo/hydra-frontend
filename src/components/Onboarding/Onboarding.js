import { Link } from 'react-router-dom';

import logo from 'assets/logo.png';
import onboarding from 'assets/onboarding.png';
import OnboardingLayout from 'layouts/OnboardingLayout';

import styles from './Onboarding.module.css';

const Onboarding = () => {
  return (
    <OnboardingLayout background={onboarding} atlBackground="onboarding">
      <div className={styles['onboarding-container']}>
        <img alt="logo" src={logo} className={styles['logo']} />
        <h1>Hydra</h1>
        <p>Dar tu opinión nunca fue tan fácil</p>
        <div className={styles['link']}>
          <Link to="/registro" className={styles['sing_up_link']}>
            comenzar ahora
          </Link>
          <Link to="/iniciar-sesion" className={styles['sing_in_link']}>
            iniciar sesión
          </Link>
        </div>
      </div>
    </OnboardingLayout>
  );
};

export default Onboarding;
