import "./Nowplayingmovie.css"
import axios from "axios"
import {Link} from "react-router-dom"
import React, {useState, useEffect} from "react"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function Nowplayingmovie(){
    const [data, setData] = useState([])

    useEffect(() => {
        fetchNowplayingMovieData()
    },[])

    async function fetchNowplayingMovieData(){
        try {
            let res = await axios({
                method:"get",
                url:`https://api.themoviedb.org/3/movie/now_playing?api_key=68ae3ab018e32aad2fa3e1a4b51004cf`
            })
            setData(res.data.results);
            console.log(res.data.results);
        } catch (error) {
            console.error("Error fetching data:", error)
        }
    }

    const settings = {
        dots:false,
        infinite:true,
        speed:500,
        autoplay:false,
        slidesToShow:4,
        slidesToScroll:4,
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
    };

    return(
        <>
        <div className="nowplaing-movie">
            <p className="nowplaying-text">Now Playing</p>
        </div>
        <div className="nowplaying-main-container">
            <div className="nowplaying-slider-container">
                <Slider {...settings}>
                    {data.map((nowplaying) => {
                        return(
                            <>
                            <div key={nowplaying.id} className="nowplaying-poster-container">
                                <Link to={`/details/${nowplaying.id}`}>
                                    <img className="nowplaying-poster-img" src={`https://image.tmdb.org/t/p/w500/${nowplaying.poster_path}`}/>
                                </Link>
                            </div>
                            </>
                        )
                    })}
                </Slider>
            </div>
        </div>
        </>
    )
}