import { Link } from 'react-router-dom';

import styles from './SingOut.module.css';

const SingOut = () => {
  return (
    <div className={styles['link']}>
      <Link to="/" className={styles['sing-out-link']}>
        <span className="material-icons">logout</span>
        cerrar sesión
      </Link>
    </div>
  );
};

export default SingOut;
