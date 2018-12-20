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
            <img className='d-block w-100' src={Image1} alt='First slide' />
            <div className='carousel-caption'>
              <h3> Websites</h3>
            </div>
          </div>
          <div className='carousel-item'>
            <img className='d-block w-100' src={Image2} alt='Second slide' />
            <div className='carousel-caption'>
              <h3> Mobile Apps</h3>
            </div>
          </div>
          <div className='carousel-item'>
            <img className='d-block w-100' src={Image3} alt='Third slide' />
            <div className='carousel-caption'>
              <h3> Web Applications</h3>
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
        <h3>What we do</h3>
        <section>
          We provide web solutions to individuals and small business in need of reliable web options. We use modern technology and tools that are scalable and on demand to meet your needs. Please contact us today for a simple conversation 
          over coffee. We will be glad to help you out. 
           
          <p> We consult on hosting options for your website, apps and databases. 
             We will also help maintain your web apps for personal or business use. If you are someone who does not 
            want to deal with technical details of maintaning websites or apps, we can help. </p>
       </section>
      </div>

    </div>

  );
}

export default Home

