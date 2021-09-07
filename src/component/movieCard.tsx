import React, { FC, ReactElement, useState } from "react";
import { Director } from "../interfaces/movie";
import FavouriteMovie from "./favouriteMovie";
import CustomModel from "./coustomModel";
import DirectorInfo from "./directorInfo";

// // define interface to represent component props
interface Props {
  title: string;
  movieSubTitle: string;
  image: string;
  description: string;
  director: Director;
}

//main card to show movie , info in above interface need to passed here

const MovieCard: FC<Props> = ({
  title,
  movieSubTitle,
  image,
  director,
  description,
}): ReactElement => {
  const [hideDescription, setHideDescription] = useState(false);
  const [openModel, setOpenModel] = useState(false);
  return (
    <div>
      <div
        className="movie_card_wrapper"
        onClick={() => setHideDescription(!hideDescription)}
      >
        <div className="movie_image_wrapper">
          <img src={image} />
        </div>
        <div>
          <div className="title">{title}</div>
          <div className="subtitle">{movieSubTitle}</div>
          <div
            className="description"
            onClick={(e) => {
              e.stopPropagation();
              setOpenModel(true);
            }}
          >
            {director.name}
          </div>
        </div>
      </div>
      {!hideDescription ? (
        ""
      ) : (
        <div>
          <p>{description}</p>
          <FavouriteMovie title={title} />
        </div>
      )}
      <CustomModel
        openModel={openModel}
        onHandleClose={() => setOpenModel(false)}
        component={
          <DirectorInfo
            director={director}
            onHandleClose={() => setOpenModel(false)}
          />
        }
      />
    </div>
  );
};

export default MovieCard;
