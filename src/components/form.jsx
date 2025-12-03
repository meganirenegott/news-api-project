import { useState } from "react";


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

  const [selected, setSelected] = useState("");

  const handleSubmit = () => {
    if (selected) {
      onSubmit(selected);
    } else {
      alert("Please select a category");
    }
  };

  return (
    <div className="form">
      <label>
        Choose a category: 
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          <option value="">-- Select one --</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>

      <button className="form-button" onClick={handleSubmit}>Get News</button>
    </div>
  );
}

export default CategorySelector;
