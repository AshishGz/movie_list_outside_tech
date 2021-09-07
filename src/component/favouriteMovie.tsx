import React, { ReactElement, FC, useState } from "react";

import "../css/home_page.css";
import { Button, CircularProgress } from "@material-ui/core";
import {
  ADD_TO_FAVORITE,
  ADDED_TO_FAVORITE,
  ADDED_TO_FAVORITE_FAILED,
} from "../util/string";
import CoustomSnackBar from "../component/coustomSnackBar";
import { onFavourteMovie } from "../remoteCall/movie_api";
interface Props {
  title: string;
}

//this is compnent to favourite movies

const FavouriteMovie: FC<Props> = ({ title }): ReactElement => {
  const [isFavoriteInProgress, setIsFavoriteInProgress] =
    useState<boolean>(false);
  const [notificationType, setNotificationType] = useState<string>("success");
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const [notificationMesssage, setNotificationMessage] = useState<string>(
    ADDED_TO_FAVORITE.replace("~", title)
  );

  //this is fake api which returns success orr failure when movie is marked as fav
  const onFavouriteMovie = () => {
    setIsFavoriteInProgress(true);
    onFavourteMovie()
      .then(function (res) {
        setIsFavoriteInProgress(false);
        setShowNotification(true);
        setNotificationType("success");
      })
      .catch(function (error) {
        setIsFavoriteInProgress(false);
        setShowNotification(true);
        setNotificationMessage(ADDED_TO_FAVORITE_FAILED.replace("~", title));
        setNotificationType("error");
      });
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
        message={notificationMesssage}
        type={notificationType}
        onHandleClose={() => setShowNotification(false)}
      />
    </div>
  );
};

export default FavouriteMovie;
