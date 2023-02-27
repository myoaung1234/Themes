import React, { useEffect, useState } from 'react'
import './User.css'
import { HiUsers } from 'react-icons/hi'
import { BiChevronsRight } from 'react-icons/bi'
import { axiosAuth } from '../config/axios'
import Pagination from '../pagination/pagination'

const User = () => {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);


  useEffect(() => {
    const url = "http://localhost:5000/v1/users";
    const getUsers = async () => {
      setLoading(true)
      const resultUsers = await ( await axiosAuth.get(url)).data
      setUsers(resultUsers);
      setLoading(false)
    }
    
    getUsers();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentUsers = users?.results?.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  if(loading) {
    return <h2>Loading ...</h2>
  }

  return (
    <div className='user-container'>
      
      <div className="posts-header">
        <div className="header-left">
          <div className="user-header">
            <h2>User Info</h2>
            <i><HiUsers /></i>
          </div>
          <p>Dashboard<BiChevronsRight /><span>User Info</span></p>
        </div>
        <div className="add-new">
          <a href="/admin/user/register">Add User</a>
        </div>
      </div>
      <div className="user-list">
          <table>

            <thead>
              <tr className='table-header'>
                <th>ID</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Register Date</th>
                <th>Posts</th>
              </tr>
            </thead>
            <tbody>
              {
                currentUsers?.map((data, i) => (
                  <tr key={i}>
                  <td>{ i + 1}</td>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>31.1.2023</td>
                  <td>40</td>
                </tr>
                ))
              }
              
              </tbody>
          </table>
          <Pagination 
            postsPerPage={postsPerPage}
            totalPosts={users?.totalResults}
            paginate={paginate}
          />
        </div>
    </div>
  )
}

export default User
