import React, { useState } from 'react';
import './header.css';
import logo from '../../assets/logo.svg';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const Menu = () => {
    return (
      <>
        <li>
          <a
            href="#hero"
            onClick={() => {
              removeMenu();
            }}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#gpt3"
            onClick={() => {
              removeMenu();
            }}
          >
            What is GPT?
          </a>
        </li>
        <li>
          <a
            href="#possibilities"
            onClick={() => {
              removeMenu();
            }}
          >
            Open AI
          </a>
        </li>
        <li>
          <a
            href="#features"
            onClick={() => {
              removeMenu();
            }}
          >
            Case Studies
          </a>
        </li>
        <li>
          <a
            href="#blog"
            onClick={() => {
              removeMenu();
            }}
          >
            Library
          </a>
        </li>
      </>
    );
  };

  function removeMenu() {
    setToggleMenu(false);
    document.getElementById('mobile-menu').style.display = 'none';
  }

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
          <nav className="mobile-menu scale-up-center" id="mobile-menu">
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
