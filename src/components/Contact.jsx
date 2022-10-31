import React, { useState } from 'react';
import { isEmail, isEmpty } from '../scripts/validateEmail';

const Contact = () => {
  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    userText: '',
  });

  const [validations, setValidations] = useState({
    userName: true,
    userText: true,
  });

  const [emailVal, setEmailVal] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    setValidations({
      userName: !isEmpty(formData.userName),
      userText: !isEmpty(formData.userText),
    });

    setEmailVal(isEmail(formData.userEmail));
    setFormData({
      userName: '',
      userEmail: '',
      userText: '',
    });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });

    setEmailVal(isEmail(formData.userEmail));

    setValidations((prev) => {
      return {
        ...prev,
        [name]: true,
      };
    });
  };

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

      <form
        action='https://formspree.io/f/xaykpzbv'
        method='POST'
        className='form'
        onSubmit={handleSubmit}>
        <div
          className={`name-wrapper my-2 md:py-3 mb-4 ${
            !validations.userName && 'mb-0'
          }`}>
          <input
            type='text'
            className='outline-none focus:ring-green-400 text-black w-full focus:ring-2 rounded placeholder:text-gray-500'
            placeholder='Enter your name'
            value={formData.userName}
            name='userName'
            onChange={handleChange}
          />
          {!validations.userName && (
            <p className='text-red-500 pt-1 text-sm'>
              Please fill in your name
            </p>
          )}
        </div>

        <div
          className={`email-wrapper my-2 md:py-3 mb-6 mt-0 ${
            !emailVal && 'mb-1'
          }`}>
          <input
            type='email'
            className='outline-none focus:ring-green-400 text-black w-full focus:ring-2 rounded placeholder:text-gray-500 md:py-3'
            placeholder='Enter your email'
            autoComplete='email'
            value={formData.userEmail}
            name={'userEmail'}
            onChange={handleChange}
          />
          {!emailVal && (
            <p className='text-red-500 pt-1 text-sm'>
              The Email field is empty or the email inserted is invalid
            </p>
          )}
        </div>

        <div className='user-text-wrapper'>
          <textarea
            className='outline-none focus:ring-green-400 text-black w-full focus:ring-2 placeholder:text-gray-500 '
            name='userText'
            id=''
            cols='30'
            rows='10'
            placeholder='Write your message here '
            value={formData.userText}
            onChange={handleChange}></textarea>
          {!validations.userText && (
            <p className='text-red-500 pt-1 text-sm'>
              Please add some text in the text area above
            </p>
          )}
        </div>

        <button className='submit my-8 bg-zei-600 text-sm px-4 py-3 hover:bg-zei-400 transition-colors active:bg-zei-900 shadow-sm active:transition-none sm:mt-9 mx-auto block sm:px-12 sm:py-4 md:mt-24 mb-20'>
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
