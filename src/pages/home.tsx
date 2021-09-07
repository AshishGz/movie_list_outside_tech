import React, { FC, ReactElement, useEffect, useState } from "react";
import MovieCard from "../component/movieCard";
import "../css/home_page.css";
import { getMovieList } from "../remoteCall/movie_api";
import { Movie } from "../interfaces/movie";
import CustomRenderComponent from "../component/coustomRenderComponent";
import { APP_STATE } from "../util/config";

const HomePage: FC = (): ReactElement => {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const [appState, setAppState] = useState<APP_STATE>(APP_STATE.LOADING);

  useEffect(() => {
    onGetMovieLis();
  }, []);

  const onGetMovieLis = () => {
    getMovieList()
      .then((res) => {
        setMovieList(res);
        setAppState(APP_STATE.SUCCESS);
      })
      .catch(() => setAppState(APP_STATE.ERROR));
  };

  return (
    <div>
      <CustomRenderComponent
        appState={appState}
        mainComponent={
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
        }
      />
    </div>
  );
};

export default HomePage;
