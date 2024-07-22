import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

function Footer() {
  return (
    <>
        <div className="footer">
            <h1>FOOTER</h1>
        </div>
        <div>
            <Link to="/home">Home</Link>
            <Link to="/blue">Blue</Link>
            <Link to="/red">Red</Link>
        </div>
    </>
  )
}

export default Footer