import React from 'react';
import UserInfoForm from './components/UserInfoForm/UserInfoForm';
import UserInfoList from './components/UserInfoList/UserInfoList';
import './App.css';

function App() {
  return (
    <div>
      <section id='user-info-form'>
        <UserInfoForm />
      </section>
      <section id='user-info-list'>
        <UserInfoList />
      </section>
    </div>
  );
}

export default App;
