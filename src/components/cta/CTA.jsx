import React from 'react';
import './cta.css';

function CTA() {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-header">
          <small>Request Early Access to Get Started</small>
          <h2 className="fs-700">
            Register today & start exploring the endless possiblities.
          </h2>
        </div>
        <a href="#" className="btn-cta">
          Get Started
        </a>
      </div>
    </section>
  );
}

export default CTA;
