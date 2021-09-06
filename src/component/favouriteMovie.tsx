import React, { ReactElement, FC, useEffect, useState } from "react";
import MovieCard from "../component/movieCard";
import "../css/home_page.css";
import { getMovieDetail, getMovieList } from "../remoteCall/movie_api";
import { Default_Movie, Movie } from "../interfaces/movie";
import { Link } from "react-router-dom";
import { Button, CircularProgress } from "@material-ui/core";
import { ADD_TO_FAVORITE, ADDED_TO_FAVORITE } from "../util/string";
import CoustomSnackBar from "../component/coustomSnackBar";
interface Props {
  title: string;
}

const FavouriteMovie: FC<Props> = ({ title }): ReactElement => {
  const [isFavoriteInProgress, setIsFavoriteInProgress] =
    useState<boolean>(false);
  const [showNotification, setShowNotification] = useState<boolean>(false);

  const onFavouriteMovie = () => {
    setIsFavoriteInProgress(true);
    setTimeout(function () {
      setIsFavoriteInProgress(false);
      setShowNotification(true);
    }, 1000);
  };
  return (
    <div>
      <Button
        onClick={() => onFavouriteMovie()}
        variant="contained"
        color="primary"
        disabled={isFavoriteInProgress}
        startIcon={
          isFavoriteInProgress ? <CircularProgress color={"secondary"} /> : ""
        }
      >
        {ADD_TO_FAVORITE}
      </Button>
      <CoustomSnackBar
        openSnackBar={showNotification}
        message={ADDED_TO_FAVORITE.replace("~", title)}
        onHandleClose={() => setShowNotification(false)}
      />
    </div>
  );
};

export default FavouriteMovie;
