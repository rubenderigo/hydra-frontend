import styles from './NavBar.module.css';

const NavBar = () => {
  return (
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
  );
};

export default NavBar;
