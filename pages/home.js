import Slider from "@/components/Slider";


const Home_page = () => {
  return (

    <div className="homePageMainDiv">


      <div className="homePageParagraphAndbtnDiv">

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

          <br></br>
          Whether you're passionate about education, healthcare, environmental conservation, or social development, our range of international volunteering programs allows you to contribute your skills and compassion to meaningful projects.
          <br></br>

          <br></br>
          Join us in this exciting journey of giving back, forging connections, and creating lasting memories as you explore the world through the lens of altruism.
          <br>
          </br>
          Let's unite to be the change we wish to see in the world, one volunteer adventure at a time!
        </p>


        <div className="homePage-button-container">

          <button className="homePageFirstBtn">
            Explore Opportunities
          </button>

          <p className="homePageOrParagraph">or</p>

          <button className="homePageSecondBtn">
            Add new Opportunities
          </button>

        </div>

      </div>


      <div className="homePageSliderDiv">
        <Slider className="w-48" />
      </div>


    </div>

  );
};


export default Home_page;
