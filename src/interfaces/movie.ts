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

 export const Default_Director:Director={
    name:'',
     image:'',
     about:''
 }

 export const  Default_Movie:Movie={
    id:'',
     movieImage:'',
     movieTitle:'',
     movieSubTitle:'',
     movieDescrription:'',
     movieDirectorr:Default_Director
}
