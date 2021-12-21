import styles from './OnboardingLayout.module.css'

const OnboardingLayout = ({children, background, atlBackground}) => {
  return (
    <div className={styles['layout']}>
      <div className={styles['content']}>
          {children}
      </div>
    </div>
  );
};

export default OnboardingLayout;
