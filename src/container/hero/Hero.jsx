import React from 'react';
import './hero.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        {/* Content */}
        <div className="hero-content">
          <h1 className="gradient-text fs-900">
            Let's Build Something <br /> amazing with GPT-3 <br /> OpenAI
          </h1>
          <p className="content-text">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <form className="form">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email Address"
            />
            <button type="submit" className="btn-submit">
              Get Started
            </button>
          </form>
          <div className="people-container">
            <img src={people} alt="people" />
            <p>1,600 people requested access a visit in last 24 hours</p>
          </div>
        </div>
        {/* Image */}
        <div className="hero-image">
          <img
            src={ai}
            height={701.59}
            width={667.41}
            alt="Artificial Intelligence graphic"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
