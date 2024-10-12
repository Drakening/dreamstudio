import './navbar.css';
import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Logo />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements ${showNavbar ? "active" : ""}`}>
          <ul>
            {["home", "about", "services", "pricing"].map((item) => (
              <li key={item}>
                <Link
                  to={item}
                  smooth={true}
                  duration={500}
                  onClick={() => setShowNavbar(false)}
                >
                  {item === "about" ? "About Us" : item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="ContactBtn">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};


const Hamburger = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="52"
    height="24"
    viewBox="0 0 52 24"
  >
    <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
      <rect
        id="Rectangle_3"
        data-name="Rectangle 3"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 47)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_5"
        data-name="Rectangle 5"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 67)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_4"
        data-name="Rectangle 4"
        width="52"
        height="4"
        rx="2"
        transform="translate(294 57)"
        fill="#574c4c"
      />
    </g>
  </svg>
);

const Logo = () => (
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
  <path d="M0 0 C10.56 0 21.12 0 32 0 C32 10.56 32 21.12 32 32 C21.44 32 10.88 32 0 32 C0 21.44 0 10.88 0 0 Z " fill="#249DEE" transform="translate(0,0)"/>
  <path d="M0 0 C2.625 1.4375 2.625 1.4375 4 4 C4.69371021 8.37445499 4.50014436 11.88062929 2.6875 15.9375 C1 18 1 18 -2 20 C-4.69921875 20.1953125 -4.69921875 20.1953125 -7.6875 20.125 C-9.17830078 20.09792969 -9.17830078 20.09792969 -10.69921875 20.0703125 C-11.45847656 20.04710938 -12.21773437 20.02390625 -13 20 C-13 19.34 -13 18.68 -13 18 C-13.99 17.67 -14.98 17.34 -16 17 C-16 16.34 -16 15.68 -16 15 C-15.01 15 -14.02 15 -13 15 C-12.896875 14.113125 -12.79375 13.22625 -12.6875 12.3125 C-11.98585972 8.93186954 -10.97842082 6.80276282 -9 4 C-8.67 4 -8.34 4 -8 4 C-7.92345464 8.51617599 -7.89771304 12.59085217 -9 17 C-4.17557816 15.73053486 -4.17557816 15.73053486 -1 12 C-0.66661404 8.45812169 -0.66661404 8.45812169 -1 5 C-1.66 4.34 -2.32 3.68 -3 3 C-5.44963177 2.97746557 -5.44963177 2.97746557 -8.125 3.375 C-9.03507813 3.48585938 -9.94515625 3.59671875 -10.8828125 3.7109375 C-11.93082031 3.85402344 -11.93082031 3.85402344 -13 4 C-13 3.34 -13 2.68 -13 2 C-8.74772683 -0.83484878 -4.98866229 -0.62868576 0 0 Z " fill="#EEF7FD" transform="translate(22,6)"/>
  </svg>
);

export default Navbar;