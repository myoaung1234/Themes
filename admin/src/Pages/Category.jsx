import React, { useState,useEffect } from 'react'
import { BiChevronsRight, BiImageAdd } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'
import { FiEdit } from 'react-icons/fi'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { axiosAuth } from '../config/axios'
import Pagination from '../pagination/pagination'




const Category = () => {
  const navigate = useNavigate()
  const [category, setCategory] = useState();
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  const url = "http://localhost:5000/v1/categories";
  const getCategories = async (e) => {
    setLoading(true)
    const resultCategories = await ( await axiosAuth.get(url)).data
    setCategory(resultCategories);
    setLoading(false)
  }

  useEffect(() => {
    getCategories();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentCategories = category?.results?.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

   //handle Delete Function
    const handleDelete = async (id) =>{
      alert("Are you sure to Delete")
      await  axiosAuth.delete( `http://localhost:5000/v1/categories/${id}`)
      getCategories()
    }

    if(loading) {
      return <h2>Loading ...</h2>
    }
  
  return (
    <div className='posts'>
      <div className="posts-header">
        <div className="header-left">
          <h2>Categories</h2>
          <p>Dashboard<BiChevronsRight /><span>Manage Categories</span></p>
        </div>
        <div className='add-new' onClick={() => {
          navigate('/admin/category/add-new-category')
        }}><i><BiImageAdd/></i>Add Category</div>
      </div>
      <div className="posts-list">
        <table>
          <thead>
          <tr className='table-header'>
            <th>ID</th>
            <th>Category Name</th>
            <th>Number of Posts</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          {
            currentCategories?.map((data, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{data.name}</td>
                <td>5</td>
                <td className='action'>
                  <p className='edit' onClick={() => navigate(`/admin/category/${data.id}`)}><FiEdit /></p>
                  <p className='delete' onClick={() => handleDelete (data.id)}><MdDelete /></p>
                </td>
              </tr>
            ))
          }
          </tbody>
        </table>
        <Pagination 
          postsPerPage={postsPerPage}
          totalPosts={category?.totalResults}
          paginate={paginate}
        />
      </div>
    </div>
  )
}

export default Category