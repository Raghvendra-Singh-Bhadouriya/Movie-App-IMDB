import React, { useState, useEffect} from "react"
import axios from "axios"
import {Link} from "react-router-dom"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import "./Popularmovie.css"

export default function Popularmovie(){
    const [data, setData] = useState([])

    useEffect(() => {
        fetchPopularMovieData()
    },[])

    async function fetchPopularMovieData(){
        try {
            let res = await axios({
                method: "get",
                url: `https://api.themoviedb.org/3/movie/popular?api_key=68ae3ab018e32aad2fa3e1a4b51004cf`,
            })
            console.log(res.data.results);
            setData(res.data.results);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    }

    return(
        <>
        <div className="popular-movie">
            <p className="popular-text">Popular Movies</p>
        </div>

        <div className="popularmovie-main-container">
            <div className="popularmovie-slider-container">
            <Slider {...settings}>
            {data.map((popular) => {
                    return(
                        
                        <div className="popular-poster-container" key={popular.id}>
                            <Link to={`/details/${popular.id}`}>
                                <img className="popular-poster-img" src={`https://image.tmdb.org/t/p/w500/${popular.poster_path}`}/>                             
                            </Link>
                        </div>
                        
                    )
                })}
            </Slider>
            </div>
        </div>
        </>
    )
}

