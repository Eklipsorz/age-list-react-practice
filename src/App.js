import React, { useState } from 'react';
import UserInfoForm from './components/UserInfoForm/UserInfoForm';
import UserInfoList from './components/UserInfoList/UserInfoList';
import './App.css';

const DUMMY_DATA = [
  {
    id: 'e1',
    name: 'Max',
    age: 31,
  },
  {
    id: 'e2',
    name: 'Sam',
    age: 21,
  },
];

function App() {
  const initUsers = DUMMY_DATA;
  const [users, setUsers] = useState(initUsers);

  const itemDeleteHandler = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  const itemAddHandler = (data) => {
    const callback = (users) => {
      return [data, ...users];
    };
    setUsers(callback);
  };

  return (
    <div>
      <section id='user-info-form'>
        <UserInfoForm onAddItem={itemAddHandler} />
      </section>
      <section id='user-info-list'>
        <UserInfoList users={users} onDeleteItem={itemDeleteHandler} />
      </section>
    </div>
  );
}

export default App;
