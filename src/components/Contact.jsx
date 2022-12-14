import React from 'react';
import Form from './Form';

const Contact = () => {
  return (
    <section
      className='contact sm:w-9/12 md:w-7/12 xl:1/2 sm:mx-auto  px-6'
      id='contact'>
      <div className='contact-text'>
        <h3 className='contact-us uppercase text-zei-400 text-center text-3xl mb-5 sm:lowercase sm:font-bold sm:text-5xl'>
          Let's chat
        </h3>
        <p className='par text-base leading-6 mb-7 text-center sm:text-xl'>
          If you're interested in developing an application, a feature, or some
          other project that requires coding. I would be delighted to help you
          with it.
        </p>
      </div>

      <Form />
    </section>
  );
};

export default Contact;
