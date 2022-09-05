import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './UserInfoForm.module.css';

const UserInfoForm = (props) => {
  return (
    <Card>
      <form className={styles['form']}>
        <div className={styles['form-control']}>
          <label>Username</label>
          <input />
        </div>
        <div className={styles['form-control']}>
          <label>Age(Years)</label>
          <input />
        </div>
        <Button type='submit' onClick>
          Add User
        </Button>
      </form>
    </Card>
  );
};

export default UserInfoForm;
