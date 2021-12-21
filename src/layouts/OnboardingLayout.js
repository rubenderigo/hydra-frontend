import styles from './OnboardingLayout.module.css'

const OnboardingLayout = ({children, background, atlBackground}) => {
  return (
    <div className={styles['layout']}>
      <img
        alt={atlBackground}
        src={background}
        className={styles['img']}
      />
      <div className={styles['content']}>
          {children}
      </div>
    </div>
  );
};

export default OnboardingLayout;
