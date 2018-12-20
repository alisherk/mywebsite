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
                        My name is Alisher. I am a developer specializing in web application and web design.
                        I have experience working with JavaScript, .Net and Java building web applications and software to solve real business problems. I have been working in graphic and web design with websites and blogs adding a personal 
                        artistic touch. Whether need a website for your personal needs  or full web application to solve a business problem, I would like to help
                        meet your personal and business goals. Please contact me today and let's chat about your needs. At the very least, 
                        we will have a great conversation over a cup of coffee. 

                    </p>
                </div>
            </div>
        </div>
    );
}

export default About; 
