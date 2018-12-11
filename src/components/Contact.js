import React from 'react';


const Contact = () => {

    return (

      <div className='container'>
        <h2>Contact Me</h2>
        <p>Feel free to contact me any time. I will offer you a good deal</p>
        <div className='row'>
          <div className='col-md-8 col-md-offset-2'>
            <form className='form-horizontal' action="https://formspree.io/alisherkabildjanov@yahoo.com" method="POST">
              <div className='form-group'>
                <label for='name'>Name</label>
                <input type='text' className="form-control" id='name' name='name' required />
              </div>
              <div className='form-group'>
                <label for='email'>Email</label>
                <input type='email' className='form-control' id='email' name='email' required />
              </div>
              <div className='form-group'>
                <label for='message'>Your Message</label>
                <textarea className='form-control' name='message' required></textarea>
              </div>
              <button type='submit' className='btn btn-default'>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    );
}
export default Contact;
