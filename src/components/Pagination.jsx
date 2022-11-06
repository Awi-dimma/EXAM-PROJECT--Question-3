import React from 'react'

const Pagination = ({ usersPerPage, totalUsers, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= (totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }


  return (
    <nav>
      <ul style={{listStyleType:'none', padding:'5px'}}>
        {pageNumbers.map(number => (
          <li key={number} style={{display:'inline-block', padding:'5px', fontSize:'20px'}} >
            <a onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination;