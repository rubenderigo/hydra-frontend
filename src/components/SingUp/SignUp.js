import SingUpForm from 'components/SingUp/SingUpForm';

import background from 'assets/background-singup.png';
import styles from './SingUp.module.css';

const SingUp = () => {
  return (
    <div className={styles['sing-up-container']}>
      <img
        alt="backgound sing up"
        src={background}
        className={styles['img-sing-up']}
      />
      <div className={styles['content']}>
        <p>¡Hola!</p>
        <h2>¡Empecemos!</h2>
        <SingUpForm />
      </div>
    </div>
  );
};

export default SingUp;
