import { Link } from 'react-router-dom';

import styles from './SideBar.module.css';

const SideBar = () => {
  return (
    <div className={styles['side-bar']}>
      <div className={styles['header']}>
        <div className={styles['presantation']}>
          <p className={styles['hello']}>Hola, </p>
          <p className={styles['username']}>nombreUsuario</p>
        </div>
        <div className={styles['img-user']}>
          <img
            src="https://i.pinimg.com/564x/ae/09/14/ae0914d5c9e3b0499ed42fea4aa0c987.jpg"
            alt="profile"
          />
        </div>
      </div>
      <div className={styles['content']}>
        <div className={styles['menu']}>
          <nav>
            <ul>
              <li>
                <span class="material-icons">home</span>
                Inicio
              </li>
              <li>
                <span class="material-icons">account_circle</span>
                Mi perfil
              </li>
              <li>
                <span class="material-icons">rate_review</span>
                Mis reportes
              </li>
              <li>
                <span class="material-icons">settings</span>
                Configuraciones
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles['link']}>
          <Link to="/" className={styles['sing-out-link']}>
            <span class="material-icons">logout</span>
            cerrar sesión
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
