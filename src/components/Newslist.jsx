import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Article from './Article';
// import mockData from '../../server/mockData';

function Newslist() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const articlesUrl = `http://newsapi.org/v2/everything?q=bitcoin&from=2020-08-13&sortBy=publishedAt&apiKey=${apiKey}`;
    const fetchArticles = async () => {
      const articleObject = await fetch(articlesUrl);
      const data = await articleObject.json();
      setArticles(data.articles);
    };
    fetchArticles();
  }, []);

  return (
    <div className="newslist">
      <h1>Newslist</h1>
      <ul>
        {articles.map(article => (
          <Article
            title={article.title}
            key={uuidv4()}
            description={article.description} />
        ))}
      </ul>
    </div>
  );
}

export default Newslist;
