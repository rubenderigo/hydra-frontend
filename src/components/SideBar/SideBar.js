import Header from './Header/Header';
import NavBar from './NavBar/NavBar';
import SingOut from './SingOut/SingOut';

import styles from './SideBar.module.css';

const SideBar = () => {  

  return (
    <div className={styles['side-bar']}>
      <Header />
      <div className={styles['content']}>
        <div>
          <NavBar />
          <SingOut />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
