import React from 'react'
import "./header.css"
import Companylogo from '../../assets/company_logo.png'

const Header = () => {
  return (
    <div className='container-section '>
            <nav className="navbar navbar-expand-lg navbar-sticky ">
                <div className=" nav-spacing container-fluid">
                    <img className='company-logo' src={Companylogo} alt="" srcset="" />
                    <a className="company-name navbar-brand" href="#"> clay</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className=" header-links collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link  underline" aria-current="page" href="#">Work</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link underline" href="#">Clients</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link underline" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link underline" href="#">About</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link underline" href="#">Blog</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link underline" href="#">Contact</a>
                        </li>

                    </ul>
                    </div>
                </div>
            </nav>
    </div>
  )
}

export default Header