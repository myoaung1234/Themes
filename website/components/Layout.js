import React from 'react'
import Header from './Header'
import Footer from './Footer'
import MiniSlider from './MiniSlider'

const Layout = ({ children }) => {
  return (
   <div style={{background: '#f7f8fa'}}>
    <Header />
    <MiniSlider />
    <main>
        {children}
    </main>
    {/* <Footer /> */}
    <div className="sub-footer">
      <p>All Rights Reserved by Atlas © 2022</p>
      <span>
        <i class="bi bi-facebook"></i>
        <i class="bi bi-github"></i>
        <i class="bi bi-twitch"></i>
      </span>
    </div>
   </div>
   
  )
}

export default Layout