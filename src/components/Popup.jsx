import React from 'react';
import { IoClose, FaExternalLinkAlt, VscGithub } from 'react-icons/all';
import { useDispatch, useSelector } from 'react-redux';
import { isPopupClicked } from '../redux/popup/popup';

const Popup = (props) => {
  const {
    title,
    image,
    description,
    technologies,
    github,
    liveLink,
    handleClose,
  } = props;
  const dispatch = useDispatch();

  return (
    <section className="popup border bg-zei-dark relative px-6">
      <IoClose
        className="text-3xl absolute right-4 top-4 cursor-pointer"
        onClick={handleClose}
      />
      <h3 className="title my-6 text-xl font-medium ">{title}</h3>
      <img src={image} alt={title} className="image" />
      <p className="description">{description}</p>
      <ul className="technologies flex mt-6 mb-5 sm:mt-2 lg:mt-6 sm:mb-2 lg:mb-5">
        {technologies.map((tech) => (
          <li
            className="tech font-inter px-3 sm:px-1 md:px-3 last:pr-0 border-r border-gray-400 last:border-r-0 text-sm"
            key={tech}>
            {tech}
          </li>
        ))}
      </ul>
      <div className="live-git">
        <a className="see-live" href={liveLink} target="blank">
          <p className="btn-text">See Live</p>
          <FaExternalLinkAlt />
        </a>
        <a className="github">
          <p className="btn-text" href={github} target="blank">
            See Source
          </p>
          <VscGithub />
        </a>
      </div>
    </section>
  );
};

export default Popup;
