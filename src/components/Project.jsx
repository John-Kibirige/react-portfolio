import React from 'react';

const Project = (props) => {
  const { image, title, description, technologies } = props;
  return (
    <section className="project">
      <div className="img-cont">
        <img src={image} alt={title} className="py-2" />
      </div>
      <div className="text-cont">
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
        <ul className="technologies">
          {technologies.map((tech) => (
            <li className="tech" key={tech}>
              {tech}
            </li>
          ))}
        </ul>
        <button className="see-pjt" type="button">
          See Project
        </button>
      </div>
    </section>
  );
};

export default Project;
