import React from 'react';
import './blog.css';
import { blog01, blog02, blog03, blog04, blog05 } from './import';
import Article from '../../components/article/Article';

function Blog() {
  return (
    <section className="blog">
      <div className="container">
        <h2 className="gradient-text fs-900">
          A lot is happening, We are blogging about it.
        </h2>
        <div className="grid-container">
          <Article
            imgUrl={blog01}
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            altText="Blog post 1 about GPT-3"
          ></Article>
          <Article
            imgUrl={blog02}
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            altText="Blog post 1 about GPT-3"
          ></Article>
          <Article
            imgUrl={blog03}
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            altText="Blog post 1 about GPT-3"
          ></Article>
          <Article
            imgUrl={blog04}
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            altText="Blog post 1 about GPT-3"
          ></Article>
          <Article
            imgUrl={blog05}
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            altText="Blog post 1 about GPT-3"
          ></Article>
        </div>
      </div>
    </section>
  );
}

export default Blog;
