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
                    <img className="slider-item" src="https://picsum.photos/id/652/3840/2160" alt="..." />
                    <img className="slider-item" src="https://picsum.photos/id/579/3840/2160" alt="..." />
                    <img className="slider-item" src="https://picsum.photos/id/683/3840/2160" alt="..." />
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
                    <h3 className='sliderH3'>Work in Progress</h3>
                    <h3 className='sliderH3'>Coming Soon</h3>
                    <h3 className='sliderH3'>Lorem Ipsum</h3>
                </div>
            </div>

        </>
    );
};


export default Slider;