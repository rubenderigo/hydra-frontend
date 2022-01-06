import Modal from './Modal/Modal';

import styles from './CreateReport.module.css';

const CreateReport = ({ showCreateReport }) => {
  return (
    <div className={styles['create-modal']}>
      <Modal showCreateReport={showCreateReport} />
    </div>
  );
};

export default CreateReport;
