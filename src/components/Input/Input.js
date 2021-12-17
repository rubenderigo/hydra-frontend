import { useField } from 'formik';

import styles from 'components/Input/Input.module.css';

const Input = ({ label, type, placeholder, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className={styles['container-input']}>
      <label className={styles['label']} htmlFor={field.name}>
        {label}{' '}
        {meta.touched && meta.error && (
          <span className={styles['error']}>{meta.error}</span>
        )}
      </label>
      <input className={styles['input']} type={type} placeholder={placeholder} {...field} />
    </div>
  );
};

export default Input;
