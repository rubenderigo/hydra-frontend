import styles from './OnboardingLayout.module.css';

const OnboardingLayout = ({ children, background }) => {
  return (
    <div className={`${styles['layout']} ${styles[background]}`}>
      <div className={styles['content']}>{children}</div>
    </div>
  );
};

export default OnboardingLayout;
