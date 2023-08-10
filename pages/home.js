import React, { useRef } from "react";
import Slider from "@/components/Slider";
import Posts from "@/components/Posts";

const Home_page = () => {
  const sliderRef = useRef(null);

  const handleExploreClick = () => {
    if (sliderRef.current) {
      const yOffset = 800; // Adjust this value to scroll even further down
      const topPosition = sliderRef.current.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: topPosition + yOffset, behavior: "smooth" });
    }
  };

  return (
    <div className="homePageMainDiv">
      <div className="homePageFirstDiv">
        <div className="homePageParagraphAndBtnDiv">
          <p>
            Explore the World Through Volunteering: Make a Global Impact
            <br></br>

            <br></br>
            Welcome to our website,
            <br></br>
            where the spirit of volunteerism transcends borders! Engaging in volunteer work abroad offers a unique and rewarding opportunity to immerse yourself in diverse cultures while making a positive impact on communities worldwide.
            <br></br>
            Our platform connects you with transformative volunteering experiences in different countries, fostering cross-cultural understanding and global citizenship.
            <br></br>

            {/* <br></br>
            Whether you're passionate about education, healthcare, environmental conservation, or social development, our range of international volunteering programs allows you to contribute your skills and compassion to meaningful projects.
            <br></br>

            <br></br>
            Join us in this exciting journey of giving back, forging connections, and creating lasting memories as you explore the world through the lens of altruism.
            <br>
            </br>
            Let's unite to be the change we wish to see in the world, one volunteer adventure at a time! */}
          </p>
          <div className="homePage-button-container">
            <button className="homePageFirstBtn" onClick={handleExploreClick}>
              Explore Opportunities
            </button>
            <p className="homePageOrParagraph">or</p>
            <button className="homePageSecondBtn">
              Add new Opportunities
            </button>
          </div>
        </div>
        <div className="homePageSliderDiv" ref={sliderRef}>
          <div id="slider-anchor" /> {/* Anchor point for scrolling */}
          <Slider className="w-48" />
        </div>
      </div>
      <div className="homePageSecondDiv">
        <Posts />
      </div>
    </div>
  );
};

export default Home_page;

{/* <p>
  Explore the World Through Volunteering: Make a Global Impact
  <br></br>

  <br></br>
  Welcome to our website,
  <br></br>
  where the spirit of volunteerism transcends borders! Engaging in volunteer work abroad offers a unique and rewarding opportunity to immerse yourself in diverse cultures while making a positive impact on communities worldwide.
  <br></br>
  Our platform connects you with transformative volunteering experiences in different countries, fostering cross-cultural understanding and global citizenship.
  <br></br>

  <br></br>
  Whether you're passionate about education, healthcare, environmental conservation, or social development, our range of international volunteering programs allows you to contribute your skills and compassion to meaningful projects.
  <br></br>

  <br></br>
  Join us in this exciting journey of giving back, forging connections, and creating lasting memories as you explore the world through the lens of altruism.
  <br>
  </br>
  Let's unite to be the change we wish to see in the world, one volunteer adventure at a time!
</p> */}