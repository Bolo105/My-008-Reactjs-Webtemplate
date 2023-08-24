import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'; 
import styled from 'styled-components'

const StyledNavbar = styled.nav`
  top: -100px;
  transition: 0.5s;

  & .navbar-brand {
    position: relative;
    padding-right: 50px;
    height: 75px;
    display: flex;
    align-items: center;
    background: #fa464c;

    &::after {
      position: absolute;
      content: "";
      width: 50px;
      height: 100%;
      top: 0;
      right: -25px;
      transform: skewX(-30deg);
      background-color: #fa464c;
    }
  }
  
  & .navbar-nav .nav-link {
    margin-right: 35px;
    padding: 20px 0;
    color: #506172;
    font-size: 18px;
    font-weight: 500;
    outline: none;
    &.active {
      color: #fa464c;
    }
    &:hover {
      color: #fa464c;
    }
    @media (max-width: 991.98px) {
        margin-right: 0;
        padding: 10px 0;
    }
  }

  & .dropdown-toggle::after {
    border: none;
    content: "\f107";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    vertical-align: middle;
    margin-left: 8px;
  }
`;

const Btn  = styled.a`
    background-color: #fa464c;
    color: #fff;
    border-radius: 0;
    transition: .5s;
    font-weight: 500;
    &:hover {
      background-color: #fa464c;
    }
   
`;
const NavN = styled.div`
    @media (max-width: 991.98px) {
      border-top: 1px solid #EEEEEE;
    }
`;

export const Navbar = () => {

  useEffect(() => {
    const handleScroll = () => {
      const stickyMenu = document.querySelector('.sticky-top');
      if (window.scrollY > 300) {
        stickyMenu.classList.add('bg-white', 'shadow-sm');
        stickyMenu.style.top = '-1px';
      } else {
        stickyMenu.classList.remove('bg-white', 'shadow-sm');
        stickyMenu.style.top = '-100px';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <StyledNavbar className="navbar navbar-expand-lg bg-white navbar-light sticky-top py-0 pe-5">
        <a href="index.html" className="navbar-brand ps-5 me-0">
            <h1 className="text-white m-0">engineers.inc</h1>
        </a>
        <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <NavN className= 'navbar-nav ms-auto p-4 p-lg-0' >
                <Link to='/' className="nav-item nav-link active">Home</Link>
                <Link to='/about'  className="nav-item nav-link">About</Link>
                <Link to='/services' className="nav-item nav-link">Services</Link>
                <div className="nav-item dropdown">
                    <a href="#/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div className="dropdown-menu bg-light m-0">
                        <a href="/projects" className="dropdown-item">Projects</a>
                        <a href="/features" className="dropdown-item">Features</a>
                        <a href="/team" className="dropdown-item">Our Team</a>
                        <a href="404.html" className="dropdown-item">404 Page</a>
                    </div>
                </div>
                <Link to='/contact' className="nav-item nav-link">Contact</Link>
            </NavN>
            <Btn href="/" className="btn px-3 d-none d-lg-block">Get A Quote</Btn>
        </div>
    </StyledNavbar>
  )
}
