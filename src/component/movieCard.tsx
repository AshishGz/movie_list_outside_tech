import React, { ReactElement, FC } from "react";
import { Grid, Paper } from "@material-ui/core";
import { Movie } from "../interfaces/movie";

// // define interface to represent component props
interface Props {
  movie: Movie;
}

const MovieCard: FC<Props> = ({ movie }): ReactElement => {
  return (
    <div className="movie_card_wrapper">
      <div className="movie_image_wrapper">
        <img src={movie.movieImage} />
      </div>
      <div>
        <div className="title">{movie.movieTitle}</div>
        <div className="subtitle">{movie.movieSubTitle}</div>
        <div className="description">{movie.movieDirectorr}</div>
      </div>
    </div>
  );
};

export default MovieCard;
