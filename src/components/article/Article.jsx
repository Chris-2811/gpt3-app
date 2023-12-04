import React from 'react';
import './article.css';

function Article({ imgUrl, date, text, altText }) {
  return (
    <article>
      <div className="article-img">
        <img src={imgUrl} alt={altText} />
      </div>
      <div className="article-content">
        <div>
          <div className="date">{date}</div>
          <h2>{text}</h2>
        </div>
        <a href="#">Read Full Article</a>
      </div>
    </article>
  );
}

export default Article;
