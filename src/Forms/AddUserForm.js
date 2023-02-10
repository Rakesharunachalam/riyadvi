import { useState } from "react";



const AddUserForm = (props)=>{

    const intialState = {id:null,name:"",username:""}

   const [users,setUsers]=  useState(intialState);

  const handleInputChange =(event)=>{
    const {name,value} = event.target;
    setUsers({...users,[name]:value})
    
   }
    return(
        <form onSubmit={
            event =>{
                event.preventDefault();
                if(!users.name || !users.username) return;
               props.addUser(users);
                setUsers(intialState);
            }
        }>
            <label>Name</label>
            <input type="text" onChange={handleInputChange} name="name" value={users.name}/>
            <label>User Name</label>
            <input type="text" onChange={handleInputChange} name="username" value={users.username}/>
            <button>Add User</button>
            </form>
            
    )
} ;
export default AddUserForm;