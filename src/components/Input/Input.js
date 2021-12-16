import { useField } from 'formik';

import styles from 'components/Input/Input.module.css';

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  
  return (
    <div className={styles['container-input']}>
      <label className="label">{label}</label>
      <input className={styles['input']} {...field} />
      {meta.touched && meta.error ? <div className={styles['error']}>{meta.error}</div> : null}
    </div>
  );
};

export default Input;
