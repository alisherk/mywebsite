import React from 'react'; 
import Me from '../images/me.jpg'; 

const About = () => {
    return (
        <div className='about'>
            <div className='row'>
                <div className='col-md-4 col-sm-4'>
                    <div className='my-img'> 
                    <img src={Me} alt='Alisher pic'/> 
                    </div>
                </div>
                <div className='col-md-8 col-sm-8'>
                    <h2>About Me</h2>
                    <p>
                        My name is Alisher. I am a developer specializing in web apps.
                        I have experience working with JavaScript, .Net and Java building web applications and software for solving 
                        business problems. I have been working in graphic and web design developing websites and blogs adding a personal 
                        artistic touch. I have also great project management skills. Whether you are building a personal web blog or fully-fledged web application, I would like to help
                        meet your business goals. Please contact me today for no commitmment conversation. At the very least, 
                        we will have a great conversation over a cup of coffee. 

                    </p>
                </div>
            </div>
        </div>
    );
}

export default About; 
