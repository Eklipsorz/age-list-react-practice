import Button from './Button';
import styles from './ErrorModal.module.css';
import Card from '../UI/Card';
import ReactDOM from 'react-dom';
import React from 'react';

const BackDrop = (props) => {
  return <div className={styles['backdrop']} onClick={props.onConfirm}></div>;
};

const Modal = (props) => {
  return (
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
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-root'),
      )}
      {ReactDOM.createPortal(
        <Modal
          title={props.title}
          text={props.text}
          onConfirm={props.onConfirm}
        />,
        document.getElementById('modal-root'),
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
