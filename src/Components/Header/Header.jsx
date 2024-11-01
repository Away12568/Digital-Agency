import React from 'react'
import "./Header.css"


const Header = () => {
  return (
    <>
    <header className="header">
        <div className="container">
            <div className="header__wrapper">

                <h1>Digital Agency</h1>

                <div className="menu">
                    <a href="">home</a>
                    <a href="">About</a>
                    <a href="">Testimonials</a>
                    <a href="">contact</a>
                </div>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header