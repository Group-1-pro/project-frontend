import React, { useRef, useState } from "react";
import { useAuth } from "@/contexts/auth";
import Slider from "@/components/Slider";
import Posts from "@/components/Posts";
import { useRouter } from 'next/router';
import PostForm from '@/components/PostForm';
import LoginForm from "@/components/LoginForm";


const Home_page = () => {
  const { login ,user } = useAuth();
  const sliderRef = useRef(null);
  const [showForm, setShowForm] = useState(false);
  const [logForm, setLogForm] = useState(false);


  const router = useRouter();

  const handleExploreClick = () => {
    if (sliderRef.current) {
      const yOffset = 800; // Adjust this value to scroll even further down
      const topPosition = sliderRef.current.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: topPosition + yOffset, behavior: "smooth" });
    }
  };


  const handleSubmitLoginForm = async (formData) => {

    login(formData.username, formData.password);

    try {
      // Call your login function here passing the formData.username and formData.password
      
      await handleLogin(formData);
  
      // Close the form
      setLogForm(false);
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  


  // const handleSubmitLoginForm = (formData) => {
  //   // Perform any actions with the form data here, like logging in or fetching user data
  //   console.log('Submitted login form data:', formData);

  //   // Call your login function here passing the formData.username and formData.password
  //   login(formData.username, formData.password);

   
    
  // };

  const handleAddOpportunityClick = () => {
    if (!user) {
      setLogForm(true); // Show the login form if the user is not logged in
    } else {
      setShowForm(true);
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
            <button className="homePageSecondBtn" onClick={handleAddOpportunityClick} >
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
        {showForm ?(
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                width: "80%",
                maxWidth: "600px",
              }}
            >
              <PostForm setShowForm={setShowForm} />

            </div>
          </div>
        ) : (
          logForm && ( // Only show the login form if logForm is true
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1000,
              }}
            >
              <div
                style={{
                  backgroundColor: "white",
                  padding: "20px",
                  borderRadius: "10px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  width: "80%",
                  maxWidth: "600px",
                }} >
                <LoginForm onSubmit={handleSubmitLoginForm} onClose={() => setLogForm(false)} />

              </div>
            </div>
          )

        )}

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