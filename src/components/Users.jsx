import { useState, useEffect, useMemo } from 'react'
import axios from 'axios'
import FetchedUsers from './FetchedUsers'
import Pagination from './Pagination'
import { Link } from 'react-router-dom'
import './Users.css'
import { Helmet } from 'react-helmet-async'
// import {helmet} from 'react-helmet-async'



function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10)

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const res = await axios.get('https://randomuser.me/api/?results=100')
      setUsers(res.data.results)
      setLoading(false)
    }

    fetchUsers()
  }, [])

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser)
  const paginate = (pageNumber) => setCurrentPage(pageNumber)


  return (
    <>
      <Helmet>
          <title>Users</title>
          <meta 
            name="description"
            content="This page shows the link of my users"
            />
      </Helmet>
    <div>
      <h1>Fetched user data</h1>
      <FetchedUsers users={currentUsers} loading={loading} />
      <Pagination usersPerPage={usersPerPage} totalUsers={users.length} paginate={paginate} />
      <button className='button-33'>
        <Link className ='text-link' to="/">Back</Link>
      </button>
    </div>
    </>  
  )
}
export default Users;