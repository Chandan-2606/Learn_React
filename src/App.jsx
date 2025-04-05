import React from "react";
import { useState } from "react";

const App = () => {
  const [arrobj, setArrobj] = useState([
    {
      id: 1,
      movie: "Spiderman",
    },
    {
      id: 2,
      movie: "Ironman",
    },
  ]);

  const [movie, setMovie] = useState({
    title: "Equlizer 3",
    ratings: 7,
  });
  function changeRating() {
    const copyMovies = {
      ...movie,
      ratings: 5,
    };

    setMovie(copyMovies);
  }
  return (
    <>
      <h2>{movie.title}</h2>
      <h2>{movie.ratings}</h2>
      <button onClick={changeRating}>Changing rating</button>
      <div>
        ArrObj
        <h1>
          {arrobj.map((movie) => (
            <li key={arrobj.index}>
              {movie.id}
              {movie.movie}
            </li>
          ))}
        </h1>
        <h2>{arrobj.movie}</h2>
      </div>
    </>
  );
};

export default App;
