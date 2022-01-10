import styles from './Button.module.css';

const Button = ({ children, fun, type, className }) => {
  return (
    <div className={styles['button-modal']}>
      <button className={styles[className]} onClick={fun} type={type}>
        {children}
      </button>
    </div>
  );
};

export default Button;
