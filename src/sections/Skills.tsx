import { useTranslation } from "react-i18next";

const Skills: React.FC = () => {
  const { t } = useTranslation();
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Node.js",
    "Chakra UI",
    "Material UI",
    "Next.js",
    "SQL",
    "AWS",
    "Cypress",
    "Redux",
    "Recoil",
    "Zustand",
    "GIT",
    "Google Cloud Platform",
  ];

  return (
    <section id="skills" className="p-8 text-gray-100">
      <h2 className="text-3xl lg:text-4xl font-bold mb-4 ">{t('skills.title')}</h2>
      <div className="flex flex-wrap -mx-2 bg-gray-800 p-6 rounded-lg shadow-md">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="m-2 bg-gray-900 text-teal-400 px-4 py-2 rounded-lg shadow"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
