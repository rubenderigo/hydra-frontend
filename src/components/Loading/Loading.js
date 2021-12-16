import styles from './Loading.module.css';
import PropagateLoader from 'react-spinners/PropagateLoader';

const Loading = () => (
  <div
    className={styles['loading']}>
        <PropagateLoader color={'#9a31e4'} />
    </div>
);

export default Loading;