import React, { useState } from 'react';
import './header.css';
import logo from '../../assets/logo.svg';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Menu = () => {
  return (
    <>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#gpt3">What is GPT?</a>
      </li>
      <li>
        <a href="#openAI">Open AI</a>
      </li>
      <li>
        <a href="studies">Case Studies</a>
      </li>
      <li>
        <a href="#library">Library</a>
      </li>
    </>
  );
};

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" width={62} />
        </div>

        <div className="header-content">
          <nav className="primary-navigation" aria-label="Primary navigation">
            <ul role="list">
              <Menu />
            </ul>
          </nav>
          <div className="sign-container">
            <button className="btn-in" aria-label="sing-in">
              Sign in
            </button>
            <button className="btn-out" aria-label="sing-up">
              Sign up
            </button>
          </div>
        </div>

        {/* mobile button here */}
        <div className="mobile-nav-toggle">
          <span className="sr-only">Menu</span>
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={24}
              onClick={() => setToggleMenu(false)}
              aria-label="Close menu"
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={24}
              onClick={() => setToggleMenu(true)}
              aria-aria-label="Open menu"
            />
          )}
        </div>

        {/* Mobile menu */}
        {toggleMenu && (
          <nav className="mobile-menu scale-up-center">
            <ul role="list">
              <Menu />
            </ul>
            <div className="sign-container">
              <button className="btn-in">Sign in</button>
              <button className="btn-out">Sign up</button>
            </div>
          </nav>
        )}
      </div>
    </div>
  );
}

export default Header;
