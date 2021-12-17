import { useField } from 'formik';

import styles from 'components/Input/Input.module.css';

const Input = ({ label, type , ...props }) => {
  const [field, meta] = useField(props);
  
  return (
    <div className={styles['container-input']}>
      <label className={styles['label']} htmlFor={field.name}>{label}</label>
      <input className={styles['input']} type={type} {...field} />
      {meta.touched && meta.error ? <span className={styles['error']}>{meta.error}</span> : null}
    </div>
  );
};

export default Input;
