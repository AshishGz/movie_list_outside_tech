import React from "react";
import { render, screen } from "@testing-library/react";
import MovieCard from "../src/component/movieCard";
import { Director } from "../src/interfaces/movie";
import ReactDOM from "react-dom";

test("renders movie card", () => {
  let director = {
    name: "",
    image: "",
    about: "",
  };
  render(
    <MovieCard
      title="Movie Title"
      director={director}
      movieSubTitle="subtitle"
      image=""
      description=""
    />
  );
  const linkElement = screen.getByText(/subtitle/i);
  expect(linkElement).toBeInTheDocument();
});
