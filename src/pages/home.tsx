import React, { ReactElement, FC, useEffect, useState } from "react";
import MovieCard from "../component/movieCard";
import "../css/home_page.css";
import { getMovieList } from "../remoteCall/movie_api";
import { Movie } from "../interfaces/movie";

const HomePage: FC = (): ReactElement => {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const [isFavoriteInProgress, setIsFavoriteInProgress] =
    useState<boolean>(false);
  const [showNotification, setShowNotification] = useState<boolean>(false);

  useEffect(() => {
    onGetMovieLis();
  }, []);

  const onGetMovieLis = () => {
    getMovieList().then((res) => {
      setMovieList(res);
    });
  };

  const onFavouriteMovie = () => {
    setIsFavoriteInProgress(true);
    setTimeout(function () {
      setIsFavoriteInProgress(false);
      setShowNotification(true);
    }, 1000);
  };
  return (
    <div>
      {movieList.map((item, index) => (
        <div>
          <MovieCard
            title={item.movieTitle}
            movieSubTitle={item.movieSubTitle}
            image={item.movieImage}
            director={item.movieDirectorr}
            description={item.movieDescrription}
          />
        </div>
      ))}
    </div>
  );
};

export default HomePage;
