import { useAuth } from 'context/UserContext';

import styles from './Header.module.css';

const Header = () => {
  const { user } = useAuth();

  return (
    <div className={styles['header']}>
      <div className={styles['presantation']}>
        <p className={styles['hello']}>Hola, </p>
        <p className={styles['username']}>{user.username}</p>
      </div>
      <div className={styles['img-user']}>
        <img src={user.image} alt="profile" />
      </div>
    </div>
  );
};

export default Header;
