import styles from './UserInfoList.module.css';
import UserInfoListItem from './UserInfoListItem';
import Card from '../UI/Card';

const UserInfoList = (props) => {
  const { users } = props;

  return (
    <Card>
      <div className={styles.users}>
        <ul>
          {users.map((user) => (
            <UserInfoListItem
              key={user.id}
              id={user.id}
              onDeleteItem={props.onDeleteItem}
            >
              {`${user.name} (${user.age} years old)`}
            </UserInfoListItem>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default UserInfoList;
