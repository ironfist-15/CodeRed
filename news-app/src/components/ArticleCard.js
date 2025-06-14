// src/ArticleCard.js
import React from 'react';
import './ArticleCard.css';

const ArticleCard = ({ article }) => {
  return (
    <div className="card">
      {article.urlToImage && (
        <img src={article.urlToImage} alt="article" className="card-img" />
      )}
      <div className="card-content">
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          <h4>{article.title}</h4>
        </a>
        <p>{article.description}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
