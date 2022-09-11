import Button from './Button';
import styles from './ErrorModal.module.css';
import Card from '../UI/Card';
const ErrorModal = (props) => {
  return (
    <>
      <div className={styles['backdrop']} onClick={props.onConfirm}></div>
      <Card className={styles['modal']}>
        <div className={styles['modal-header']}>
          <h2>{props.title}</h2>
        </div>
        <div className={styles['modal-body']}>
          <p>{props.text}</p>
        </div>
        <div className={styles['modal-footer']}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </div>
      </Card>
    </>
  );
};

export default ErrorModal;
