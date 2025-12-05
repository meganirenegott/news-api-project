// imports
import { useState } from 'react'
import NewsCard from './components/news-card.jsx'
import CategorySelector from './components/form.jsx'
import './App.css'

function App() {
  const [articles, setArticles] = useState([]);

  const apiKey = "pub_6aa1bcf416b240b0b6e45cdb5da6d447";
// API call
  function callApi(category) {
    const url = `https://newsdata.io/api/1/latest?apikey=${apiKey}&q=${category}&country=us`;
// API fetch boilerplate
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // map through API data
        const formatted = data.results?.map((item) => ({
          title: item.title,
          description: item.description,
          image: item.image_url,
        })) || [];

        setArticles(formatted);
      })
      // error message logged to console if problem with API
      .catch((err) => console.error("Error fetching news:", err));
  }

  return (
    <>
      <div className="breaking-news">
    <h1>Breaking News!</h1>

    <CategorySelector onSubmit={callApi} />
{/* user message for if there are no news articles in a selected category */}
    {articles.length === 0 && <p className="no-news-found">No news found.</p>}
{/* articles shown back to the user */}
    {articles.map((article) => (
      <NewsCard key={article.title} newsItem={article} />
    ))}
        </div>
  </>
);
}

export default App;
