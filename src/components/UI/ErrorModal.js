import Button from './Button';
import styles from './ErrorModal.module.css';

const ErrorModal = (props) => {
  const { title, text } = props;

  const clickHandler = (event) => {
    props.onErrorModal();
  };

  return (
    <div className={styles['modal']}>
      <div className={styles['modal-content']}>
        <div className={styles['modal-header']}>
          <h2>{title}</h2>
        </div>
        <div className={styles['modal-body']}>
          <p>{text}</p>
        </div>
        <div className={styles['modal-footer']}>
          <Button onClick={clickHandler}>Okay</Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
