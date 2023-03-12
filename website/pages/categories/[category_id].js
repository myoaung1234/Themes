import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios';
import Link from 'next/link';
import { format } from 'timeago.js';

const category = ({catPost}) => { 
  let router = useRouter();
  const [post, setPost] = useState(null)
  let category_id = router?.query?.category_id

  const getPost = async (cid) => {
    const url = `http://localhost:5000/v1/posts/public/webPosts/?category=${cid}`
    const resultCategories = await ( await axios.get(url)).data;
    setPost(resultCategories)
  }

  useEffect(() => {
    if (router.asPath !== router.route) {
      getPost(category_id)
    }
  }, [router])

 

  return (
    <div>
      <div className="category_sidebar">
            <div className="latest">
                <div className="gadget-header">
                  <p>{post?.results[0].name}</p>
                </div>
                <div className="latest-items">

                  {
                    post?.results?.map((data, i) => (
                      <div className="latest-item" key={i}>
                        <div className="latest-image">
                          <img src={data.image} alt=""/>
                        </div>
                        <div className="latest-text">
                          <span className="style">{data.category.name}</span>
                          <Link href={`/posts/${data.id}`}>{data.title}</Link>
                          {/* <div>
                            <div dangerouslySetInnerHTML={data.desc}/>
                          </div> */}
                          <p>{data.desc}</p>
                          <div className="latest-post-owner">
                            <div className="latest-inner">
                              <div className="image">
                                <img src={data.userId.image} alt="" />
                              </div>
                              <div className="latest-text">
                                <p>{data.userId.name}</p>
                                <span>{format(data.createdAt)}</span>
                              </div>
                            </div>
                            <a href="#">KEEP READING</a>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                  <div className="more-posts">
                    <button style={{background: '#eceefd', color: '#000'}}>That's All</button>
                  </div>
                </div>
              </div>
          </div>
    </div>
  )
}




export default category
