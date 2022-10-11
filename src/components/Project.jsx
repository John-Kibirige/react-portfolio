import React from 'react';

const Project = (props) => {
  const { image, title, description, technologies } = props;
  return (
    <section className="project mb-10 sm:mb-14">
      <div className="projects-container sm:flex sm:mx-[1vw] lg:mx-[9.1vw]  gap-6 sm:gap-4 lg:gap-6">
        <div className="img-cont sm:w-3/5">
          <img src={image} alt={title} className="w-[100%] min-h-[237px]" />
        </div>
        <div className="text-cont mt-10 sm:w-2/5 sm:mt-0 lg:mt-4">
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
                key={tech}>
                {tech}
              </li>
            ))}
          </ul>
          <button
            className="see-pjt bg-zei-600 text-sm px-4 py-3 hover:bg-zei-400 transition-colors active:bg-zei-900 shadow-sm active:transition-none sm:mt-3"
            type="button">
            See Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Project;
