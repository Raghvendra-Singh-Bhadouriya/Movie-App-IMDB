import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Singlewebdetails.css"


export default function Singlewebdetails(){
    const {web_id} = useParams();
    const [data, setData] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchSingleWebData()
    },[web_id])

    async function fetchSingleWebData(){
        try {
            let res = await axios({
                method: "get",
                url:`https://api.themoviedb.org/3/tv/${web_id}?api_key=68ae3ab018e32aad2fa3e1a4b51004cf`
            })
            console.log(res.data)
            setData(res.data)
        } catch (error) {
            setError(error.message);
            console.error("Error fetching movie details:", error);
        }
    }

    return(
        <>
         {error && <div>Error: {error}</div>}
            <div>
                <h2>Single detail page</h2>
                {data && (
                    <div key={data.id}>
                        <div className="background_img_container">
                            <img className="background_img" src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}/>
                        </div>
                        <div className="movie_title_container">
                            <p>{data.title}</p>    
                        </div> 
                        <div className="movie_text_container">
                            <p>{data.tagline}</p>
                            <p >({data.vote_count}) votes</p>
                            <p >{data.runtime} mins.</p>
                            <p >Release data {data.release_date}</p>
                            <p style={{marginTop:"1%"}} className="genres_container">
                                {data.genres && data.genres.map((gen) => (
                                    <p key={gen.id}>{gen.name}</p>
                                ))}
                            </p>
                        </div>
                        
                        <div className="overview_container">
                        <p style={{ color:"white"}}>{data.overview}</p>
                        </div>
                        <div className="poster_img_container">
                        <img className="poster_img" src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}/>
                        </div>                                           
                    </div>
                )}
            </div>
        </>
    )
}



