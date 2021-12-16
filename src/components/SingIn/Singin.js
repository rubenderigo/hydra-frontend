import background from 'assets/background-singin.png';

import styles from './SingIn.module.css';
import SingInForm from './SingInForm';

const SingIn = () => {
  return (
    <div className={styles['sign-in-container']}>
      <img
        alt="backgound sing in"
        src={background}
        className={styles['img-sing-in']}
      />
      <div className={styles['content']}>
        <p>Bienvenido/a de nuevo!</p>
        <h2>Inicia sesión</h2>
        <SingInForm />
      </div>
    </div>
  );
};

export default SingIn;
