import React, { useState } from 'react';

const Contact = () => {
  const formData = useState({
    userName: '',
    userEmail: '',
    userText: '',
  });

  const handleSubmit = (e) => {};

  const handleChange = () => {};

  return (
    <section className="contact sm:w-9/12 md:w-7/12 xl:1/2 sm:mx-auto">
      <div className="contact-text">
        <h3 className="contact-us uppercase text-zei-400 text-center text-3xl mb-5 sm:lowercase sm:font-bold sm:text-5xl">
          Let's chat
        </h3>
        <p className="par text-base leading-6 mb-7 text-center sm:text-xl">
          If you're interested in developing an application, a feature, or some
          other project that requires coding. I would be delighted to help you
          with it.
        </p>
      </div>

      <form action="https://formspree.io/f/xyyvpnnk" className="form">
        <input
          type="text"
          className="my-2 outline-none focus:ring-green-400 text-black w-full focus:ring-2 rounded placeholder:text-gray-500 mb-4 md:py-3"
          placeholder="Enter your name"
          required
        />
        <input
          type="email"
          className="my-2 outline-none focus:ring-green-400 text-black w-full focus:ring-2 rounded placeholder:text-gray-500 mb-6 md:py-3"
          placeholder="Enter your email"
          required
          autoComplete="email"
        />
        <textarea
          className="outline-none focus:ring-green-400 text-black w-full focus:ring-2 placeholder:text-gray-500 "
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Write your message here "></textarea>

        <button className="submit my-8 bg-zei-600 text-sm px-4 py-3 hover:bg-zei-400 transition-colors active:bg-zei-900 shadow-sm active:transition-none sm:mt-9 sm:mx-auto sm:block sm:px-12 sm:py-4 md:mt-24 mb-24">
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
