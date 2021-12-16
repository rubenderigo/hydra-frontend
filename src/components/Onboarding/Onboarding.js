import { Link } from 'react-router-dom';

import Button from '../Button/Button';
import logo from 'assets/logo.png';
import onboarding from 'assets/onboarding.png';

import styles from './Onboarding.module.css';

const Onboarding = () => {
  return (
    <div className={styles['onboarding-container']}>
      <img
        alt="onboarding"
        src={onboarding}
        className={styles['img-onboarding']}
      />
      <div className={styles['content']}>
        <img alt="onboarding" src={logo} className={styles['logo']} />
        <h1>Hydra</h1>
        <p>Dar tu opinión nunca fue tan fácil</p>
        <div>
          <Link to="/registro">
            {' '}
            <Button className={'button-primary'}>comenzar ahora</Button>
          </Link>
          <Link to="/iniciar-sesion">
            <Button className={'button-secondary'}>iniciar sesión</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
