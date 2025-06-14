import React, { useState } from 'react';
import axios from 'axios';
import ArticleCard from './components/ArticleCard';
import './components/Filters.css';
import { useNavigate } from 'react-router-dom';
import './App.css';

const App = () => {
  const storedUser = localStorage.getItem('username');

  const [keyword, setKeyword] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [language, setLanguage] = useState('en');
  const [domain, setDomain] = useState('');
  const [articles, setArticles] = useState([]);
  const [pageSize, setPageSize] = useState(6);
  const navigate = useNavigate();

  const API_KEY = '0e1adda1fda54da399da9bc87490a2f9';

  const handleSearch = async () => {
    if (!keyword.trim()) {
      alert('Please enter a keyword to search.');
      return;
    }
     

    try {
      const url = `https://newsapi.org/v2/everything`;
      const params = {
      q: keyword,
      language: language,
      pageSize: pageSize,
      
      apiKey: API_KEY,
      };

      console.log('Request params:', params);
      if (from) params.from = from;
      if (to) params.to = to;
      if (domain) params.domains = domain;

      const response = await axios.get(url, { params });
      setArticles(response.data.articles);
    } catch (error) {
      console.error('Error fetching articles:', error);
      alert('Failed to fetch articles.');
    }
  };

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginTop: '10px' }}>
          Hello, {storedUser || 'Guest'}!
        </h2>

        <h4 style={{ textAlign: 'center', fontSize: '18px', marginTop: '10px' }}>
          Find the most trending news, choose your topics!!
        </h4>

        <button onClick={handleLogout} style={{ height: '35px' }}>
          Logout
        </button>
      </div>

      <div className="filters-container">
        <input type="text" placeholder="Keyword" value={keyword} onChange={e => setKeyword(e.target.value)} />
        <input type="date" value={from} onChange={e => setFrom(e.target.value)} />
        <input type="date" value={to} onChange={e => setTo(e.target.value)} />
        <input type="text" placeholder="Language (e.g. en)" value={language} onChange={e => setLanguage(e.target.value)} />
        <input type="text" placeholder="Source Domain" value={domain} onChange={e => setDomain(e.target.value)} />

        <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
          <option value={3}>3 Articles</option>
          <option value={6}>6 Articles</option>
          <option value={10}>10 Articles</option>
          <option value={15}>15 Articles</option>
        </select>

        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
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

export default App;
