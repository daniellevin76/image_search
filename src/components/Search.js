import React, { useState } from "react";
import { ImageWrapper } from "./ImageWrapper";

export const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=a25b5f01b15dc2552c280088adf76089&text=${query}&format=json&nojsoncallback=1`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.photos.photo.slice(0, 10));
        } else {
          setResults([]);
        }
      });
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for an image"
              value={query}
              onChange={onChange}
            />
          </div>

          {results.length > 0 && <ImageWrapper image={results} />}
        </div>
      </div>
    </div>
  );
};
