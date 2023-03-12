import React from 'react'
import Header from './Header'

const Layout = ({ children }) => {
  return (
   <div className='main-container'>
    <Header />
    <main>
        {children}
    </main>
    {/* <Footer /> */}
    <div className="sub-footer">
      <p>Developed by Myo Aung @ 2023</p>
      <span>
        <i className="bi bi-facebook"></i>
        <i className="bi bi-github"></i>
        <i className="bi bi-twitch"></i>
      </span>
    </div>
   </div>
   
  )
}

export default Layout