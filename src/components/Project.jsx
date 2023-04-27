import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isPopupClicked } from "../redux/popup/popup";
import blurSequence from "../scripts/blur";
import Popup from "./Popup";

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

  console.log(
    "these are things ",
    image,
    title,
    description,
    technologies,
    github,
    liveLink,
    index,
    "this is the end"
  );

  return (
    <section className="project mb-10 sm:mb-14 transition-all relative">
      <div className="projects-container sm:flex sm:mx-[1vw] lg:mx-[9.1vw]  gap-6 sm:gap-4 lg:gap-6">
        <div
          className={`img-cont sm:w-3/5 ${
            index % 2 === 1 ? "order-1" : "order-2"
          } max-h-[385px] `}
        >
          <img
            src={image}
            alt={title}
            className=" block mx-auto w-full h-full"
          />
        </div>
        <div
          className={`text-cont mt-10 sm:w-2/5 sm:mt-0 lg:mt-4 ${
            index % 2 === 1 ? "order-2" : "order-1"
          }`}
        >
          <h3 className="title text-3xl font-medium mb-6 sm:mb-1 lg:mb-6">
            {title}
          </h3>
          <p className="description text-xl leading-7 text-gray-300 sm:text-[18px] lg:text-xl">
            {description}
          </p>
          <ul className="technologies flex mt-6 mb-5 sm:mt-2 lg:mt-6 sm:mb-2 lg:mb-5">
            {technologies.map((tech) => (
              <li
                className="tech font-inter px-3 sm:px-1 md:px-3 last:pr-0 border-r border-gray-400 last:border-r-0 text-sm"
                key={tech}
              >
                {tech}
              </li>
            ))}
          </ul>
          <button
            className="see-pjt bg-zei-600 text-sm px-4 py-3 hover:bg-zei-400 transition-colors active:bg-zei-900 shadow-sm active:transition-none sm:mt-3"
            type="button"
            onClick={handleClick}
          >
            See Project
          </button>
        </div>
      </div>

      {clicked && (
        <div className="popup-container fixed top-0 left-0 right-0 bottom-0 overflow-y-auto z-[9999]">
          <Popup
            title={title}
            image={image}
            description={description}
            technologies={technologies}
            github={github}
            liveLink={liveLink}
            handleClose={() => handleClose()}
          />
        </div>
      )}

      {/* blur effects */}
      {blurSequence(1).includes(index + 1) && (
        <div className="absolute w-[316px] h-7 rotate-51 bg-white -left-24 bottom-36 md:bottom-0 md:-left-16 md:top-28 md:w-[406px] md:h-8 filter blur-xl opacity-40"></div>
      )}

      {blurSequence(2).includes(index + 1) && (
        <div className="absolute w-[252px] h-12 -rotate-51 -right-28 bg-white bottom-64 md:h-16 md:-right-14 md:bottom-52 md:w-[427px] filter blur-xl opacity-40 rounded-[100%]"></div>
      )}

      {blurSequence(3).includes(index + 1) && (
        <div className="absolute bg-slate-400 w-36 h-20 -left-7 rounded-[100%] bottom-44 -z-10 opacity-60 filter blur-xl md:bottom-5 md:opacity-40 md:bg-white md:left-24 md:w-44 md:h-[118px]"></div>
      )}

      {blurSequence(4).includes(index + 1) && (
        <div className="absolute bg-slate-100 w-36 h-20 rounded-[100%] -right-8 bottom-[200px] rotate-27 md:top-0 md:w-72 md:h-24 md:-z-10 filter blur-xl opacity-40"></div>
      )}
    </section>
  );
};

export default Project;
