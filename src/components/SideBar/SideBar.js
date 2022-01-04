import { useAuth } from 'context/UserContext';
import { Link } from 'react-router-dom';

import styles from './SideBar.module.css';

const SideBar = () => {
  const { user } = useAuth();
  
  return (
    <div className={styles['side-bar']}>
      <div className={styles['header']}>
        <div className={styles['presantation']}>
          <p className={styles['hello']}>Hola, </p>
          <p className={styles['username']}>{user.username}</p>
        </div>
        <div className={styles['img-user']}>
          <img
            src={user.image}
            alt="profile"
          />
        </div>
      </div>
      <div className={styles['content']}>
        <div className={styles['menu']}>
          <nav>
            <ul>
              <li>
                <span className="material-icons">home</span>
                Inicio
              </li>
              <li>
                <span className="material-icons">account_circle</span>
                Mi perfil
              </li>
              <li>
                <span className="material-icons">rate_review</span>
                Mis reportes
              </li>
              <li>
                <span className="material-icons">settings</span>
                Configuraciones
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles['link']}>
          <Link to="/" className={styles['sing-out-link']}>
            <span className="material-icons">logout</span>
            cerrar sesión
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
