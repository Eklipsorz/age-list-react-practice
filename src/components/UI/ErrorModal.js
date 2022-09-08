import Button from './Button';
import styles from './ErrorModal.module.css';

const ErrorModal = (props) => {
  return (
    <div className={styles['modal']}>
      <div className={styles['modal-content']}>
        <div className={styles['modal-header']}>
          <h2>{props.title}</h2>
        </div>
        <div className={styles['modal-body']}>
          <p>{props.text}</p>
        </div>
        <div className={styles['modal-footer']}>
          <Button>Okay</Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
