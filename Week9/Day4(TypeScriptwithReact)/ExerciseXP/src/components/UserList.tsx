import { useEffect, useState, type ReactNode } from 'react'
import axios from 'axios'

interface User {
    id: number;
    name: string;
    username: string;
}

const UserList = (): ReactNode => {
    const [users, setUsers] = useState<User[] | null>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<User[]>("https://jsonplaceholder.typicode.com/users");
                console.log('response =>', response);
                setUsers(response.data);
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    setError(error.message);
                } else {
                    setError("An unexpected error occured.");
                }
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [])

    if (loading) {
        return <div>Loading users...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>UserList Component</h2>
            {users && users?.length > 0 ? (
                users.map((user) => (
                    <div key={user.id}>
                        <p><strong>ID:</strong>{user.id}</p>
                        <p><strong>Name:</strong>{user.name}</p>
                        <p><strong>username:</strong>{user.username}</p>
                    </div>
                ))
            ) : (
                <p>No users found.</p>
            )}
        </div>

    )
}

export default UserList