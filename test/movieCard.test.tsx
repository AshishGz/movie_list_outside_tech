import React from "react";
import ReactDOM, { render } from "react-dom";
import MovieCard from "../src/component/movieCard";
import { Director } from "../src/interfaces/movie";

describe("Movie Card rendred Properly", () => {
  let container: HTMLDivElement = document.createElement("div");
  let director: Director = {
    name: "",
    image: "",
    about: "",
  };

  ReactDOM.render(
    <MovieCard
      title="Movie Title"
      director={director}
      movieSubTitle="subtitle"
      image=""
      description=""
    />,
    container
  );
});
