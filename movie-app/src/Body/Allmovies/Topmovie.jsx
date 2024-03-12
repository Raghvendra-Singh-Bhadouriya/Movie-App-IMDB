import {Link} from "react-router-dom"
import axios from "axios"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Topmovie.css"
import React, {useState, useEffect} from "react"

export default function Topmovie(){
    const [topMovie, setTopMovie] = useState([])

    useEffect(() => {
        fetchApidata()
    },[])

  async function fetchApidata(){
      try {
          let res = await axios({
              method:"get",
              url:`https://api.themoviedb.org/3/movie/top_rated?api_key=68ae3ab018e32aad2fa3e1a4b51004cf`,
          })
          setTopMovie(res.data.results)
          console.log(res.data.results)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
  }

  const settings={
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
       <div className="top-movie">
            <p className="toptrending-text">Top Trending Movie</p>
        </div>
        
        <div className="topmovie-main-container">
            <div className="topmovie-slider-container">
            <Slider {...settings}>
            {topMovie.map((top) => {
                    return(
                        <>
                        <div key={top.id} className="poster-container">
                            <Link to={`/details/${top.id}`}>
                                <img className="top-img" src={`https://image.tmdb.org/t/p/w500/${top.poster_path}`}/> 
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

