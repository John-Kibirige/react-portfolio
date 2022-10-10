import React from 'react';

const Skills = () => {
  const languages = ['Javascript', 'Ruby', 'HtML', 'CSS'];
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
    <div className="grid grid-cols-2 pl-7 gap-y-8">
      <ul className="languages">
        <h3 className="text-zei-400 text-[12px]">Languages</h3>
        {languages.map((language) => (
          <li className="text-sm mt-3" key={language}>
            {language}
          </li>
        ))}
      </ul>
      <ul className="frameworks">
        <h3 className="text-zei-400 text-[12px]">Frameworks</h3>
        {frameworks.map((framework) => (
          <li className="text-sm mt-3" key={framework}>
            {framework}
          </li>
        ))}
      </ul>
      <ul className="skills">
        <h3 className="text-zei-400 text-[12px]">Skills</h3>
        {skills.map((skill) => (
          <li className="text-sm mt-3" key={skill}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
