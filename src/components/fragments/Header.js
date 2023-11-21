import React, { useEffect, useState } from 'react';
import '../css/style.css';
import { IoBarbellSharp, IoCloseSharp } from "react-icons/io5";

const Header = () => {
  const [isNavbarActive, setNavbarActive] = useState(false);
  const [isHeaderActive, setHeaderActive] = useState(false);

  const toggleNavbar = () => {
    setNavbarActive((prev) => !prev);
  };

  const closeNavbar = () => {
    setNavbarActive(false);
  };

  const handleScroll = () => {
    if (window.scrollY >= 100) {
      setHeaderActive(true);
    } else {
      setHeaderActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isHeaderActive ? 'active' : ''}`} data-header>
      <div className="container">
        <a href="#" className="logo">
          <IoBarbellSharp aria-label="true" />
          <span className="span">Fitlife</span>
        </a>

        <nav className={`navbar ${isNavbarActive ? 'active' : ''}`} data-navbar>
          <button className="nav-close-btn" aria-label="close menu" onClick={toggleNavbar}>
            <IoCloseSharp/>
          </button>

          <ul className="navbar-list">
            <li>
              <a href="#home" className="navbar-link active" onClick={closeNavbar}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="navbar-link" onClick={closeNavbar}>
                About Us
              </a>
            </li>
            <li>
              <a href="#class" className="navbar-link" onClick={closeNavbar}>
                Classes
              </a>
            </li>
            <li>
              <a href="#blog" className="navbar-link" onClick={closeNavbar}>
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="navbar-link" onClick={closeNavbar}>
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        <a href="#" className="btn btn-secondary">
          Join Now
        </a>

        <button className="nav-open-btn" aria-label="open menu" onClick={toggleNavbar}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
