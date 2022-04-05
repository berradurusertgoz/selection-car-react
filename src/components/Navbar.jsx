import React from 'react'
import{ BrowserRouter as Router,
Link
} from "react-router-dom"

function Navbar() {
  return (
   
    <div className='top-bar'>
        <div className="oval"></div>
        <div className="logo">
        </div>
        <nav className="navbars">
          <ul>
            <li><Link to="/">MODELS</Link></li>
            <li><Link to="/colors">COLORS</Link></li>
            <li><Link to="/accessories">ACCESSORIES</Link></li>
            <li><Link to="/summary">SUMMARY</Link></li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar