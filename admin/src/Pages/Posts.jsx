import React, { useEffect, useState } from 'react'
import './Posts.css'
import { BiChevronsRight, BiImageAdd } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'
import { FiEdit } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { axiosAuth } from '../config/axios'

const Posts = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState();
  const [page, setPage] = useState(1);
  
  const getPosts = async (pageNum) => {
    const url = `http://localhost:5000/v1/posts?page=${pageNum}&limit=4`;
    const resultPost = await ( await axiosAuth.get(url)).data
    setPage(resultPost?.page)
    setPosts(resultPost);
  }

  const handleNext = () => {
    getPosts(page + 1)
  }

  const handlePrev = () => {
    getPosts(page - 1)
  }

  useEffect(() => {
    getPosts(page);
  }, []);

   //handle Delete Function 
    const handleDelete = async (id) =>{
      alert("Are you sure to Delete")
      await  axiosAuth.delete( `http://localhost:5000/v1/posts/${id}`)
        getPosts()
    }

   
  return (
    <div className='posts'>
      <div className="posts-header">
        <div className="header-left">
          <h2>Manage News</h2>
          <p>Dashboard<BiChevronsRight /><span>Manage News</span></p>
          <input type="text" placeholder='Search...' />
        </div>
        <div className='add-new' onClick={() => {
          navigate('/admin/posts/add-new-post')
        }}><i><BiImageAdd/></i>Add New</div>
      </div>
      <div className="posts-list">
        <table>
          <thead>
          <tr className='table-header'>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>CreatedAt</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          {
            posts?.results?.map((data, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{data.title}</td>
                <td>{data.category}</td>
                <td>{}</td>
                <td className='action'>
                  <p className='edit' onClick={() => navigate(`/admin/posts/${data.id}`)}><FiEdit /></p>
                  <p className='delete' onClick={() => handleDelete (data.id)}><MdDelete /></p>
                </td>
              </tr>
            ))
          }
          </tbody>
        </table>

        <button disabled={1 >= page} onClick={() => handlePrev()}>Prev</button>
        <button disabled={posts?.totalPages <= page} onClick={() => handleNext()}>Next</button>
        
      </div>
    </div>
  )
}

export default Posts