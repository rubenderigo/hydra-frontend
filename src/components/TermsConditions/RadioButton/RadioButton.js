import styles from './RadioButton.module.css';

const RadioButton = ({ label, props }) => {
  return (
    <div className={styles['radio-button']}>
      <label>
        <input type="radio" {...props} />
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
