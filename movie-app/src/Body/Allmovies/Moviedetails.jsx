import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Moviedetails.css"

export default function Moviedetails() {
    const { movie_id } = useParams();
    const [details, setDetails] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchMovieData();
    }, [movie_id]);

    async function fetchMovieData() {
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=68ae3ab018e32aad2fa3e1a4b51004cf`);
            setDetails(res.data);
            console.log(res.data);
        } catch (error) {
            setError(error.message);
            console.error("Error fetching movie details:", error);
        }
    }

    return (
        <>
            {error && <div>Error: {error}</div>}
            <div>
                <h2>Single detail page</h2>
                {details && (
                    <div key={details.id}>
                        <div className="background_img_container">
                            <img className="background_img" src={`https://image.tmdb.org/t/p/w500/${details.backdrop_path}`}/>
                        </div>
                        <div className="movie_title_container">
                            <p>{details.title}</p>    
                        </div> 
                        <div className="movie_text_container">
                            <p>{details.tagline}</p>
                            <p >({details.vote_count}) votes</p>
                            <p >{details.runtime} mins</p>
                            <p >Release data {details.release_date}</p>
                            <p style={{marginTop:"1%"}} className="genres_container">
                                {details.genres && details.genres.map((gen) => (
                                    <p key={gen.id}>{gen.name}</p>
                                ))}
                            </p>
                        </div>
                        
                        <div className="overview_container">
                        <p style={{ color:"white"}}>{details.overview}</p>
                        </div>
                        <div className="poster_img_container">
                        <img className="poster_img" src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}/>
                        </div>
                        
                        
                    </div>
                )}
            </div>
        </>
    );
}
