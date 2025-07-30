import React, { type ReactNode } from 'react'

interface UserCardProps {
    name?: string,
    age?: number,
    role?: string,
}

const UserCard = ({name='John Doe', age=1, role="GenAi Engeneer"}: UserCardProps): ReactNode => {
  return (
    <div>
        <h2>UserCard Component</h2>
        <p>Name: {name}, Age: {age}, Role: {role}</p>
    </div>
  )
}

export default UserCard