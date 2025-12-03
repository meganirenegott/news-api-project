import { useState } from 'react'
import NewsCard from './components/news-card.jsx'
import CategorySelector from './components/form.jsx'
import './App.css'

function App() {
  const [articles, setArticles] = useState([]);

  const apiKey = "pub_6aa1bcf416b240b0b6e45cdb5da6d447";

  function callApi(category) {
    const url = `https://newsdata.io/api/1/latest?apikey=${apiKey}&q=${category}&country=us`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const formatted = data.results?.map((item) => ({
          title: item.title,
          description: item.description,
          image: item.image_url,
        })) || [];

        setArticles(formatted);
      })
      .catch((err) => console.error("Error fetching news:", err));
  }

  return (
    <>
      <div className="breaking-news">
    <h1>Breaking News!</h1>

    <CategorySelector onSubmit={callApi} />

    {articles.length === 0 && <p>No news found.</p>}

    {articles.map((article) => (
      <NewsCard key={article.title} newsItem={article} />
    ))}
        </div>
  </>
);
}

export default App;
