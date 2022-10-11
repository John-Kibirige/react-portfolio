import React from 'react';
import Project from './Project';
import data from '../data/data';

const RecentWork = () => {
  const projectElements = data.map((project) => {
    const { image, title, description, technologies, id } = project;
    return (
      <Project
        key={id}
        image={image}
        title={title}
        description={description}
        technologies={technologies}
      />
    );
  });

  return (
    <section className="recent-work sm:my-36">
      <h1 className="text-[40px] uppercase text-zei-400 border-b border-gray-500 mb-5 pb-7 sm:capitalize sm:tracking-wide sm:font-bold  sm:text-[4.26vw] sm:mx-[9.1vw] ">
        My recent work
      </h1>
      <div className="projects-container pt-5">{projectElements}</div>
    </section>
  );
};

export default RecentWork;
