import React, { FC, ReactElement } from "react";
import { Director } from "../interfaces/movie";
import CloseIcon from "@material-ui/icons/Close";

interface Props {
  director: Director;
  onHandleClose: any;
}

// simple ui takes director Object and display it
//onclose is need to close modle as this component apperas as child of model

const DirectorInfo: FC<Props> = ({ director, onHandleClose }): ReactElement => {
  return (
    <div className="director">
      <div className="title_wrap">
        <div className="title">{director.name}</div>
        <div style={{ cursor: "pointer" }} onClick={onHandleClose}>
          <CloseIcon />
        </div>
      </div>
      <div className="director_img_wrapper">
        <img src={director.image} />
      </div>
      <p className="about">{director.about}</p>
    </div>
  );
};
export default DirectorInfo;
