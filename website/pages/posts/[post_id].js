import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import axios from 'axios';
import { format } from 'timeago.js';
import Link from 'next/link';


const post = () => {
  const router = useRouter();
  const [post, setPost] = useState();
  const[catPost, setCatPost] = useState();
  const [popularPosts, setPopularPosts] = useState();
  const [loading, setLoading] = useState()

  let id = router.query.post_id
  const getPost = async (cid) => {
    setLoading(true)
    const url = `http://localhost:5000/v1/posts/public/single/${cid}`;
    const getData = await ( await axios.get(url)).data;
    console.log("hello")
    setPost(getData)
    const urlcat = `http://localhost:5000/v1/posts/public/webPosts/?category=${getData?.category.id}`
    const resultPost = await ( await axios.get(urlcat)).data
    setCatPost(resultPost)
    let popularurl = `http://localhost:5000/v1/posts/public/webPosts?sortBy=viewCount:desc`
    const popularPost = await ( await axios.get(popularurl)).data
    setPopularPosts(popularPost);
    setLoading(false)
  }

  useEffect(() => {
    if (router.asPath !== router.route) {
      getPost(id)
    }
  }, [router])

  return (
        <div className="posts_container">
          <div className="hero-section">
            <div className="hero-posts">
              <div className="hero-image">
                <img src={post?.image} alt=""/>
                <div className="background"></div>
              </div>
              <div className="hero-text">
                <p>
                  <a href="/">Home</a>
                  <i className="bi bi-caret-right-fill"></i>
                  <Link href={`/categories/${post?.category.id}`}>{post?.category.name}</Link>
                </p>
                <h1>{post?.title}</h1>
                <div className="hero-poster">
                  <div className="image">
                    <img src={post?.userId.image} alt=""/>
                  </div>
                  <div className="poster-text">
                    <h3>{post?.userId.name}</h3>
                    <span>{format(post?.createdAt)}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-post-text">
              <div dangerouslySetInnerHTML={{__html: post?.desc}}></div>
            </div>
            <div className="poster-info">
                <div className="hero-poster">
                  <div className="image">
                    <img src={post?.userId.image} alt=""/>
                  </div>
                  <div className="poster-text">
                    <span>POSTED BY</span>
                    <h2>{post?.userId.name}</h2>
                  </div>
                </div>
                
            </div>
            <div className="related-posts">
              <div className="gadget-header">
                <p>Related</p>
                <span>View All</span>
              </div>
              <div className="living-items">
                {
                  catPost?.results?.map((data, i) => (
                    <div className="living-item" key={i}>
                      <div className="living-image">
                        <img src={data.image} alt=""/>
                      </div>
                      <Link href={`/categories/${data.category.id}`}>{data.category.name}</Link>
                      <div className="living-text">
                        <Link href={`/posts/${data.id}`}>{data.title}</Link>
                        <span>{data.userId.name}<p>.</p>{format(data.createdAt)}</span>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="posts_sidebar">
            <div className="picked-item">
                <div className="right-header">
                  <h3>Recommended</h3>
                  <span>View All</span>
                </div> 
                {
                  loading ?
                  <div className='loading' style={{opacity: 0.8}}>
                    <img src="1488.gif" alt="Loading..."/>
                  </div>
                  :
                  <div className='loading' style={{opacity: 0, zIndex: -999}}>
                    <img src="1488.gif" alt="Loading..."/>
                  </div>
                }
                  <div>
                    {
                      popularPosts?.results?.slice(0, 5).map((data, i) => (
                        <div className="right-picked-item" key={i}>
                          <div className="image">
                            <img src={data.image} alt=""/>
                          </div>
                          <div className="text-right">
                            <Link href={`/posts/${data.id}`}>{data.title}</Link>
                            <div className="view">
                              <span style={{color: 'blue'}}>{data.viewCount} views</span>
                              <span>{format(data.createdAt)}</span>
                            </div>
                          </div>
                        </div>
                      ))
                    }
                  </div>
              </div>
          </div>
        </div>
  )
}

export default post