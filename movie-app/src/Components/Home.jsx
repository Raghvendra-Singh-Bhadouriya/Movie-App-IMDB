import "./Home.css"
import {Link} from "react-router-dom"
import axios from "axios"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Topmovie from "../Body/Allmovies/Topmovie"
import Topweb from "../Body/Allwebseries/Topweb"

import React, {useState, useEffect} from "react"

export default function Home(){ 

    

    const [bigImg, setBigImg] = useState([])

    useEffect(() => {
        TopPoster()
    }, [])

    async function TopPoster(){
        try {
            let res = await axios({
                method:"get",
                url:`https://api.themoviedb.org/3/movie/top_rated?api_key=68ae3ab018e32aad2fa3e1a4b51004cf`
            })
            setBigImg(res.data.results)
            console.log(res.data.results)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
      }

      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
      
    return(
        <>
        <div id="home">
            <div className="top-poster-slider-container">
                <div className="poster">
                <Slider {...settings}>
                    {bigImg.map((toprated) => {
                        return(  
                            <>                         
                            <div key={toprated.id} className="top_img-container">
                            <Link to={`/details/${toprated.id}`}>
                                <img className="top-img" src={`https://image.tmdb.org/t/p/w500/${toprated.backdrop_path}`}/>   
                            </Link>                        
                            </div> 
                            </>                          
                        )                                      
                    })}
                </Slider>
                </div>
            </div>
        </div>
        <Topmovie/>
        <Topweb/>


        </>
    )
}















/*https://api.themoviedb.org/3/movie/top_rated?api_key=68ae3ab018e32aad2fa3e1a4b51004cf

https://api.themoviedb.org/3/movie/popular?api_key=68ae3ab018e32aad2fa3e1a4b51004cf

https://api.themoviedb.org/3/movie/upcoming?api_key=68ae3ab018e32aad2fa3e1a4b51004cf

https://api.themoviedb.org/3/movie/now_playing?api_key=68ae3ab018e32aad2fa3e1a4b51004cf

https://api.themoviedb.org/3/tv/airing_today?api_key=68ae3ab018e32aad2fa3e1a4b51004cf

https://api.themoviedb.org/3/tv/on_the_air?api_key=68ae3ab018e32aad2fa3e1a4b51004cf

https://api.themoviedb.org/3/tv/top_rated?api_key=68ae3ab018e32aad2fa3e1a4b51004cf

https://api.themoviedb.org/3/tv/popular?api_key=68ae3ab018e32aad2fa3e1a4b51004cf




https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US

https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US*/