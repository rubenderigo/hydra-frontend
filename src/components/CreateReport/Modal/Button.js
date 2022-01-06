import styles from './Button.module.css';

const Button = ({ children, fun, className }) => {
  return (
    <div className={styles['button-modal']}>
      <button className={styles[className]} onClick={fun}>
        {children}
      </button>
    </div>
  );
};

export default Button;
