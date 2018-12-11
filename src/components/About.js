import React from 'react'; 
import Me from '../images/me.jpg'; 

const About = () => {
    return (
        <div className='about'>
            <div className='row'>
                <div className='col-md-4 col-sm-4'>
                    <div className='my-img'> 

                    <img src={Me} alt=''/> 
                    
                    </div>
                </div>
                <div className='col-md-8 col-sm-8'>
                    <h2>About Me</h2>
                    <p>
                        My name is Alisher. I am a developer specializing in web apps.
                        I have experience working with JavaScript .Net and Java building web application and software. 
                        Whether you are building a personal web blog or fully-fledged web application, I would like to help
                        meet your business goals. Please contact me today for a no commitmment conversation. 
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About; 
