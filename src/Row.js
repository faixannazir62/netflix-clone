import movieTrailer from "movie-trailer";
import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import axios from "./axios";
import "./Row.css";
const base_url = "https://image.tmdb.org/t/p/original"; // base url for the posters.

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState();
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "430",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "") // movieTrailer is a npm module
        .then((url) => {
          //https://www.youtube.com/watch?v=-cMqr9HpZ
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => {
          alert("Sorry, This Movie trailer is not available.");
        });
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <div className="list__item" onClick={() => handleClick(movie)}>
            <img
              loading="lazy"
              className={`row__poster ${isLargeRow ? "largeRow" : "smallRow"}`}
              key={movie.id}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
            <div className="list__itemInfo">
              <h5 className="list__itemTitle">
                {movie.name || movie.original_title}
              </h5>
            </div>
          </div>
        ))}
      </div>
      <div className="trailer">
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
}

export default Row;
