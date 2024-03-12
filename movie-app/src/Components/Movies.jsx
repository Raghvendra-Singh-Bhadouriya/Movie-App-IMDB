import Topmovie from "../Body/Allmovies/Topmovie"
import Popularmovie from "../Body/Allmovies/Popularmovie"
import Upcomingmovie from "../Body/Allmovies/Upcomingmovie"
import Nowplayingmovie from "../Body/Allmovies/Nowplayingmovie"

export default function Movies(){
    return(
        <>
        <div style={{color:"red",
        fontFamily:" 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        fontSize:"150%",
        fontWeight:"bold",
        margin:"2%",
        }}><p>Movies</p></div>
        <Upcomingmovie/>
       <Topmovie/>
       <Popularmovie/>
       <Nowplayingmovie/>
        </>
    )
}