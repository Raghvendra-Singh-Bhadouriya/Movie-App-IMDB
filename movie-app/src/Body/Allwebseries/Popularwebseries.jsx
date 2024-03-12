import "./Popularwebseries.css"
import {Link} from "react-router-dom"
import React, {useState, useEffect} from "react"
import axios from "axios"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



export default function Popularwebseries(){
    const [data, setData] = useState([])

    useEffect(() => {
        fetchPopularwebseriesData()
    },[])

    async function fetchPopularwebseriesData(){
        try {
            let res = await axios({
                method:"get",
                url:`https://api.themoviedb.org/3/tv/popular?api_key=68ae3ab018e32aad2fa3e1a4b51004cf`,
            })
            setData(res.data.results);
            console.log(res.data.results);
        } catch (error) {
            console.error("Error fetching data:", error)
        }
    }

    const settings ={
        dots:false,
        infinite:true,
        speed:500,
        autoplay:false,
        slidesToScroll:4,
        slidesToShow:4,
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
        <div className="popularweb-text-container">
            <p className="popularweb-text">Popular WebSeries</p>
        </div>
        <div className="popularweb-main-container">
            <div className="popularweb-slider-container">
                <Slider {...settings}>
                    {data.map((popularweb) => {
                        return(
                        <>
                            <div key={popularweb.id} className="popularweb-poster-container">
                                <Link to={`/webdetails/${popularweb.id}`}>
                                    <img className="popularweb-poster-img" src={`https://image.tmdb.org/t/p/w500/${popularweb.poster_path}`}/>
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