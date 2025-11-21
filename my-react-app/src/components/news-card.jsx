function NewsCard({ newsItem }) {
  return (
    <div>
      <h3>{newsItem.title}</h3>
      {newsItem.image && (
        <img src={newsItem.image} alt={newsItem.title} />
      )}
      <p>{newsItem.description}</p>
    </div>
  );
}

export default NewsCard;
