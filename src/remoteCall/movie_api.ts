import {Movie} from "../interfaces/movie";
import {API_BASE_URL} from "../util/config";

export function getMovieList(): Promise<Movie[]> {
    // For now, consider the data is stored on a static `users.json` file
    return fetch(`${API_BASE_URL}/1kys`)
    // the JSON body is taken from the response
        .then(res => res.json())
        .then(res => {
            // The response has an `any` type, so we need to cast
            // it to the `User` type, and return it from the promise
            return res as Movie[]
        })
}
