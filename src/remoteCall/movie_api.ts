import {Movie} from "../interfaces/movie";
import {API_BASE_URL} from "../util/config";

export function getMovieList(): Promise<Movie[]> {
    // For now, consider the data is stored on a static `users.json` file
    return fetch(`${API_BASE_URL}/1kfm`)
    // the JSON body is taken from the response
        .then(res => res.json())
        .then(res => {
            // The response has an `any` type, so we need to cast
            // it to the `User` type, and return it from the promise
            return res as Movie[]
        })
}

export function onFavourteMovie() {

    return new Promise(function (resolve,reject) {
        setTimeout(function () {
            let randomNumber:number=Math.floor(Math.random() * 11);
            if(randomNumber % 2 == 0) resolve('Successfully Favourite ');
            else reject('Failure')
        },1000)

    })

}
