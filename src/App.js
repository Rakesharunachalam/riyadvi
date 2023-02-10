import React, { useState, } from 'react'
import AddUserForm from './Forms/AddUserForm';
import UserTable from './Table/UserTable';
import EditUserForm from './Forms/EditUserForm';
function App() {



const UserData = [
  {id:1,name:"Rakesh",username:"Rakesh Arunachalam"},
  {id:2,name:"Vijay",username:"Vijay G"},
  {id:3,name:"Bala",username:"Bala vekatesh"},
];


const addUser =(newUser)=>{
  newUser.id = user.length +1;
  setUser([...user,newUser])
}

const deleteUser =(id)=>{

  setUser(user.filter((del)=>del.id!==id) )
  setediting(false)
}


const [user,setUser] =  useState(UserData);
const [editing,setediting] = useState(false);

const intialState = {id:null,name:"",username:""}

const [currentUser, setCurrentUser] = useState(intialState);

const editRow = (user)=>{
  setediting(true);
  setCurrentUser({id:user.id,name:user.name,username:user.username})
};

const updateUser = (id,updatedUser)=>{
  setediting(false);
  setUser(user.map((users)=>(users.id===id?updatedUser:users)))
}

  return (
    <div className="Container">
      <h1>CRUD Operations</h1>
      <div className='flex-row'>
        <div className='flex-large'>
          {editing?(<div>
            <h2>Edit User</h2>
            <EditUserForm setediting={setediting}
            currentUser={currentUser}
            updateUser={updateUser}
            />
            </div>):(
            <div>
            <h2>Add User</h2>
            <AddUserForm addUser={addUser}/>
            </div>)
            }
        </div>     
        <div className='flex-large'>
          <h2>View User</h2>
          <UserTable editRow={editRow} deleteUser={deleteUser} user={user}/>
        </div>
      </div>
     
    </div>
  );
}

export default App;
