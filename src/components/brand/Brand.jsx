import React from 'react';
import './brand.css';
import { google, slack, atlassian, dropbox, shopify } from './imports';

function Brand() {
  return (
    <section className="brands">
      <div className="container">
        <div>
          <img src={google} alt="Brand logo of Google" />
        </div>
        <div>
          <img src={slack} alt="Brand logo of Slack" />
        </div>
        <div>
          <img src={atlassian} alt="Brand logo of Atlassian" />
        </div>
        <div>
          <img src={dropbox} alt="Brand logo of Dropbox" />
        </div>
        <div>
          <img src={shopify} alt="Brand logo of Shopify" />
        </div>
      </div>
    </section>
  );
}

export default Brand;
