import PropTypes from 'prop-types';

import styles from './RadioButton.module.css';

const RadioButton = ({ label, checked, setChecked }) => {
  const changeChecked = () => setChecked(!checked);

  return (
    <div className={styles['radio-button']}>
      <label>
        <input type="radio" onClick={changeChecked} />
        {label}
      </label>
    </div>
  );
};

RadioButton.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  setChecked: PropTypes.func.isRequired,
};

export default RadioButton;
