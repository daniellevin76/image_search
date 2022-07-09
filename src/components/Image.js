import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Image = ({ image }) => {
  const { addMovieToWatchlist, addMovieToWatched, watchlist, watched } =
    useContext(GlobalContext);

  let storedMovie = watchlist.find((o) => o.id === image.id);
  let storedMovieWatched = watched.find((o) => o.id === image.id);

  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  const watchedDisabled = storedMovieWatched ? true : false;

  /*
farm: 66
id: "52184114795"
isfamily: 0
isfriend: 0
ispublic: 1
owner: "10354154@N05"
secret: "29df2d8d30"
server: "65535"
title: "22 June 2022 Amble to Alnmouth 10 miles (17)"
  
  */

  return (
    <>
      {image.farm !== 0 ? (
        <li className="image">
          <h3 className="title">{image.title.slice(0, 24)}...</h3>
          <img
            src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
            alt={`${image.title}`}
            disabled={watchlistDisabled}
            onClick={() => addMovieToWatchlist(image)}
          ></img>
        </li>
      ) : (
        <div className="filler-poster" />
      )}
    </>
  );
};
