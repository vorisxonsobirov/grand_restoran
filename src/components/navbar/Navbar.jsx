import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <Link to="/"><h1>logo</h1> </Link>
          </div>
          <div className="links">
            {/* <Link to="/menu"><p>Menu</p></Link> */}
            <Link to="/delivery"><p>Yetkazib berish</p></Link>
            <Link to="/contact"><p>Aloqa</p></Link>
            <Link to="/about"><p>Biz haqimizda</p></Link>
            <Link to="/login"><button>Sign in</button></Link>
            <button>Korzinka</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default Navbar
