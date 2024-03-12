import {Route, Routes} from "react-router-dom"

import Home from "./Home"
import Movies from "./Movies"
import Webseriess from "./Webseriess"
import Tvshows from "./Tvshows"
import Moviedetails from "../Body/Allmovies/Moviedetails"
import Singlewebdetails from "../Body/Allwebseries/Singlewebdetails"

export default function AllRoutes(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/movies.list" element={<Movies/>}/>
            <Route path="/webseriess.list" element={<Webseriess/>}/>
            <Route path="/tvshows.list" element={<Tvshows/>}/>

            <Route path="/details/:movie_id" element={<Moviedetails/>}/>
            <Route path="/webdetails/:web_id" element={<Singlewebdetails/>}/>
        </Routes>
        </>
    )
}