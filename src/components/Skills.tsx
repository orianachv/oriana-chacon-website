import React from 'react';

// Importación de logos
import reactLogo from '../logos/react.png';
import html5Logo from '../logos/html5.png';
import css3Logo from '../logos/css3.jpeg';
import tailwindLogo from '../logos/tailwind.jpeg';
import chakraUILogo from '../logos/chakra-ui.jpeg';
import materialUILogo from '../logos/material-ui.png';
import nextjsLogo from '../logos/nextjs.jpeg';
import nodeLogo from '../logos/node.jpeg';
import sqlLogo from '../logos/sql.png';
import awsLogo from '../logos/aws.jpeg';
import eslintLogo from '../logos/eslint.png';
import cypressLogo from '../logos/cypress.png';

const skillData = [
  { name: 'React', logo: reactLogo },
  { name: 'HTML5', logo: html5Logo },
  { name: 'CSS3', logo: css3Logo },
  { name: 'Tailwind CSS', logo: tailwindLogo },
  { name: 'Chakra UI', logo: chakraUILogo },
  { name: 'Material UI', logo: materialUILogo },
  { name: 'Next.js', logo: nextjsLogo },
  { name: 'Node.js', logo: nodeLogo },
  { name: 'SQL', logo: sqlLogo },
  { name: 'AWS', logo: awsLogo },
  { name: 'ESLint', logo: eslintLogo },
  { name: 'Cypress', logo: cypressLogo },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="bg-gray-900 text-white">
      <div className="max-w-4xl">
        <h2 className="text-4xl font-bold mb-6 text-start">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skillData.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center p-4 bg-gray-700 hover:bg-gray-600 hover:shadow-xl transition-all duration-300 ease-in-out rounded-lg">
              <img src={skill.logo} alt={skill.name} className="h-20 w-20 mb-2 object-contain object-center" />
              <span className="text-lg">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
