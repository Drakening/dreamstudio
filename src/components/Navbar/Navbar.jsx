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
            {["home", "about", "services", "pricing", "contact"].map((item) => (
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
  <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M64 81.37a31.952 31.952 0 0 0 2-63.841V9.323a2 2 0 0 0-4 0v8.205a31.952 31.952 0 0 0 2 63.842zm0-59.91a27.955 27.955 0 1 1-27.955 27.955A27.987 27.987 0 0 1 64 21.46z"/><path d="m53.6 56.984 3.461-3.46a8.016 8.016 0 0 1-.876-2.109h-3.842a22.129 22.129 0 0 0 1.257 5.569zM52.343 47.415h3.844a8.016 8.016 0 0 1 .876-2.109L53.6 41.845a22.13 22.13 0 0 0-1.257 5.57zM79.105 55.172c.168-.158.348-.3.512-.463l5.294-5.295-5.294-5.294c-.164-.164-.344-.3-.512-.463a26.263 26.263 0 0 1 .641 5.586c0 .057.017.112.017.171s-.012.114-.017.171a26.263 26.263 0 0 1-.641 5.587zM76.543 36.87a25.992 25.992 0 0 1 5.9 4.422l2.573 2.574A21.819 21.819 0 0 0 69.548 28.4l2.575 2.575a26 26 0 0 1 4.42 5.895zM76.543 61.959a26 26 0 0 1-4.42 5.9l-2.575 2.575a21.819 21.819 0 0 0 15.47-15.47l-2.573 2.574a25.99 25.99 0 0 1-5.902 4.421zM62 57.228a8.015 8.015 0 0 1-2.11-.876l-3.461 3.461A22.134 22.134 0 0 0 62 61.073zM66 57.228v3.844a22.133 22.133 0 0 0 5.571-1.26l-3.461-3.46a8.015 8.015 0 0 1-2.11.876zM64.158 65.162c-.053 0-.1.016-.158.016s-.105-.012-.158-.016a26.264 26.264 0 0 1-5.6-.641c.158.168.3.347.461.511L64 70.326l5.295-5.294c.164-.164.3-.343.461-.511a26.264 26.264 0 0 1-5.598.641zM74.4 41.845l-3.461 3.46a8.016 8.016 0 0 1 .876 2.109h3.844a22.13 22.13 0 0 0-1.259-5.569zM59.89 42.477A8.015 8.015 0 0 1 62 41.6v-3.842a22.132 22.132 0 0 0-5.57 1.259zM66 41.6a8.015 8.015 0 0 1 2.11.876l3.461-3.46A22.134 22.134 0 0 0 66 37.758z"/><circle cx="64" cy="49.415" r="4.074"/><path d="M75.657 51.415h-3.844a8.016 8.016 0 0 1-.876 2.109l3.461 3.46a22.129 22.129 0 0 0 1.259-5.569zM58.452 70.434l-2.575-2.574a26 26 0 0 1-4.42-5.9 25.99 25.99 0 0 1-5.9-4.421l-2.573-2.574a21.819 21.819 0 0 0 15.468 15.469zM48.895 43.657c-.168.158-.348.3-.512.462l-5.294 5.295 5.294 5.295c.164.164.344.3.512.463a26.263 26.263 0 0 1-.641-5.586c0-.057-.017-.112-.017-.171s.012-.114.017-.171a26.266 26.266 0 0 1 .641-5.587zM51.457 36.87a26 26 0 0 1 4.42-5.9l2.575-2.57a21.819 21.819 0 0 0-15.47 15.47l2.573-2.574a25.992 25.992 0 0 1 5.902-4.426zM63.845 33.667c.052 0 .1-.016.155-.016s.1.012.155.016a26.263 26.263 0 0 1 5.6.641c-.158-.168-.3-.346-.461-.51L64 28.5l-5.295 5.3c-.164.164-.3.343-.461.51a26.263 26.263 0 0 1 5.601-.643zM60.65 111.233a12.125 12.125 0 0 0 .853 3.476l2.5 5.968 2.5-5.968a12.132 12.132 0 0 0 .854-3.476 16.315 16.315 0 0 1-6.7 0zM67.055 107.048a12.06 12.06 0 0 0-.416-1.356c-.026-.07-.058-.137-.086-.207a11.881 11.881 0 0 0-.542-1.169c-.041-.077-.078-.156-.12-.231a11.913 11.913 0 0 0-.758-1.182c-.06-.083-.123-.163-.185-.244a12.073 12.073 0 0 0-.948-1.112 12.07 12.07 0 0 0-.949 1.113c-.061.08-.123.16-.182.241a11.94 11.94 0 0 0-.762 1.189c-.039.07-.073.143-.111.214a11.9 11.9 0 0 0-.558 1.205c-.023.058-.05.114-.072.172a12.066 12.066 0 0 0-.424 1.38l-.031.134a12.73 12.73 0 0 0 6.179 0 10.952 10.952 0 0 1-.035-.147z"/><circle cx="64" cy="90.992" r="4.656"/><path d="M44.451 101.4c-.012-.088-.019-.176-.032-.263a11.933 11.933 0 0 0-.3-1.37c-.028-.1-.059-.2-.089-.3a12.065 12.065 0 0 0-.5-1.371 12.058 12.058 0 0 0-1.28.713c-.084.053-.169.1-.251.16a11.929 11.929 0 0 0-1.131.85c-.061.052-.119.109-.18.162a11.917 11.917 0 0 0-.937.928l-.136.146a12.054 12.054 0 0 0-.869 1.133l-.082.124a12.555 12.555 0 0 0 5.791 2.155c.007-.053.015-.105.021-.158a12.081 12.081 0 0 0 .082-1.4c0-.079-.007-.157-.009-.236a11.909 11.909 0 0 0-.098-1.273zM37.013 106.013a12.112 12.112 0 0 0-.412 3.555l.259 6.464 4.421-4.722a12.151 12.151 0 0 0 2.015-2.964 16.191 16.191 0 0 1-6.282-2.333zM48.834 83.851a4.651 4.651 0 1 0 2.739 5.986 4.661 4.661 0 0 0-2.739-5.986zM89.334 102.32c-.029-.044-.057-.089-.087-.133a12.071 12.071 0 0 0-.855-1.115c-.052-.06-.109-.116-.163-.175a11.915 11.915 0 0 0-.906-.9c-.066-.059-.13-.121-.2-.178A11.925 11.925 0 0 0 86 98.98c-.085-.057-.173-.111-.26-.165a12.07 12.07 0 0 0-1.27-.715 12.053 12.053 0 0 0-.5 1.372c-.03.1-.061.195-.088.293a11.915 11.915 0 0 0-.3 1.375c-.013.083-.02.167-.031.251a11.921 11.921 0 0 0-.1 1.3c0 .07-.008.139-.008.209a12.062 12.062 0 0 0 .083 1.419l.02.15a12.545 12.545 0 0 0 5.791-2.154zM87.97 107.508a16.549 16.549 0 0 1-3.264.838 12.14 12.14 0 0 0 2.014 2.964l4.421 4.722.259-6.466a12.117 12.117 0 0 0-.412-3.553 16.543 16.543 0 0 1-3.018 1.495zM85.019 90.149a4.653 4.653 0 1 0-8.592-.313 4.656 4.656 0 0 0 8.592.312z"/>
  </svg>
);

export default Navbar;