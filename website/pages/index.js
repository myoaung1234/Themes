
import Posts from '@/components/Posts';
import Slider from '@/components/Slider';
import Head from 'next/head';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import axios from 'axios';
import React, { useEffect, useState } from 'react'


export default function Home() {
  const [posts, setPosts] = useState()

  const getPosts = async () => {
    let url = `http://localhost:5000/v1/posts?page=1&limit=4`
    const resultPost = await ( await axios.get(url)).data
    setPosts(resultPost);
  }

  useEffect(() => {
    getPosts()
  }, [])

  console.log(posts?.results)

  
  return (
    <>
      <Head>
        <title>Themes Celebrity</title>
      </Head>
      <div className="container">
        <Slider />
        <Posts />
        <div className="main-section">
          <div className="left">
            <div className="picked-header">
              <h3>Picked</h3>
              <div className="picked-btn">
                <a className='active'>Style</a>
                <a>Living</a>
              </div>
            </div>
              
            <div className='left-inner'>
              <div className="picked-left">
                  <div className="picked-image">
                    <img src="https://images.pexels.com/photos/4940430/pexels-photo-4940430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                  </div>
                  <div className="background"></div>
                  <div className="picked-inner">
                    <span>STYLE</span>
                    <a href="/posts/post"> Nostrum sint at xpedita molestiae, est debitis</a>
                    <div className="picked-inner-text">
                      <p>MYO AUNG<span>.5 MONTHS AGO</span></p>
                    </div>
                  </div>
              </div>

              <div className="picked-right">
                <div className="right-inner-column">

                  <div className="picked-right-inner">
                    <div className="picked-right-image">
                      <img src="https://images.pexels.com/photos/12372195/pexels-photo-12372195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    </div>
                    <div className="picked-right-text">
                      <span className="style">STYLE</span>
                      <a href="/posts/post">Lorem ipsum dolor sit amet consec Iste, unde?</a>
                    </div>
                  </div>

                  <div className="picked-right-inner">
                    <div className="picked-right-image">
                      <img src="https://images.pexels.com/photos/11534580/pexels-photo-11534580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    </div>
                    <div className="picked-right-text">
                      <span className="style">STYLE</span>
                      <a href="/posts/post">Hello! Lorem ipsum dolor sit amet consec Iste, unde?</a>
                    </div>
                  </div>

                  <div className="picked-right-inner">
                    <div className="picked-right-image">
                      <img src="https://images.pexels.com/photos/12349051/pexels-photo-12349051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    </div>
                    <div className="picked-right-text">
                      <span className="gadget">GADGET</span>
                      <a href="/posts/post">Hello! Lorem ipsum dolor sit amet consec Iste, unde?</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='left-inner'>
              <div className="picked-left">
                  <div className="picked-image">
                    <img src="https://images.pexels.com/photos/14726376/pexels-photo-14726376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                  </div>
                  <div className="background"></div>
                  <div className="picked-inner">
                    <span>LIVING</span>
                    <a href="/posts/post"> Nostrum sint at xpedita molestiae, est debitis</a>
                    <div className="picked-inner-text">
                      <p>MYO AUNG<span>.5 MONTHS AGO</span></p>
                    </div>
                  </div>
              </div>

              <div className="picked-right">
                <div className="right-inner-column">
                  
                  <div className="picked-right-inner">
                    <div className="rate"><span>8.7</span></div>
                    <div className="picked-right-image">
                      <img src="https://images.pexels.com/photos/13199304/pexels-photo-13199304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    </div>
                    <div className="picked-right-text">
                      <span className="style">STYLE</span>
                      <a href="/posts/post">Lorem ipsum dolor sit amet consec Iste, unde?</a>
                    </div>
                  </div>

                  <div className="picked-right-inner">
                    <div className="picked-right-image">
                      <img src="https://images.pexels.com/photos/12372195/pexels-photo-12372195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    </div>
                    <div className="picked-right-text">
                      <span className="style">STYLE</span>
                      <a href="/posts/post">Lorem ipsum dolor sit amet consec Iste, unde?</a>
                    </div>
                  </div>

                  <div className="picked-right-inner">
                    <div className="picked-right-image">
                      <img src="https://images.pexels.com/photos/11534580/pexels-photo-11534580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    </div>
                    <div className="picked-right-text">
                      <span className="style">STYLE</span>
                      <a href="/posts/post">Lorem ipsum dolor sit amet consec Iste, unde?</a>
                    </div>
                  </div>

                  <div className="picked-right-inner">
                    <div className="picked-right-image">
                      <img src="https://images.pexels.com/photos/12349051/pexels-photo-12349051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    </div>
                    <div className="picked-right-text">
                      <span className="gadget">GADGET</span>
                      <a href="/posts/post">Lorem ipsum dolor sit amet consec Iste, unde?</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="main-gadget">
              <div className="gadget-header">
                <p>Gadget</p>
                <span>
                  <i className="bi bi-chevron-left"></i>
                  <i className="bi bi-chevron-right"></i>
                </span>
              </div>
              <div className="image">
                <img src="https://images.pexels.com/photos/12349053/pexels-photo-12349053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <div className="background"></div>
                <div className="main-gadget-inner">
                  <div className="gadget-text">
                    <div className="rate-catg">
                      <p>2.8</p>
                      <h4>GADGET</h4>
                    </div>
                    <a href="/posts/post"> Lorem ipsum dolor sit amet consectetur . Excepturi, commodi.</a>
                    <span>MYO AUNG <p>.</p>5 MONTHS AGO</span>
                  </div>
                  <div className="slider-inner">
                    <div className="gadget-slider">
                      <div className="image">
                        <img src="https://images.pexels.com/photos/15182940/pexels-photo-15182940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                      </div>
                      <div className="gadget-inner">
                        <a href="/posts/post">Amet consectetur adipisicing elit. Voluptatibus, possimus?</a>
                        <span>MYO AUNG <p>.</p> 5 MONTHS AGO</span>
                      </div>
                    </div>

                    <div className="gadget-slider">
                      <div className="image">
                        <img src="https://images.pexels.com/photos/4034528/pexels-photo-4034528.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                      </div>
                      <div className="gadget-inner">
                        <a href="/posts/post">Amet consectetur adipisicing elit. Voluptatibus, possimus?</a>
                        <span>MYO AUNG <p>.</p> 5 MONTHS AGO</span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div className="latest">
                <div className="gadget-header">
                  <p>Latest</p>
                  <span>View All</span>
                </div>
                <div className="latest-items">

                  <div className="latest-item">
                    <div className="latest-image">
                      <img src="https://images.pexels.com/photos/5915533/pexels-photo-5915533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                    </div>
                    <div className="latest-text">
                      <span className="style">STYLE</span>
                      <a href="/posts/post"> Dolor sit, amet consectetur adipisicing elit. Mollitia, ipsa!</a>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id expedita veritatis qui possimus doloribus recusandae harum temporibus, magnam ullam blanditiis!</p>
                      <div className="latest-post-owner">
                        <div className="latest-inner">
                          <div className="image">
                            <img src="https://images.pexels.com/photos/12228773/pexels-photo-12228773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                          </div>
                          <div className="latest-text">
                            <p>MYO AUNG</p>
                            <span>5 MONTHS AGO</span>
                          </div>
                        </div>
                        <a href="#">KEEP READING</a>
                      </div>
                    </div>
                  </div>

                  <div className="latest-item">
                    <div className="latest-image">
                      <img src="https://images.pexels.com/photos/11776257/pexels-photo-11776257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                    </div>
                    <div className="latest-text">
                      <span className="gadget">GADGET</span>
                      <a href="/posts/123">Hello! Dolor sit, amet consectetur adipisicing elit. Mollitia, ipsa!</a>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id expedita veritatis qui possimus doloribus recusandae harum temporibus, magnam ullam blanditiis!</p>
                      <div className="latest-post-owner">
                        <div className="latest-inner">
                          <div className="image">
                            <img src="https://images.pexels.com/photos/12228773/pexels-photo-12228773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                          </div>
                          <div className="latest-text">
                            <p>MYO AUNG</p>
                            <span>5 MONTHS AGO</span>
                          </div>
                        </div>
                        <a href="#">KEEP READING</a>
                      </div>
                    </div>
                  </div>

                  <div className="latest-item">
                    <div className="latest-image">
                      <img src="https://images.pexels.com/photos/12556833/pexels-photo-12556833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                    </div>
                    <div className="latest-text">
                      <span className="style">FOOD</span>
                      <a href="/posts/124"> Dolor sit, amet consectetur adipisicing elit. Mollitia, ipsa!</a>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id expedita veritatis qui possimus doloribus recusandae harum temporibus, magnam ullam blanditiis!</p>
                      <div className="latest-post-owner">
                        <div className="latest-inner">
                          <div className="image">
                            <img src="https://images.pexels.com/photos/12228773/pexels-photo-12228773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                          </div>
                          <div className="latest-text">
                            <p>MYO AUNG</p>
                            <span>5 MONTHS AGO</span>
                          </div>
                        </div>
                        <a href="#">KEEP READING</a>
                      </div>
                    </div>
                  </div>

                  <div className="latest-item">
                    <div className="latest-image">
                      <img src="https://images.pexels.com/photos/11590652/pexels-photo-11590652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                    </div>
                    <div className="latest-text">
                      <span className="style">FOOD</span>
                      <a href="/posts/post"> Dolor sit, amet consectetur adipisicing elit. Mollitia, ipsa!</a>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id expedita veritatis qui possimus doloribus recusandae harum temporibus, magnam ullam blanditiis!</p>
                      <div className="latest-post-owner">
                        <div className="latest-inner">
                          <div className="image">
                            <img src="https://images.pexels.com/photos/12228773/pexels-photo-12228773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                          </div>
                          <div className="latest-text">
                            <p>MYO AUNG</p>
                            <span>5 MONTHS AGO</span>
                          </div>
                        </div>
                        <a href="#">KEEP READING</a>
                      </div>
                    </div>
                  </div>

                  <div className="latest-item">
                    <div className="latest-image">
                      <img src="https://images.pexels.com/photos/12524756/pexels-photo-12524756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                    </div>
                    <div className="latest-text">
                      <span className="style">STYLE</span>
                      <a href="/posts/post"> Dolor sit, amet consectetur adipisicing elit. Mollitia, ipsa!</a>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id expedita veritatis qui possimus doloribus recusandae harum temporibus, magnam ullam blanditiis!</p>
                      <div className="latest-post-owner">
                        <div className="latest-inner">
                          <div className="image">
                            <img src="https://images.pexels.com/photos/12228773/pexels-photo-12228773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                          </div>
                          <div className="latest-text">
                            <p>MYO AUNG</p>
                            <span>5 MONTHS AGO</span>
                          </div>
                        </div>
                        <a href="#">KEEP READING</a>
                      </div>
                    </div>
                  </div>

                  <div className="more-posts">
                    <button type="button">More Posts<i className="bi bi-arrow-right"></i></button>
                  </div>
                  
                </div>
              </div>
            </div>

            <div className="main-living">
              <div className="gadget-header">
                <p>Living</p>
                <span>
                  <i className="bi bi-chevron-left"></i>
                  <i className="bi bi-chevron-right"></i>
                </span>
              </div>

              <div className="living-items">

                <div className="living-item">
                  <div className="living-image">
                    <img src="https://images.pexels.com/photos/9638827/pexels-photo-9638827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                  </div>
                  <span>LIVING</span>
                  <div className="living-text">
                    <a href="/posts/post">Sit amet consectetur adipisicing elit. Aspernatur, cum.</a>
                    <span>MYO AUNG <p>.</p>4 MONTHS</span>
                  </div>
                </div>

                <div className="living-item">
                  <div className="living-image">
                    <img src="https://images.pexels.com/photos/9416735/pexels-photo-9416735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                  </div>
                  <span>LIVING</span>
                  <div className="living-text">
                    <a href="/posts/post">Sit amet consectetur adipisicing elit. Aspernatur, cum.</a>
                    <span>MYO AUNG <p>.</p>4 MONTHS</span>
                  </div>
                </div>

                <div className="living-item">
                  <div className="living-image">
                    <img src="https://images.pexels.com/photos/9416141/pexels-photo-9416141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                  </div>
                  <span>LIVING</span>
                  <div className="living-text">
                    <a href="/posts/post">Sit amet consectetur adipisicing elit. Aspernatur, cum.</a>
                    <span>MYO AUNG <p>.</p>4 MONTHS</span>
                  </div>
                </div>

              </div>

            </div>

            <div className="latest">
                <div className="gadget-header">
                  <p>Latest</p>
                  <span>View All</span>
                </div>

                <div className="latest-row">

                  <div className="latest-left">
                    <div className="latest-image">
                      <img src="https://images.pexels.com/photos/9416137/pexels-photo-9416137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                    </div>
                    <span className="style">STYLE</span>
                    <div className="living-text">
                      <a href="/posts/post">Sit amet conse elit. Aspernatur, cum.</a>
                      <span>MYO AUNG <p>.</p>4 MONTHS</span>
                    </div>
                  </div>

                  <div className="latest-left">
                    <div className="latest-image">
                      <img src="https://images.pexels.com/photos/6839159/pexels-photo-6839159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                    </div>
                    <span className="gadget">GADGET</span>
                    <div className="living-text">
                      <a href="/posts/post">Sit amet conscing elit cum.</a>
                      <span>MYO AUNG <p>.</p>4 MONTHS</span>
                    </div>
                  </div>

                </div>

                <div className="left-items">
                  <div className="left-item">
                    <div className="image">
                      <img src="https://images.pexels.com/photos/4940430/pexels-photo-4940430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                    </div>
                    <div className="text-right">
                      <a href="/posts/post">Lorem ipsum, mollitia? Lorem ipsum dolor sit.</a>
                      <span>MYO AUNG <p>.</p> 5 MONTHS AGO</span>
                    </div>
                  </div>

                  <div className="left-item">
                    <div className="image">
                      <img src="https://images.pexels.com/photos/13199304/pexels-photo-13199304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                    </div>
                    <div className="text-right">
                      <a href="/posts/post">Lorem isicing elit. Corporis, mollitia?</a>
                      <span>MYO AUNG <p>.</p> 5 MONTHS AGO</span>
                    </div>
                  </div>

                  <div className="left-item">
                    <div className="image">
                      <img src="https://images.pexels.com/photos/13199304/pexels-photo-13199304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                    </div>
                    <div className="text-right">
                      <a href="/posts/post">Lorem iectetur Corporis, mollitia?</a>
                      <span>MYO AUNG <p>.</p> 5 MONTHS AGO</span>
                    </div>
                  </div>

                  <div className="left-item">
                    <div className="image">
                      <img src="https://images.pexels.com/photos/13199304/pexels-photo-13199304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                    </div>
                    <div className="text-right">
                      <a href="/posts/post">Lorer adipisicing elit. Corporis, mollitia?</a>
                      <span>MYO AUNG <p>.</p> 5 MONTHS AGO</span>
                    </div>
                  </div>

                </div>

              </div>
          </div>

          <div className="right">
              <div className="picked-item">
                <div className="right-header">
                  <h3>Picked</h3>
                  <span>Food<i className="bi bi-arrow-right"></i></span>
                </div>
                <div className="right-picked-item">
                  <div className="image">
                    <img src="https://images.pexels.com/photos/4940430/pexels-photo-4940430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                  </div>
                  <div className="text-right">
                    <a href='/posts/post'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, mollitia?</a>
                    <span>5 MONTHS AGO</span>
                  </div>
                </div>

                <div className="right-picked-item">
                  <div className="rate"><span>8.7</span></div>
                  <div className="image">
                    <img src="https://images.pexels.com/photos/13199304/pexels-photo-13199304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                  </div>
                  <div className="text-right">
                    <a href='/posts/post'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, mollitia?</a>
                    <span>5 MONTHS AGO</span>
                  </div>
                </div>

                <div className="right-picked-item">
                  <div className="image">
                    <img src="https://images.pexels.com/photos/12372195/pexels-photo-12372195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                  </div>
                  <div className="text-right">
                    <a>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, mollitia?</a>
                    <span>5 MONTHS AGO</span>
                  </div>
                </div>
              </div>

              <div className="label-items">
                <p>Labels</p>

                <div className="label-item">
                  <img src="https://images.pexels.com/photos/14829062/pexels-photo-14829062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                  <div className="background"></div>
                  <div className="label-inner">
                    <h2>Food</h2>
                    <span>4</span>
                  </div>
                </div>

                <div className="label-item">
                  <img src="https://images.pexels.com/photos/14642638/pexels-photo-14642638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                  <div className="background"></div>
                  <div className="label-inner">
                    <h2>Style</h2>
                    <span>4</span>
                  </div>
                </div>

                <div className="label-item">
                  <img src="https://images.pexels.com/photos/11921852/pexels-photo-11921852.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""/>
                  <div className="background"></div>
                  <div className="label-inner">
                    <h2>Gadget</h2>
                    <span>4</span>
                  </div>
                </div>

                <div className="label-item">
                  <img src="https://images.pexels.com/photos/13849323/pexels-photo-13849323.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""/>
                  <div className="background"></div>
                  <div className="label-inner">
                    <h2>Living</h2>
                    <span>4</span>
                  </div>
                </div>

              </div>

              <div className="gadget-items">
                <div className="gadget-header">
                  <p>Gadget</p>
                  <span>View All</span>
                </div>

                <div className="gadget-item">
                  <p>01</p>
                  <div className="gadget-inner">
                    <a href='/posts/post'>Lorem ipsum, dolor sit amet consectetur  deserunt.</a>
                    <span>MYO AUNG<p>.</p>5 MONTHS AGE</span>
                  </div>
                </div>

                <div className="gadget-item">
                  <p>02</p>
                  <div className="gadget-inner">
                    <a href='/posts/post'>Lorem ipsum, dolor sit amet consectetur  deserunt.</a>
                    <span>MYO AUNG<p>.</p>5 MONTHS AGE</span>
                  </div>
                </div>

                <div className="gadget-item">
                  <p>03</p>
                  <div className="gadget-inner">
                    <a href='/posts/post'>Lorem ipsum, dolor sit amet consectetur  deserunt.</a>
                    <span>MYO AUNG<p>.</p>5 MONTHS AGE</span>
                  </div>
                </div>

                <div className="gadget-item">
                  <p>04</p>
                  <div className="gadget-inner">
                    <a href='/posts/post'>Lorem ipsum, dolor sit amet consectetur  deserunt.</a>
                    <span>MYO AUNG<p>.</p>5 MONTHS AGE</span>
                  </div>
                </div>

              </div>

              <div className="social-join-us">
                <p>Join us</p>
                <div className="join-us">
                  
                  <div className="social-item">
                    <i className="bi bi-facebook"></i>
                    <div className="social-text">
                      <p>facebook</p>
                      <span className="facebook">200k</span>
                    </div>
                  </div>

                  <div className="social-item">
                    <i className="bi bi-twitter"></i>
                    <div className="social-text">
                      <p>twitter</p>
                      <span className="twitter">50k</span>
                    </div>
                  </div>

                  <div className="social-item">
                    <i className="bi bi-twitch"></i>
                    <div className="social-text">
                      <p>twitch</p>
                      <span className="twitch">564</span>
                    </div>
                  </div>

                  <div className="social-item">
                    <i className="bi bi-instagram"></i>
                    <div className="social-text">
                      <p>instagram</p>
                      <span className="instagram">1m</span>
                    </div>
                  </div>

                </div>
              </div>

              <div className="quotes">
                <p>Quotes</p>
                <div className="quotes-inner">
                  <i className="bi bi-quote"></i>
                  <p>Life is what happens when you're busy making other plans</p>
                </div>
                <span>_John Lennon</span>
                <div className="line"></div>
              </div>

              
              <div className="living-header">
                  <h3>Living</h3>
                  <a href="#">View All</a>
                </div>
              <div className="living">
                <div className="living-image">
                  <img src="https://images.pexels.com/photos/4940430/pexels-photo-4940430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                </div>
                <div className="background"></div>
                <div className="picked-inner">
                  <span>LIVING</span>
                  <a href="/posts/post"> Nostrum sint at xpedita molestiae, est debitis</a>
                  <div className="picked-inner-text">
                    <p>MYO AUNG<span>.5 MONTHS AGO</span></p>
                  </div>
                </div>
              </div>

              <div className="picked-item">
                <div className="right-picked-item">
                  <div className="image">
                    <img src="https://images.pexels.com/photos/4940430/pexels-photo-4940430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                  </div>
                  <div className="text-right">
                    <a href='/posts/post'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, mollitia?</a>
                    <span>5 MONTHS AGO</span>
                  </div>
                </div>

                <div className="right-picked-item">
                  <div className="rate"><span>8.7</span></div>
                  <div className="image">
                    <img src="https://images.pexels.com/photos/13199304/pexels-photo-13199304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                  </div>
                  <div className="text-right">
                    <a href='/posts/post'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, mollitia?</a>
                    <span>5 MONTHS AGO</span>
                  </div>
                </div>

              </div>

          </div>
        </div>
      </div>
    </>
  )
}
