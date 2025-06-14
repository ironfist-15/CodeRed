// src/components/NewsPage.js
import React, { useState } from 'react';
import axios from 'axios';
import ArticleCard from './ArticleCard';
import './Filters.css';

const NewsPage = () => {
  const [keyword, setKeyword] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [language, setLanguage] = useState('en');
  const [domain, setDomain] = useState('');
  const [articles, setArticles] = useState([]);
  const [pageSize, setPageSize] = useState(6);

  const API_KEY = '76969a6ed5764751b950a1d5e7754e65';

  const handleSearch = async () => {
    if (!keyword.trim()) {
      alert('Please enter a keyword to search.');
      return;
    }

    try {
      const response = await axios.get(`https://newsapi.org/v2/everything`, {
        params: {
          apiKey: API_KEY,
          q: keyword,
          language,
          pageSize,
          sortBy: 'publishedAt',
          ...(from && { from }),
          ...(to && { to }),
          ...(domain && { domains: domain }),
        },
      });
      setArticles(response.data.articles);
    } catch (error) {
      console.error('Error fetching articles:', error);
      alert('Failed to fetch articles.');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>News Search</h2>

      <div className="filters-container">
        <input type="text" placeholder="Keyword or Phrase" value={keyword} onChange={e => setKeyword(e.target.value)} />
        <input type="date" value={from} onChange={e => setFrom(e.target.value)} />
        <input type="date" value={to} onChange={e => setTo(e.target.value)} />
        <input type="text" placeholder="Language (e.g. en)" value={language} onChange={e => setLanguage(e.target.value)} />
        <input type="text" placeholder="Source Domain (e.g. wsj.com)" value={domain} onChange={e => setDomain(e.target.value)} />

        <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
          <option value={3}>3 Articles</option>
          <option value={6}>6 Articles</option>
          <option value={10}>10 Articles</option>
        </select>

        <button className="search-button" onClick={handleSearch}>Search</button>
      </div>

      <h3 style={{ marginTop: '20px' }}>Top Articles</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '20px' }}>
        {articles.map((article, idx) => (
          <ArticleCard key={idx} article={article} />
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
