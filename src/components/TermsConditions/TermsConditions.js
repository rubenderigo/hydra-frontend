import Card from './Card';
import OnboardingLayout from 'layouts/OnboardingLayout';

import styles from './TermsConditions.module.css';

const TermsConditions = () => {
  return (
    <OnboardingLayout background="terms-conditions">
      <div className={styles['terms-conditions-container']}>
        <Card />
      </div>
    </OnboardingLayout>
  );
};

export default TermsConditions;
