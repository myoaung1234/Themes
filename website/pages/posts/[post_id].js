import React from 'react'
import { useRouter } from 'next/router'

const post = () => {
  const router = useRouter()

  console.log(router.query.post_id)
  return (
        <div className="posts_container">
          <div className="hero-section">
            <div className="hero-posts">
              <div className="hero-image">
                <img src="https://images.pexels.com/photos/11201646/pexels-photo-11201646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                <div className="background"></div>
              </div>
              <div className="hero-text">
                <p><a href="/">Home</a><i class="bi bi-caret-right-fill"></i><a href="/categories/category">STYLE</a></p>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quis?</h1>
                <div className="hero-poster">
                  <div className="image">
                    <img src="https://images.pexels.com/photos/11201649/pexels-photo-11201649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                  </div>
                  <div className="poster-text">
                    <h3>Myo Aung</h3>
                    <span>5 MONTHS AGO</span>
                  </div>
                </div>

              </div>
            </div>
            <div className="hero-post-text">
              <p><span>Lorem ipsum</span> dolor sit amet consectetur adipisicing elit. Fugit repellat
              consectetur ullam, natus dignissimos reprehenderit repudiandae minus 
              pariatur, totam similique, adipisci quas praesentium. Aspernatur deserunt
              voluptatum quos praesentium facere aliquid.</p>
              <div className="quotes_text">
                <i class="bi bi-quote"></i>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Esse suscipit deleniti ipsa assumenda facilis hic non 
                  sunt odit ipsum ut.
                  <span>_John Doe</span>
                </p>
              </div>
              <h1>Origins and Discovery</h1>
              <p>The purpose of lorem ipsum is to create a natural looking block of 
                text (sentence, paragraph, page, etc.) that doesn't distract from 
                the layout. A practice not without controversy, laying out pages 
                with meaningless filler text can be very useful when the focus is 
                meant to be on design, not content.</p>
              <ul>
                <li>What is Lorem Ipsum</li>
                <li>Where does it come from</li>
                <li>Where can I get some</li>
              </ul>
              <h1>Meaning of Lorem Ipsum</h1>
              <p>There are many variations of passages of Lorem Ipsum 
                available, but the majority have suffered alteration 
                in some form, by injected humour.</p>
              <h1>Why do we use it</h1>
              <p>It is a long established fact that a reader will be 
                distracted by the readable content of a page when looking 
                at its layout. </p>
            </div>
            <div className="poster-info">
                <div className="hero-poster">
                  <div className="image">
                    <img src="https://images.pexels.com/photos/11201649/pexels-photo-11201649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                  </div>
                  <div className="poster-text">
                    <span>POSTED BY</span>
                    <h2>Myo Aung</h2>
                  </div>
                </div>
                <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
            </div>
            <div className="related-posts">
              <div className="gadget-header">
                <p>Related</p>
                <span>View All</span>
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
          </div>
          <div className="posts_sidebar">
            <div className="picked-item">
                <div className="right-header">
                  <h3>Picked</h3>
                  <span>View All</span>
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
                  <div className="image">
                    <img src="https://images.pexels.com/photos/12372195/pexels-photo-12372195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                  </div>
                  <div className="text-right">
                    <a>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, mollitia?</a>
                    <span>5 MONTHS AGO</span>
                  </div>
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
          </div>
        </div>
  )
}

export default post