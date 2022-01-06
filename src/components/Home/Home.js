import { useState } from 'react';

import SideBar from 'components/SideBar';
import CreateReport from 'components/CreateReport';

import styles from './Home.module.css';

const Home = () => {
  const [createReport, setCreateReport] = useState(false);
  const showCreateReport = () => setCreateReport(!createReport);

  return (
    <div className={styles['home']}>
      <SideBar showCreateReport={showCreateReport} />
      <div className={styles['content']}>
        <h1>Home</h1>
      </div>
      {createReport && <CreateReport showCreateReport={showCreateReport} />}
    </div>
  );
};

export default Home;
