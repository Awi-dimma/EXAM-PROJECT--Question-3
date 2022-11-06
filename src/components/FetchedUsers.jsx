import React from 'react'
import './FetchedUsers.css'

const FetchedUsers = ({users, loading}) => {
  if(loading){
    return <div>Loading...</div>;
  }

  return (
    <div className = "DivTable">
    <table className = "Maintable">
    <thead>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Age</th>
      <th>Email</th>
      <th>Gender</th>
      <th>Phone</th>
      <th>Country</th>
    </tr></thead>
    <tbody>
        {users.map(user => 
          <tr key={user.id}>
            <td>{user.name.first}</td>
            <td>{user.name.last}</td>
            <td>{user.dob.age}</td>
            <td>{user.email}</td>
            <td>{user.gender}</td>
            <td>{user.phone}</td>
            <td>{user.location.country}</td>
          </tr>
        )}
      </tbody>
  </table>
      </div>
  )
}

export default FetchedUsers;