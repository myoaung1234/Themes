import React from 'react'
import { useRouter } from 'next/router'

const category = () => {
    const router = useRouter()

    console.log(router.query.category_id)
  return (
    <div>
      <div className="category_sidebar">
            <div className="latest">
                <div className="gadget-header">
                  <p>STYLE</p>
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
    </div>
  )
}

export default category
