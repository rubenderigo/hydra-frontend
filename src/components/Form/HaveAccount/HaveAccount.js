import { Link } from 'react-router-dom';
import styles from './HaveAccount.module.css';

const HaveAccount = ({ haveAccount }) => {
  return (
    <div className={styles['container']}>
      {haveAccount ? (
        <p>
          ¿ Ya tienes una cuenta ?{' '}
          <Link to="/iniciar-sesion">iniciar sesión</Link>
        </p>
      ) : (
        <p>
          ¿ No tienes una cuenta ?{' '}
          <Link to="/registro">registate</Link>
        </p>
      )}
    </div>
  );
};

export default HaveAccount;
