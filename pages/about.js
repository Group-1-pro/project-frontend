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
        <h1 className='aboutH'>About Us</h1>
        <p className='aboutParagraph'>
          We are a dedicated team of passionate full-stack developers, all currently enrolled at the Abdul Aziz Ghurair School of Advanced Computing (ASAC-LTUC) in Amman, Jordan.
          Our journey in the world of technology has been both exciting and transformative. With a shared love for coding and a drive to create innovative solutions, we&apos;ve come together to form a dynamic and forward-thinking team.
          Our time at ASAC-LTUC has not only sharpened our technical skills but has also nurtured a collaborative spirit that is at the core of our work. As we continue to learn and grow, we&apos;re committed to pushing the boundaries of what&apos;s possible in the digital realm.
          Thank you for joining us on this incredible journey!</p>
        <h5 className='aboutH'>Our Team:</h5>

        <div className='container1'>


          <div className= 'card EsmailCard'>
            <div className='border'>
              <h2 className='cardName'>Esmail Jawabreh</h2>
              <div className='icons'>
                <a className='link' href='https://www.linkedin.com/in/esmail-jawabreh-80624a250/'><i className='fa fa-linkedin' aria-hidden='false'></i></a>
                <a className='link' href='https://www.instagram.com/esmail.sudgi/'><i className='fa fa-instagram' aria-hidden='false'></i></a>
                <a className='link' href='https://github.com/Esmail-Jawabreh'><i className='fa fa-github' aria-hidden='false'></i></a>
              </div>
            </div>
          </div>


          <div className='card ShareefCard'>
            <div className='border'>
              <h2 className='cardName'>Mohammed Shareef</h2>
              <div className='icons'>
                <a className='link' href='https://www.linkedin.com/in/mshnas9/'><i className='fa fa-linkedin' aria-hidden='false'></i></a>
                <a className='link' href=''><i className='fa fa-instagram' aria-hidden='false'></i></a>
                <a className='link' href='https://github.com/mshnas9'><i className='fa fa-github' aria-hidden='false'></i></a>
              </div>
            </div>
          </div>


          <div className='card SaifCard'>
            <div className='border'>
              <h2 className='cardName'>Saif Obeidat</h2>
              <div className='icons'>
                <a className='link' href='https://www.linkedin.com/in/saif-obeidat-282730231/'><i className='fa fa-linkedin' aria-hidden='false'></i></a>
                <a className='link' href=''><i className='fa fa-instagram' aria-hidden='false'></i></a>
                <a className='link' href='https://github.com/saifobe'><i className='fa fa-github' aria-hidden='false'></i></a>
              </div>
            </div>
          </div>


        </div>



        <div className='container2'>


          <div className='card ShahinCard'>
            <div className='border'>
              <h2 className='cardName'>Mohammed Shahin</h2>
              <div className='icons'>
                <a className='link' href='https://www.linkedin.com/in/mohammad-shahin-982875225/'><i className='fa fa-linkedin' aria-hidden='false'></i></a>
                <a className='link' href=''><i className='fa fa-instagram' aria-hidden='false'></i></a>
                <a className='link' href='https://github.com/Mohammad-Shahin23'><i className='fa fa-github' aria-hidden='false'></i></a>
              </div>
            </div>
          </div>


          <div className='card TalaCard'>
            <div className='border'>
              <h2 className='cardName'>Tala Asfan</h2>
              <div className='icons'>
                <a className='link' href='https://www.linkedin.com/in/tala-asfan-b827ab17b/'><i className='fa fa-linkedin' aria-hidden='false'></i></a>
                <a className='link' href=''><i className='fa fa-instagram' aria-hidden='false'></i></a>
                <a className='link' href='https://github.com/asfantala'><i className='fa fa-github' aria-hidden='false'></i></a>
              </div>
            </div>
          </div>


          <div className='card SaraCard'>
            <div className='border'>
              <h2 className='cardName'>Sara Alkateeb</h2>
              <div className='icons'>
                <a className='link' href='https://www.linkedin.com/in/sara-alkhateeb-564273235/'><i className='fa fa-linkedin' aria-hidden='false'></i></a>
                <a className='link' href=''><i className='fa fa-instagram' aria-hidden='false'></i></a>
                <a className='link' href='https://github.com/Sara-Alkhateeb'><i className='fa fa-github' aria-hidden='false'></i></a>
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