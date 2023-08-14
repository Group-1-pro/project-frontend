import React, { useRef, useState } from "react";
import { useAuth } from "@/contexts/auth";
import Slider from "@/components/Slider";
import Posts from "@/components/Posts";
import { useRouter } from 'next/router';
import PostForm from '@/components/PostForm';
import LoginForm from "@/components/LoginForm";

const Home_page = () => {
  const { login, user } = useAuth();
  const sliderRef = useRef(null);
  const [showForm, setShowForm] = useState(false);
  const [logForm, setLogForm] = useState(false);

  const router = useRouter();

  const handleExploreClick = () => {
    if (sliderRef.current) {
      const yOffset = 630; // Adjust this value to scroll even further down
      const topPosition = sliderRef.current.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: topPosition + yOffset, behavior: "smooth" });
    }
  };

  const handleSubmitLoginForm = async (formData) => {
    try {
      await login(formData.username, formData.password);
      setLogForm(false);
      router.push('/');
    } catch (error) {
      console.error("Login error:", error);
    }
  };


  const handleAddOpportunityClick = () => {
    if (!user) {
      setLogForm(true);
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
            <br /><br />
            Welcome to our website,
            <br />
            where the spirit of volunteerism transcends borders! Engaging in volunteer work abroad offers a unique and rewarding opportunity to immerse yourself in diverse cultures while making a positive impact on communities worldwide.
            <br />
            Our platform connects you with transformative volunteering experiences in different countries, fostering cross-cultural understanding and global citizenship.
          </p>

          <div className="homePage-button-container">
            <button className="homePageFirstBtn" onClick={handleExploreClick}>
              Explore Opportunities
            </button>
            <p className="homePageOrParagraph">or</p>
            <button className="homePageSecondBtn" onClick={handleAddOpportunityClick}>
              Add new Opportunities
            </button>
          </div>

        </div>

        <div className="homePageSliderDiv" ref={sliderRef}>
          <div id="slider-anchor" />
          <Slider className="w-48" />
        </div>
      </div>

      <div className="homePageSecondDiv">
        {showForm ? (
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
            <PostForm setShowForm={setShowForm} />
          </div>
        ) : (
          logForm && (
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
                  padding: "20px",
                  borderRadius: "10px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  width: "80%",
                  maxWidth: "600px",
                }}
              >
                <button
                  onClick={() => setLogForm(false)}
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'white',
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
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
