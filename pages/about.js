import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';



const AboutPage = () => {

  const backgroundStyle = {
    backgroundImage: 'linear-gradient(60deg, #29323c 0%, #485563 100%)',
  };


  return (
    <div style={backgroundStyle}>


      <Navbar />


      <main>


        <div className="container">


          <div className="card card0">
            <div className="border">
              <h2 className='cardName'>Esmail Jawabreh</h2>
              <div className="icons">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
                <i className="fa fa-instagram" aria-hidden="true"></i>
                <i className="fa fa-github" aria-hidden="true"></i>
              </div>
            </div>
          </div>


          <div className="card1 big-card">
            <div className="card1-border">
              <h2 className='cardName'>Mohammed Shareef</h2>
              <div className="card1-icons">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
                <i className="fa fa-instagram" aria-hidden="true"></i>
                <i className="fa fa-github" aria-hidden="true"></i>
              </div>
            </div>
          </div>


          <div className="card card2">
            <div className="border">
              <h2 className='cardName'>Saif Obeidat</h2>
              <div className="icons">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
                <i className="fa fa-instagram" aria-hidden="true"></i>
                <i className="fa fa-github" aria-hidden="true"></i>
              </div>
            </div>
          </div>


        </div>



        <div className="container2">


          <div className="card card0">
            <div className="border">
              <h2 className='cardName'>Mohammed Shahin</h2>
              <div className="icons">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
                <i className="fa fa-instagram" aria-hidden="true"></i>
                <i className="fa fa-github" aria-hidden="true"></i>
              </div>
            </div>
          </div>


          <div className="card card2">
            <div className="border">
              <h2 className='cardName'>Tala Asfan</h2>
              <div className="icons">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
                <i className="fa fa-instagram" aria-hidden="true"></i>
                <i className="fa fa-github" aria-hidden="true"></i>
              </div>
            </div>
          </div>


          <div className="card card2">
            <div className="border">
              <h2 className='cardName'>Sara Alkateeb</h2>
              <div className="icons">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
                <i className="fa fa-instagram" aria-hidden="true"></i>
                <i className="fa fa-github" aria-hidden="true"></i>
              </div>
            </div>
          </div>


        </div>


      </main>


      <Footer />


    </div>
  );
};


export default AboutPage;