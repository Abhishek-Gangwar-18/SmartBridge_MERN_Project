import React from 'react';

const Contact = () => {
  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text__para">
          Got a technical issue? Want to send feedback about a beta feature? Let us know.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label htmlFor="email" className="form__label">Your Email</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              placeholder="example@gmail.com" 
              className="form__input mt-1" 
              required 
            />
          </div>
          <div>
            <label htmlFor="subject" className="form__label">Subject</label>
            <input 
              type="text" 
              id="subject" 
              name="subject"
              placeholder="Enter your subject" 
              className="form__input mt-1" 
              required 
            />
          </div>
          <div className='sm:col-span-2'>
            <label htmlFor="message" className="form__label">Your Message</label>
            <textarea 
              rows="6" 
              id="message" 
              name="message"
              placeholder="Write your message here..." 
              className="form__input mt-1" 
              required 
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
