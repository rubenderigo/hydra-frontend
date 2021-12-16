import styles from './Button.module.css';

const Button = ({ children, className, type }) => {
  return <button className={styles[className]} type={type}>{children}</button>;
};

export default Button;
