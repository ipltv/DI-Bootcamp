import { useState } from 'react'
export const Users = () => {
    const [users, setUsers] = useState([{ id: 1, name: 'Jhon' }]);
    const [name, setName] = useState();
    
    const addUser = () => {
        setUsers([...users, {id: users.length + 1, name}])
    }
    return (
        <>
            <h2>Users:</h2>
            <input type="text" placeholder='User Name..' onChange={(e) => setName(e.target.value)}/>
            <button onClick={addUser}>Add user</button>
            {
                users.map((item, index) => {
                    return <div key={index}>
                        {item.id} - {item.name}
                    </div>
                })
            }
        </>
    )
}
