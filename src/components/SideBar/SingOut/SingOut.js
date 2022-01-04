import { useSingOut } from 'hooks/auth';
import BeatLoader from 'react-spinners/BeatLoader';

import styles from './SingOut.module.css';

const SingOut = () => {
  const { singOut, promiseInProgress } = useSingOut();

  return (
    <div className={styles['link']}>
      <button className={styles['sing-out']} onClick={singOut}>
        {promiseInProgress ? (
          <BeatLoader color="#ca5151" size="3px" />
        ) : (
          <>
            <span className="material-icons">logout</span>
            cerrar sesión
          </>
        )}
      </button>
    </div>
  );
};

export default SingOut;
