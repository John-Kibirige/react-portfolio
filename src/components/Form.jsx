import { useForm, ValidationError } from '@formspree/react';
import React from 'react';

const Form = () => {
  const [state, handleSubmit] = useForm('xyyvpnnk');

  console.log('the errors in the project we do have ', state.errors);

  if (state.succeeded) {
    return <div>Thank you for signing up!</div>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='name '
        required
        className='outline-none focus:ring-green-400 text-black w-full focus:ring-2 rounded placeholder:text-gray-500 focus:cursor-text md:py-3'
        placeholder='Enter your name'
      />

      <input
        type='email'
        name='email'
        required
        placeholder='Enter your email'
        className='outline-none focus:ring-green-400 text-black w-full focus:ring-2 placeholder:text-gray-500 my-4 md:py-3'
      />
      <textarea
        className='outline-none focus:ring-green-400 text-black w-full focus:ring-2 placeholder:text-gray-500 '
        name='userText'
        placeholder='Write your message here '></textarea>

      <button
        type='submit'
        disabled={state.submitting}
        className='submit my-8 bg-zei-600 text-sm px-4 py-3 hover:bg-zei-400 transition-colors active:bg-zei-900 shadow-sm active:transition-none sm:mt-9 mx-auto block sm:px-12 sm:py-4 md:mt-24 mb-20'>
        Send
      </button>
    </form>
  );
};

export default Form;
