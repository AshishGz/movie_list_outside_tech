import React, { FC, ReactElement } from "react";
import { Director } from "../interfaces/movie";

// // define interface to represent component props
interface Props {
  title: string;
  movieSubTitle: string;
  image: string;
  director: Director;
}

const MovieCard: FC<Props> = ({
  title,
  movieSubTitle,
  image,
  director,
}): ReactElement => {
  return (
    <div className="movie_card_wrapper">
      <div className="movie_image_wrapper">
        <img src={image} />
      </div>
      <div>
        <div className="title">{title}</div>
        <div className="subtitle">{movieSubTitle}</div>
        <div className="description">{director.name}</div>
      </div>
    </div>
  );
};

export default MovieCard;
