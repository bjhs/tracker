import React, { Key } from 'react'

interface User {
  id: Key
  name: string
  email: string
}

// export const revalidate = 3600 // revalidate at most every hour

async function getUsers() {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/users',
    {
      next: { revalidate: 10 }
    }
  )

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return res.json();
}

const UsersPage = async () => {
  const users: User[] = await getUsers();

  return (
    <div className="overflow-x-auto">
      <h1>Users</h1>
      <p> {new Date().toLocaleTimeString()} </p>
      <table className="table table-zebra table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(user => 
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default UsersPage