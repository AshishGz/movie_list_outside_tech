import React, { ReactElement, FC, useEffect, useState } from "react";
import MovieCard from "../component/movieCard";
import "../css/home_page.css";
import { getMovieList } from "../remoteCall/movie_api";
import { Movie } from "../interfaces/movie";

const HomePage: FC = (): ReactElement => {
  const [movieList, setMovieList] = useState<Movie[]>([]);

  useEffect(() => {
    onGetMovieLis();
  }, []);

  const onGetMovieLis = () => {
    getMovieList().then((res) => {
      setMovieList(res);
    });
  };
  return (
    <div>
      {movieList.map((item) => (
        <MovieCard movie={item} />
      ))}
    </div>
  );
};

export default HomePage;
