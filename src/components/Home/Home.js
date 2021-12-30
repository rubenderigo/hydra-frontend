import SideBar from 'components/SideBar';

import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles['home']}>
      <SideBar />
      <div className={styles['content']}>
        <h1>Home</h1>
      </div>
    </div>
  );
};

export default Home;
