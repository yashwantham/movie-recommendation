import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var movies = {
    Comedy: [
      {
        movieName: "Chhichhore",
        movieRating: "8.3",
        description:
          "A tragic incident forces Anirudh, a middle-aged man, to take a trip down memory lane and reminisce his college days along with his friends, who were labelled as losers."
      },
      {
        movieName: "OMG – Oh My God!",
        movieRating: "8.1",
        description:
          "When an earthquake destroys an atheist Kanji's antique shop, he decides to sue God. However, when Lord Krishna helps him fight the lawsuit and expose the corrupt charlatans, his faith is restored."
      }
    ],
    Horror: [
      {
        movieName: "Tumbbad ",
        movieRating: "8.2",
        description:
          "A mythological story about a goddess who created the entire universe. The plot revolves around the consequences when humans build a temple for her first-born."
      },
      {
        movieName: "Dora",
        movieRating: "9",
        description:
          "Ignoring her misgivings, a young woman purchases a vintage car that seems to have a mind of its own. Further investigation reveals that it is possessed by a vengeful spirit with ties to her past."
      }
    ],
    Thriller: [
      {
        movieName: "Andhadhun",
        movieRating: "9",
        description:
          "Akash, a piano player pretending to be visually-impaired, unwittingly becomes entangled in a number of problems as he witnesses the murder of a former film actor."
      },
      {
        movieName: "Ratsasan",
        movieRating: "9.8",
        description:
          "Arun gives up on his dream of becoming a filmmaker and takes up the job of a police officer after his father's death. He then attempts to track down a psychotic killer who targets schoolgirls."
      }
    ]
  };

  var categories = Object.keys(movies);
  var [recommendedMovieCategory, setRecommendedMovieCategory] = useState(
    "Comedy"
  );

  function categoryClickHandler(event) {
    var choosedCategory = event.target.innerText;
    setRecommendedMovieCategory(choosedCategory);
  }

  return (
    <div className="App">
      <h1>Movie Recommendation</h1>
      <h2>Select the genre to get the recommendation.</h2>
      <ul className="list-non-bullet">
        {categories.map((category) => {
          return (
            <li
              key={category}
              onClick={categoryClickHandler}
              className="category inline-list-item"
            >
              {category}
            </li>
          );
        })}
      </ul>
      <hr />

      <ul>
        {movies[recommendedMovieCategory].map((movie) => {
          return (
            <li key={movie.movieName} className="list-non-bullet movie">
              <h2>{movie.movieName}</h2>
              <small>Rating: {movie.movieRating}</small>
              <p>{movie.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
