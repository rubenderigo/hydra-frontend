import Card from './Card';
import background from 'assets/background-terms-conditions.png';

import styles from './TermsConditions.module.css';

const TermsConditions = () => {
  return (
    <div className={styles['terms-conditions-container']}>
      <img
        alt="background terminos y condiciones"
        src={background}
        className={styles['img-background']}
      />
      <Card />
    </div>
  );
};

export default TermsConditions;
