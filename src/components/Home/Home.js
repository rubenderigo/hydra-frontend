import { useAccount } from 'hooks/auth';
import SideBar from 'components/SideBar';

import styles from './Home.module.css';

const Home = () => {
  const { user } = useAccount();

  console.log('aca', user)

  return (
    <div>
      <SideBar/>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
