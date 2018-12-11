import React from 'react';
import Image1 from '../images/image1.jpg';
import Image2 from '../images/image2.jpg';
import Image3 from '../images/image3.jpg';

const Home = () => {
  return (
    <div className='home'>
      <div id='carouselExampleIndicators' className='carousel slide' data-ride='carousel'>
        <ol className='carousel-indicators'>
          <li data-target='#carouselExampleIndicators' data-slide-to='0' className='active'></li>
          <li data-target='#carouselExampleIndicators' data-slide-to='1'></li>
          <li data-target='#carouselExampleIndicators' data-slide-to='2'></li>
        </ol>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img className='d-block w-100' src={Image1} alt="First slide" />
            <div className='carousel-caption d-none d-md-block'>
              <h2> Websites</h2>
            </div>
          </div>
          <div className='carousel-item'>
            <img className='d-block w-100' src={Image2} alt="Second slide" />
            <div className='carousel-caption d-none d-md-block'>
              <h2> Mobile Apps</h2>
            </div>
          </div>
          <div className='carousel-item'>
            <img className='d-block w-100' src={Image3} alt='Third slide' />
            <div className='carousel-caption d-none d-md-block'>
              <h2> Web Applications</h2>
            </div>
          </div>
        </div>
        <a className='carousel-control-prev' href='#carouselExampleIndicators' role='button' data-slide='prev'>
          <span className='carousel-control-prev-icon' aria-hidden='true'></span>
          <span className='sr-only'>Previous</span>
        </a>
        <a className='carousel-control-next' href='#carouselExampleIndicators' role='button' data-slide='next'>
          <span className='carousel-control-next-icon' aria-hidden="true"></span>
          <span className='sr-only'>Next</span>
        </a>
      </div>

      <div className='container'>
        <h2>What we do</h2>
        <address>
          We provide competitive software and web solutions to people and small businesses in need of reliable alternatives for solving
          business problems. We use modern technology and tools that is scalable and on demand to meet your company needs. Please contact us today for a simple conversation 
          over coffee. We will be honoured to help you. 
       </address>
      </div>

    </div>

  );
}

export default Home

