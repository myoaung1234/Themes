import React, { useEffect, useState } from 'react'
import { BiChevronsRight, BiImageAdd } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'
import { FiEdit } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { axiosAuth } from '../config/axios'
import Pagination from '../pagination/pagination'

const Setting = () => {
  const [quotes, setQuotes] = useState();
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  const url = "http://localhost:5000/v1/quotess";
  const getQuotes = async () => {
    setLoading(true)
    const resultQuotes = await ( await axiosAuth.get(url)).data
    setQuotes(resultQuotes);
    setLoading(false)
  }

  useEffect(() => {
    getQuotes();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentQuotes = quotes?.results?.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

   //handle Delete Function 
    const handleDelete = async (id) =>{
      alert("Are you sure to Delete")
      await  axiosAuth.delete( `http://localhost:5000/v1/quotess/${id}`)
        getQuotes();
    }

  const navigate = useNavigate()

  if(loading ) {
    <h2>Loading ... </h2>
  }

  return (
    <div className='posts'>
      <div className="posts-header">
        <div className="header-left">
          <h2>Quotes</h2>
          <p>Dashboard<BiChevronsRight /><span>Manage Quotes</span></p>
        </div>
        <div className='add-new' onClick={() => {
          navigate('/admin/quotes/add-new-quotes')
        }}><i><BiImageAdd/></i>Add Quotes</div>
      </div>
      <div className="posts-list">
        <table>
          <thead>
          <tr className='table-header'>
            <th>ID</th>
            <th>Quoteser*</th>
            <th>Quotes*</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          {
            currentQuotes?.map((data, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{data.quoteser}</td>
                <td>{data.quotes}</td>
                <td className='action'>
                  <p className='edit'><FiEdit /></p>
                  <p className='delete' onClick={() => handleDelete (data.id)}><MdDelete /></p>
                </td>
              </tr>
            ))
          }
          </tbody>
        </table>
        <Pagination 
          postsPerPage={postsPerPage}
          totalPosts={quotes?.totalResults}
          paginate={paginate}
        />
      </div>
    </div>
  )
}

export default Setting