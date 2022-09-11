import { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import styles from './UserInfoForm.module.css';

const UserInfoForm = (props) => {
  const [error, setError] = useState(null);
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();

    let title = '';
    let text = '';
    switch (true) {
      case age.trim().length && Number(age) <= 0: {
        title = 'Invalid Input';
        text = 'Please enter a valid age (> 0).';
        break;
      }
      case !userName.trim().length || !age.trim().length: {
        title = 'Invalid Input';
        text = 'Please enter a valid name and age (non-empty values).';
        break;
      }

      default:
        break;
    }

    if (title.length) {
      setError({ title, text });
      return;
    }

    const userData = {
      id: Math.random().toString(),
      name: userName,
      age: age,
    };

    props.onAddItem(userData);
    setUserName('');
    setAge('');
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          text={error.text}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}
      <Card>
        <form className={styles['form']} onSubmit={submitHandler}>
          <div className={styles['form-control']}>
            <label>Username</label>
            <input value={userName} onChange={userNameChangeHandler} />
          </div>
          <div className={styles['form-control']}>
            <label>Age(Years)</label>
            <input value={age} onChange={ageChangeHandler} />
          </div>
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default UserInfoForm;
