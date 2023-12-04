import React from 'react';
import './footer.css';
import gpt3 from '../../assets/logo.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <h2 className="gradient-text fs-900">
            Do you want to step in to the future before others
          </h2>
          <a href="#" className="btn-footer">
            Request Early Access
          </a>
        </div>
        <div className="footer-bottom">
          <div className="wrapper">
            <div className="logo">
              <img src={gpt3} alt="GPT-3 logo" />
            </div>
            <p>
              Crechterwoord K12 <br /> 182 DK Alknjkcb, All Rights Reserved
            </p>
          </div>

          <div className="footer-menu">
            <div className="links">
              <h4>Links</h4>
              <ul role="list">
                <li>
                  <a href="#">Overons</a>
                </li>
                <li>
                  <a href="#">Social Media</a>
                </li>
                <li>
                  <a href="#">Counters</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>

            <div className="company">
              <ul role="list">
                <h4>Company</h4>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>

            <div className="contact">
              <ul role="list">
                <h4>Get in touch</h4>
                <li>
                  <p>
                    Crechterwoord K12 <br /> 182 DK Alknjkcb
                  </p>
                </li>
                <li>
                  <p>085-132567</p>
                </li>
                <li>
                  <p>info@payme.net</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="copyright">© 2021 GPT-3. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
