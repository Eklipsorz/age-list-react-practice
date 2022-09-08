import { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import styles from './UserInfoForm.module.css';

const UserInfoForm = (props) => {
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

    if (!userName.trim().length || !age.trim().length) return;
    if (Number(age) <= 0) return;

    const userData = {
      id: Math.random().toString(),
      name: userName,
      age: age,
    };

    props.onAddItem(userData);
    setUserName('');
    setAge('');
  };

  return (
    <div>
      <ErrorModal title='hhhh'></ErrorModal>
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
    </div>
  );
};

export default UserInfoForm;
