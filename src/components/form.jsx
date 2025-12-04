import { useState } from "react";

// function for category selector on user form
function CategorySelector({ onSubmit }) {
  const categories = [
  "General",
  "World",
  "Nation",
  "Business",
  "Technology",
  "Entertainment",
  "Sports",
  "Science",
  "Health"
];
// usestate is empty until the category is selected by the user
  const [selected, setSelected] = useState("");
// submit handler runs onSubmit if category is selected, else alerts to select a category
  const handleSubmit = () => {
    if (selected) {
      onSubmit(selected);
    } else {
      alert("Please select a category");
    }
  };

  return (
    <div className="form">
      {/* user drop down form */}
      <label>
        Choose a category: 
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          {/* cat is the prop short for categories that once selected by the user is passed into the API */}
          <option value="">-- Select one --</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>
{/* form submit button */}
      <button className="form-button" onClick={handleSubmit}>Get News</button>
    </div>
  );
}

export default CategorySelector;
