import React from "react";
import { IoClose, FaExternalLinkAlt, VscGithub } from "react-icons/all";

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

  return (
    <section className="popup border bg-zei-dark relative px-6 z-50 sm:mx-[9.1vw] h-[100vh] overflow-y-auto">
      <IoClose
        className="text-3xl absolute right-4 top-4 cursor-pointer hover:border transition-all"
        onClick={handleClose}
      />
      <h3 className="title mb-6 mt-10 text-xl font-medium sm:text-3xl">
        {title}
      </h3>
      <img
        src={image}
        alt={title}
        className="image mb-6 sm:max-h-[505px] w-initial mx-auto"
      />
      <p className="description text-center text-base py-8 sm:max-w-[70%] md:max-w-[70%] mx-auto md:text-xl">
        {description}
      </p>
      <ul className="technologies flex mt-6 mb-5 sm:mt-2 lg:mt-6 sm:mb-2 lg:mb-5 justify-center">
        {technologies.map((tech) => (
          <li
            className="tech font-inter text-sm border-gray-400 border-l last:border-r px-[6px]"
            key={tech}
          >
            {tech}
          </li>
        ))}
      </ul>
      <div className="live-git flex flex-col gap-5 items-center mb-8 sm:flex-row sm:justify-center mt-8">
        <a
          className="see-live flex items-center space-x-5 bg-zei-600 w-fit px-3 py-3 hover:bg-zei-400 transition-colors active:bg-zei-900"
          href={liveLink}
          target="blank"
        >
          <p className="btn-text">See Live</p>
          <FaExternalLinkAlt />
        </a>
        <a
          className="github flex items-center space-x-5 bg-zei-600 w-fit px-3 py-3 hover:bg-zei-400 transition-colors active:bg-zei-900"
          href={github}
          target="blank"
        >
          <p className="btn-text">See Source</p>
          <VscGithub />
        </a>
      </div>
    </section>
  );
};

export default Popup;
