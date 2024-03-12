import "./Upcomingmovie.css"
import {Link} from "react-router-dom"
import React, {useState, useEffect} from "react"
import axios from "axios"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Upcomingmovie(){
    const [data,setData] = useState([])

    useEffect(() => {
        fetchUpcomingmovieData()
    },[])

    async function fetchUpcomingmovieData(){
        try {
            let res = await axios({
                method: "get",
                url:`https://api.themoviedb.org/3/movie/upcoming?api_key=68ae3ab018e32aad2fa3e1a4b51004cf`,
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
    }

    return(
        <>
        <div className="upcoming-movie">
            <p className="upcomingmovie-text">UpComing Movie</p>
        </div>
        <div className="upcomingmovie-main-container">
            <div className="upcomingmovie-slider-container">
                <Slider {...settings}>
                    {data.map((upcoming) => {
                        return(
                            <>
                            <div key={upcoming.id} className="upcomingmovie-poster-container">
                                <Link to={`/details/${upcoming.id}`}>
                                    <img className="upcomingmovie-poster-img" src={`https://image.tmdb.org/t/p/w500/${upcoming.poster_path}`}/>
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