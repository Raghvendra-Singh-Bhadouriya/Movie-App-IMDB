import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from "react-router-dom";
import "./Topweb.css";

export default function Topweb() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchWebdata();
    }, []);

    async function fetchWebdata() {
        try {
            let res = await axios ({
                method: "get",
                url: `https://api.themoviedb.org/3/tv/top_rated?api_key=68ae3ab018e32aad2fa3e1a4b51004cf`,
            })
            setData(res.data.results);
            console.log(res.data.results);
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

    };

    return (
        <>
        <div className="topwebseries-text-container">
            <p className="topwebseries-text">Top20 WebSeries</p>
        </div>
        <div className="topweb-main-container">
            <div className="topweb-slider-container">
            <Slider {...settings}>
                {data.map((series) => (
                    <div key={series.id} className="webposter-container">
                        <Link to={`/webdetails/${series.id}`}>
                        <img className="webposter-img" src={`https://image.tmdb.org/t/p/w500/${series.poster_path}`}/>
                        </Link>
                    </div>
                ))}
            </Slider>
            </div>
        </div>
        </>
    );
}

