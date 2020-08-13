import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Article from './Article';
// import mockData from '../../server/mockData';

function Newslist() {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    const articleObject = await fetch('../../mockData.json');
    const data = await articleObject.json();
    setArticles(data.articles);
    console.log('articles from fetchArticles:', data.articles);
  };

  useEffect(() => {
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
