import React, { ReactElement, FC, useEffect, useState } from "react";
import MovieCard from "../component/movieCard";
import "../css/home_page.css";
import { getMovieList } from "../remoteCall/movie_api";
import { Movie } from "../interfaces/movie";
import { Link } from "react-router-dom";

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
      {movieList.map((item, index) => (
        <Link to="/movie" key={index}>
          <MovieCard
            title={item.movieTitle}
            movieSubTitle={item.movieSubTitle}
            image={item.movieImage}
            director={item.movieDirector}
          />
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
