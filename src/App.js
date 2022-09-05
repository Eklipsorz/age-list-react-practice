import React, { useState } from 'react';
import UserInfoForm from './components/UserInfoForm/UserInfoForm';
import UserInfoList from './components/UserInfoList/UserInfoList';
import './App.css';

const DUMMY_DATA = [
  {
    id: 'e1',
    text: 'Max (31 years old)',
  },
  {
    id: 'e2',
    text: 'Sam (21 years old)',
  },
];

function App() {
  const initUsers = DUMMY_DATA;
  const [users, setUsers] = useState(initUsers);

  const itemDeleteHandler = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  return (
    <div>
      <section id='user-info-form'>
        <UserInfoForm />
      </section>
      <section id='user-info-list'>
        <UserInfoList users={users} onDeleteItem={itemDeleteHandler} />
      </section>
    </div>
  );
}

export default App;
