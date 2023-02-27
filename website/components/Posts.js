import React from 'react'

const Posts = () => {
  return (
    <>
      <div className="posts-container">
          <div className="post-header">
              <h3>Living</h3>
              <a href="#">View All</a>
          </div>
          <div className="post-container">
            <div className="post-item">
              <div className="post-image">
                <img src="https://images.pexels.com/photos/632035/pexels-photo-632035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
              </div>
              <div className="background"></div>
              <div className="post-inner">
                <span>STYLE</span>
                <a href="/posts/post"> Nostrum sint at xpedita molestiae, est debitis</a>
                <div className="post-inner-text">
                  <p>MYO AUNG<span>.5 MONTHS AGO</span></p>
                </div>
              </div>
            </div>

            <div className="post-item">
              <div className="post-image">
                <img src="https://images.pexels.com/photos/5420425/pexels-photo-5420425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
              </div>
              <div className="background"></div>
              <div className="post-inner">
                <span>STYLE</span>
                <a href="/posts/post"> Nostrum sint at xpedita molestiae, est debitis</a>
                <div className="post-inner-text">
                  <p>MYO AUNG<span>.5 MONTHS AGO</span></p>
                </div>
              </div>
            </div>

            <div className="post-item">
              <div className="post-image">
                <img src="https://images.pexels.com/photos/13071473/pexels-photo-13071473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
              </div>
              <div className="background"></div>
              <div className="post-inner">
                <div className="item3">
                  <span className='gold'>2.8</span>
                  <span>STYLE</span>
                </div>
                <a href="/posts/post" className='item3-title'> Nostrum sint at xpedita molestiae, est debitis</a>
                <div className="post-inner-text">
                  <p>MYO AUNG<span>.5 MONTHS AGO</span></p>
                </div>
              </div>
            </div>

            <div className="post-item">
              <div className="post-image">
                <img src="https://images.pexels.com/photos/9453324/pexels-photo-9453324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
              </div>
              <div className="background"></div>
              <div className="post-inner">
                <span>STYLE</span>
                <a href="/posts/post"> Nostrum sint at xpedita molestiae, est debitis</a>
                <div className="post-inner-text">
                  <p>MYO AUNG<span>.5 MONTHS AGO</span></p>
                </div>
              </div>
            </div>

            <div className="post-item">
              <div className="post-image">
                <img src="https://images.pexels.com/photos/9583462/pexels-photo-9583462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
              </div>
              <div className="background"></div>
              <div className="post-inner">
                <div className="item5">
                  <span className='green'>8.7</span>
                  <span>STYLE</span>
                </div>
                <a href="/posts/post"> Nostrum sint at xpedita molestiae, est debitis</a>
                <div className="post-inner-text">
                  <p>MYO AUNG<span>.5 MONTHS AGO</span></p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
    </>
  )
}

export default Posts
