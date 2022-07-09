import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Image } from "./Image";

export const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div className="image-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My favourite Images</h1>

          <span className="count-pill">
            {watchlist.length} {watchlist.length === 1 ? "Images" : "Images"}
          </span>
        </div>

        {watchlist.length > 0 ? (
          <div className="image-grid">
            {watchlist.map((image) => (
              <Image image={image} key={image.id} type="favourites" />
            ))}
          </div>
        ) : (
          <h2 className="no-images">No images yet!</h2>
        )}
      </div>
    </div>
  );
};
