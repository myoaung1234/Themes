
import Posts from '@/components/Posts';
import Slider from '@/components/Slider';
import Head from 'next/head';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { format } from 'timeago.js';
import Link from 'next/link';


export default function Home() {
  const [posts, setPosts] = useState();
  const [livingPosts, setLivingPosts] = useState();
  const [gadgetPosts, setGadgetPosts] = useState();
  const [latestPosts, setLatestPosts] = useState();
  const [changePost, setChangePost] = useState();
  const [pickedPost, setPickedPost] = useState();
  const [category, setCategory] = useState();
  const [quotess, setQuotess] = useState();
  let [startIndex, setStartIndex ] = useState(0);
  let [endIndex, setEndIndex] = useState(3);
  let [addIndex, setAddIndex] = useState(5);
  let [changeId, setChangeId] = useState();
  let [pickedId, setPickedId] = useState();
  let [toggleCat, setToggleCat] = useState(true);
  let [toggle, setToggle] = useState(true)
  let [pickLoading, setPickLoading] = useState(false)
  
  const getQuotes = async () => {
    const url = `http://localhost:5000/v1/quotess/public/webQuotess?sortBy=_id:desc`;
    const resultQuotes = await ( await axios.get(url)).data
    setQuotess(resultQuotes);
  }

  const getPosts = async () => {
    let url = `http://localhost:5000/v1/posts/public/webPosts`
    const resultPost = await ( await axios.get(url)).data
    setPosts(resultPost);
    let latesturl = `http://localhost:5000/v1/posts/public/webPosts/?sortBy=_id:desc`
    const latestPost = await ( await axios.get(latesturl)).data
    setLatestPosts(latestPost);
  }

  const getCategories = async (id, pickedId) => {
    setPickLoading(true)
    const url = `http://localhost:5000/v1/categories/public/webCategories`;
    const resultCategories = await ( await axios.get(url)).data
    setCategory(resultCategories);

    let livingURL = `http://localhost:5000/v1/posts/public/webPosts?category=${resultCategories?.results[0].id}`
    const resultPost = await ( await axios.get(livingURL)).data
    setLivingPosts(resultPost);

    let gadgetURL = `http://localhost:5000/v1/posts/public/webPosts?category=${resultCategories?.results[1].id}`
    const gadgetPost = await ( await axios.get(gadgetURL)).data
    setGadgetPosts(gadgetPost);

    let Id = id ? id : resultCategories?.results[2].id
    let changeURL = `http://localhost:5000/v1/posts/public/webPosts?category=${Id}`
    const changePost = await ( await axios.get(changeURL)).data
    setChangePost(changePost);
    
    // let picked = pickedId ? pickedId : resultCategories?.results[1].id
    // let pickedURL = `http://localhost:5000/v1/posts/public/webPosts?category=${picked}`
    // const pickedPost = await ( await axios.get(pickedURL)).data
    // setPickedPost(pickedPost);
    setPickLoading(false);
  }

  useEffect(() => {
    getPosts(),
    getCategories(changeId),
    getQuotes()
  }, [changeId]) 

  const handleNext = () => {
    if(endIndex <= (livingPosts?.totalResults)){
      setStartIndex(startIndex += 1)
      setEndIndex(endIndex += 1)
    }
  };

  const handlePrev = () => {
    if(startIndex >= 1){
      setStartIndex(startIndex -= 1)
      setEndIndex(endIndex -= 1)
    }
  };

  const handlMore = () => {
    if(addIndex <= (posts?.totalResults)){
      setAddIndex(addIndex += 4)
    }
  }
  
  return (
    <>
      <Head>
        <title>Themes Celebrity</title>
      </Head>
      <div className="container">
        <Slider />
        <Posts gadget={livingPosts}/>
        <div className="main-section">
          <div className="left">
            <div className="picked-header">
              <h3>Picked</h3>
                <div className="picked-btn">
                  <button 
                    disabled={toggle}
                    className={!toggle ? '' : 'active'}
                    onClick={() => {
                    setChangeId(category?.results[2].id)
                    setToggle(prev => !prev)}}>
                      {category?.results[2].name}
                  </button>
                  <button 
                    disabled={!toggle}
                    className={!toggle ? 'active' : ''}
                    onClick={() => {
                    setChangeId(category?.results[3].id)
                    setToggle(prev => !prev)}}>
                      {category?.results[3].name}
                  </button>
                </div>
            </div>
            <div className='left-inner'>
              {
              (pickLoading) ? 
              <div className='loading' style={{opacity: 0.8}}>
                <img src="1488.gif" alt=""/>
              </div>
              :
              <div className='loading' style={{opacity: 0, zIndex: -999}}>
                <img src="1488.gif" alt=""/>
              </div>
              }
              <div className='left-inner'>
                <div className="picked-left">
                    <div className="picked-image">
                      <img src={changePost?.results[0].image} alt="" />
                    </div>
                    <div className="background"></div>
                    <div className="picked-inner">
                      <Link href={`/categories/${changePost?.results[0].category.id}`} style={{textDecoration: 'none'}}>
                        <span>{changePost?.results[0].category.name}</span>
                      </Link>
                      <Link href={`/posts/${changePost?.results[0].id}`}>{changePost?.results[0].title}</Link>
                      <div className="picked-inner-text">
                        <p>{changePost?.results[0].userId.name}<span>{format(changePost?.results[0].createdAt)}</span></p>
                      </div>
                    </div>
                </div>
                <div className="picked-right">
                  <div className="right-inner-column">
                    {
                      changePost?.results?.slice(1,5).map((data, i) => (
                        <div className="picked-right-inner" key={i}>
                          <div className='rate'>
                            <span>{data.viewCount}</span>
                          </div>
                          <div className="picked-right-image">
                            <img src={data.image} alt="" />
                          </div>
                          <div className="picked-right-text">
                            <Link href={`/categories/${data.category.id}`} style={{textDecoration: 'none'}}>
                              <span className={data.category.name}>{data.category.name}</span>
                            </Link>
                            <Link href={`/posts/${data.id}`}>{data.title}</Link>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className="main-gadget">
              <div className="gadget-header">
                <p>{gadgetPosts?.results[0].category.name}</p>
                <span>
                  <i className="bi bi-chevron-left"></i>
                  <i className="bi bi-chevron-right"></i>
                </span>
              </div>
              <div className="image">
                <img src={gadgetPosts?.results[0].image} alt="" />
                <div className="background"></div>
                <div className="main-gadget-inner">
                  <div className="gadget-text">
                    <div className="rate-catg">
                      <p>2.3</p>
                      <h4>{gadgetPosts?.results[0].category.name}</h4>
                    </div>
                    <Link href={`/posts/${gadgetPosts?.results[0].id}`}>{gadgetPosts?.results[0].title}</Link>
                    <span>{gadgetPosts?.results[0].userId.name}<p>.</p>{format(gadgetPosts?.results[0].createdAt)}</span>
                  </div>
                  <div className="slider-inner">
                    {
                      gadgetPosts?.results?.slice(1, 3).map((data, i) => (
                        <div className="gadget-slider" key={i}>
                          <div className="image">
                            <img src={data.image} alt=""/>
                          </div>
                          <div className="gadget-inner">
                            <Link href={`/posts/${data.id}`}>{data.title}</Link>
                            <span>{data.userId.name}<p>.</p>{format(data.createdAt)}</span>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>

              <div className="latest">
                <div className="gadget-header">
                  <p>Latest</p>
                  <span>View All</span>
                </div>
                <div className="latest-items">
                  {
                    latestPosts?.results?.map((data, i) => (
                      <div className="latest-item" key={i}>
                        <div className="latest-image">
                          <img src={data.image} alt=""/>
                        </div>
                        <div className="latest-text">
                          <Link href={`/categories/${data.category.id}`}>
                            <span className={data.category.name}>{data.category.name}</span>
                          </Link>
                          <Link href={`/posts/${data.id}`}>{data.title}</Link>
                          <span>{data.summary}</span>
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
                    {
                    (addIndex >= (posts?.totalResults)) ?
                    <button style={{background: '#eceefd', color: '#000'}}>That's All</button> :
                    <button onClick={handlMore}>More Posts<i className="bi bi-arrow-right"></i></button>
                    }
                  </div>
                </div>
              </div>
            </div>

            <div className="main-living">
              <div className="gadget-header">
                <p>{livingPosts?.results[0].category.name}</p>
                <span>
                  <i className={!(startIndex >= 1) ? 'bi bi-chevron-left' : 'bi bi-chevron-left next'} onClick={handlePrev}></i>
                  <i className={!(endIndex <= (livingPosts?.totalResults)) ? 'bi bi-chevron-right' : 'bi bi-chevron-right next'} onClick={handleNext}></i>
                </span>
              </div>
              <div className="living-items">
                {
                  livingPosts?.results?.slice(startIndex, endIndex).map((data, i) => (
                    <div className="living-item" key={i}>
                      <div className="living-image">
                        <img src={data.image} alt=""/>
                      </div>
                      <span className={data?.category.name}>
                        <Link href={`/categories/${data?.category.id}`}>{data?.category.name}</Link>
                      </span>
                      <div className="living-text">
                        <Link href={`/posts/${data?.id}`}>{data?.title}</Link>
                        <span>{data?.userId.name}<p>.</p>{format(data?.createdAt)}</span>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="latest">
                <div className="gadget-header">
                  <p>Latest</p>
                  <span>View All</span>
                </div>
                <div className="latest-row">
                  {
                    latestPosts?.results?.slice(0, 2).map((data, i) => (
                      <div className="latest-left" key={i}>
                        <div className="latest-image">
                          <img src={data.image} alt=""/>
                        </div>
                        <Link href={`/categories/${data.category.id}`} className={data.category.name}>{data.category.name}</Link>
                        <div className="living-text">
                          <Link href={`/posts/${data.id}`}>{data.title}</Link>
                          <span>{data.userId.name}<p>.</p>{format(data.createdAt)}</span>
                        </div>
                      </div>
                    ))
                  }
                </div>
                <div className="left-items">
                  {
                    latestPosts?.results?.slice(2, 6).map((data, i) => (
                      <div className="left-item" key={i}>
                        <div className="image">
                          <img src={data.image} alt=""/>
                        </div>
                        <div className="text-right">
                          <Link href={`/posts/${data.id}}`}>{data.title}</Link>
                          <span>{data.userId.name}<p>.</p>{format(data.createdAt)}</span>
                        </div>
                      </div>
                    ))
                  }
                </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}
