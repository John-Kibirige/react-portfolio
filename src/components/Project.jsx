import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isPopupClicked } from '../redux/popup/popup';
import Popup from './Popup';

const Project = (props) => {
  const { image, title, description, technologies, github, liveLink, index } =
    props;

  const [clicked, setClicked] = useState(false);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(isPopupClicked());
    setClicked(false);
  };

  const handleClick = () => {
    dispatch(isPopupClicked());
    setClicked((state) => !state);
  };

  return (
    <section className='project mb-10 sm:mb-14 transition-all relative'>
      <div className='projects-container sm:flex sm:mx-[1vw] lg:mx-[9.1vw]  gap-6 sm:gap-4 lg:gap-6'>
        <div
          className={`img-cont sm:w-3/5 ${
            index % 2 === 1 ? 'order-2' : 'order-1'
          }`}>
          <img src={image} alt={title} className='w-[100%] min-h-[237px]' />
        </div>
        <div
          className={`text-cont mt-10 sm:w-2/5 sm:mt-0 lg:mt-4 ${
            index % 2 === 1 ? 'order-1' : 'order-2'
          }`}>
          <h3 className='title text-3xl font-medium mb-6 sm:mb-1 lg:mb-6'>
            {title}
          </h3>
          <p className='description text-xl leading-7 text-gray-300 sm:text-[18px] lg:text-xl'>
            {description}
          </p>
          <ul className='technologies flex mt-6 mb-5 sm:mt-2 lg:mt-6 sm:mb-2 lg:mb-5'>
            {technologies.map((tech) => (
              <li
                className='tech font-inter px-3 sm:px-1 md:px-3 last:pr-0 border-r border-gray-400 last:border-r-0 text-sm'
                key={tech}>
                {tech}
              </li>
            ))}
          </ul>
          <button
            className='see-pjt bg-zei-600 text-sm px-4 py-3 hover:bg-zei-400 transition-colors active:bg-zei-900 shadow-sm active:transition-none sm:mt-3'
            type='button'
            onClick={handleClick}>
            See Project
          </button>
        </div>
      </div>

      <div className='popup-container absolute top-0'>
        {clicked && (
          <Popup
            title={title}
            image={image}
            description={description}
            technologies={technologies}
            github={github}
            liveLink={liveLink}
            handleClose={() => handleClose()}
          />
        )}
      </div>
    </section>
  );
};

export default Project;
