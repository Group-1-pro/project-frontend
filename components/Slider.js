import React, { useState, useEffect } from 'react';



const Slider = () => {
    const [index, setIndex] = useState(1);

    const moveTo = (e) => {
        setIndex(e);
    };


    const changeSlide = (e) => {
        setIndex(prevIndex => prevIndex + e);
    };


    const showSlide = (e) => {
        const images = document.querySelectorAll(".slider-item");
        const indicators = document.querySelectorAll(".slider-indicators span");
        const contents = document.querySelectorAll(".slider-content h3");

        const newIndex = e > images.length ? 1 : e < 1 ? images.length : e;

        for (let i = 0; i < images.length; i++) {
            images[i].style.opacity = i === newIndex - 1 ? "1" : "0";
            indicators[i].style.width = i === newIndex - 1 ? "26px" : "8px";
            indicators[i].style.background = i === newIndex - 1 ? "#fff" : "#ffffffaf";
            contents[i].style.scale = i === newIndex - 1 ? "1" : "0";
            contents[i].style.opacity = i === newIndex - 1 ? "1" : "0";
            contents[i].style.transitionDelay = ".2s";
        }

        setIndex(newIndex);
    };


    useEffect(() => {
        const interval = setInterval(() => {
            changeSlide(1);
        }, 2000);

        return () => clearInterval(interval); // Clean up interval on component unmount

    }, []);

    useEffect(() => {
        showSlide(index);
    }, [index]);


    return (
        <>

            <div className="slider">
                <div className="slider-items">
                    <img className="slider-item" src="https://c0.wallpaperflare.com/preview/462/963/578/blur-charity-collaboration-community.jpg" alt="..." />
                    <img className="slider-item" src="https://wallpaperaccess.com/full/2580695.jpg" alt="..." />
                    <img className="slider-item" src="https://static.vecteezy.com/system/resources/previews/007/102/916/original/high-five-team-work-as-a-team-together-air-hands-bless-the-power-tag-team-multi-ethnic-groups-unity-together-in-the-volunteer-community-cooperation-business-team-success-concept-free-photo.JPG" alt="..." />
                </div>

                <div className="slider-controls">
                    <span className="bx bxs-chevron-left prev" onClick={() => changeSlide(-1)}></span>
                    <span className="bx bxs-chevron-right next" onClick={() => changeSlide(1)}></span>
                </div>

                <div className="slider-indicators">
                    <span onClick={() => moveTo(1)}></span>
                    <span onClick={() => moveTo(2)}></span>
                    <span onClick={() => moveTo(3)}></span>
                </div>

                <div className="slider-content">
                    <h3 className='sliderH3'>Empower</h3>
                    <h3 className='sliderH3'>Connect</h3>
                    <h3 className='sliderH3'>Thrive</h3>
                </div>
            </div>

        </>
    );
};


export default Slider;