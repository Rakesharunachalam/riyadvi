

const UserTable = (props)=>(
    <table>
       <thead>
        <tr>
            <td>Name</td>
            <td>User Name</td>
            <td>Action</td>
        </tr>
        </thead> 
        <tbody>

        {props.user.length>0?(
            props.user.map((newUser)=>(
                <tr key={newUser.id}>
                        <td>{newUser.name}</td>
                        <td>{newUser.username}</td>
                        <td>
                <button onClick={()=>
                props.editRow(newUser)
                } className="button muted-button">Edit</button>
                <button onClick={()=>props.deleteUser(newUser.id)}  className="button muted-button">Delete</button>
            </td>
            </tr>
))):(
    <tr>
        <td colSpan={3}>No Users</td>
    </tr>
)
}
        </tbody>
    </table>
);
export default UserTable;