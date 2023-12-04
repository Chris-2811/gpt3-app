import React from 'react';
import './feature.css';

function Feature({ title, text }) {
  return (
    <div>
      <div className="feature">
        <div>
          <div className="line"></div>
          <h3>{title}</h3>
        </div>
        <p>
          From they fine john he give of rich he. They age and draw mrs like.
          Improving end distrusts may instantly was household applauded.
        </p>
      </div>
    </div>
  );
}

export default Feature;
