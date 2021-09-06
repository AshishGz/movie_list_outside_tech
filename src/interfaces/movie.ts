export interface Movie {
    id:string
    movieImage: string
    movieTitle: string
    movieSubTitle: string
    movieDescrription: string
    movieDirectorr: Director
}
 export interface Director {
     name:string
     image:string
     about:string
 }

