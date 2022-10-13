import React from 'react';

const Skills = () => {
  const languages = ['Javascript', 'Ruby', 'HTML', 'CSS'];
  const frameworks = [
    'TailwindCSS',
    'React and Redux',
    'Ruby on Rails',
    'RSpec',
    'CapyBara',
    'Selenium',
  ];
  const skills = ['Github', 'Terminal', 'Codekit', 'Gitlab', 'Codepen'];

  return (
    <div className="skills-container px-6 grid justify-center ">
      <div className="grid grid-cols-2 pl-4 sm:pl-0 gap-y-8  mx-auto sm:grid-cols-3 sm:gap-x-8 pb-8 sm:w-[494px] px-5 border-b border-gray-500">
        <ul className="languages">
          <h3 className="text-zei-400 text-[12px] sm:text-lg tracking-wide">
            Languages
          </h3>
          {languages.map((language) => (
            <li className="text-sm mt-3 sm:text-sm" key={language}>
              {language}
            </li>
          ))}
        </ul>
        <ul className="frameworks">
          <h3 className="text-zei-400 text-[12px] sm:text-lg tracking-wide">
            Frameworks
          </h3>
          {frameworks.map((framework) => (
            <li className="text-sm mt-3 sm:text-sm" key={framework}>
              {framework}
            </li>
          ))}
        </ul>
        <ul className="skills">
          <h3 className="text-zei-400 text-[12px] sm:text-lg tracking-wide">
            Skills
          </h3>
          {skills.map((skill) => (
            <li className="text-sm mt-3 sm:text-sm" key={skill}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
