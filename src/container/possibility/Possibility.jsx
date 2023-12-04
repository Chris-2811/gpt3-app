import React from 'react';
import './possibility.css';
import apps from '../../assets/possibility.png';

function Possibility() {
  return (
    <section className="possibility">
      <div className="container">
        <div className="pos-image">
          <img src={apps} alt="Illustration of application" />
        </div>
        <div className="pos-content">
          <a href="#">Request Early Access to Get Started</a>
          <h2 className="gradient-text fs-800">
            The possibilities are beyond your imagination
          </h2>
          <p>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <a href="#" className="request">
            Request Early Access to Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

export default Possibility;
