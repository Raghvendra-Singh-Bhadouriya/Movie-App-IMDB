import {Link} from "react-router-dom"
import "./Navbar.css"


export default function Navbar(){
    return(
        <>
        <div className="navbar">
        <Link className="logo" to="/"><h1>Film<span>IQ</span></h1></Link>
        <div className="pages-container">
            <Link className="page" to="/">Home</Link>
            <Link className="page" to="/movies.list">Movies</Link>
            <Link className="page" to="/webseriess.list">WebSeries</Link>
            <Link className="page" to="/tvshows.list">TV Shows</Link>
        </div>
        </div>
        </>
    )
}