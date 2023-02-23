import './App.css';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UsersList';
import React, {useState} from 'react';
function App() {
  const [userList, setUserList] = useState([]);

  const AddUserHandler = (userName, userAge) => {
    setUserList((prevUserList) => {
      return [...prevUserList, {name : userName, age : userAge, id: Math.random().toString()}]
    });
  }
  return (
    <div>
       <AddUser onAddUser = {AddUserHandler}></AddUser>
       <UserList users={userList}></UserList>
    </div>
  );
}

export default App;
