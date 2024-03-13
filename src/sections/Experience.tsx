import React from "react";
import { useTranslation } from "react-i18next";

const Experience: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="experience" className="bg-gray-900 text-gray-200">
      <div className="container mx-auto p-5">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-start">
          {t("experience.title")}
        </h2>
        <div className="space-y-8">
          {/* React Developer Experience */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-teal-400">
              {t("experience.cliengo.title")}
            </h3>
            <p className="text-sm text-gray-400">
              {t("experience.cliengo.year")}
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4 text-gray-300">
              <li>{t("experience.cliengo.description_one")}</li>
              <li>{t("experience.cliengo.description_two")}</li>
              <li>{t("experience.cliengo.description_three")}</li>
            </ul>
          </div>

          {/* Front End Developer Experience */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-teal-400">
              {t("experience.endava.title")}
            </h3>
            <p className="text-sm text-gray-400">
              {t("experience.endava.year")}
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4 text-gray-300">
              <li>{t("experience.endava.description_one")}</li>
              <li>{t("experience.endava.description_two")}</li>
              <li>{t("experience.endava.description_three")}</li>
            </ul>
          </div>

          {/* React Native Developer Experience */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-teal-400">
              {t("experience.endava_dos.title")}
            </h3>
            <p className="text-sm text-gray-400">
              {t("experience.endava_dos.year")}
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4 text-gray-300">
              <li>{t("experience.endava_dos.description_one")}</li>
              <li>{t("experience.endava_dos.description_two")}</li>
              <li>{t("experience.endava_dos.description_three")}</li>
            </ul>
          </div>

          {/* Full Stack Developer Experience */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-teal-400">
              {t("experience.seeed.title")}
            </h3>
            <p className="text-sm text-gray-400">
              {t("experience.seeed.year")}
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4 text-gray-300">
              <li>{t("experience.seeed.description_one")}</li>
              <li>{t("experience.seeed.description_two")}</li>
              <li>{t("experience.seeed.description_three")}</li>
            </ul>
          </div>

          {/* Full Stack Developer Experience at Accenture */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-teal-400">
              {t("experience.accenture.title")}
            </h3>
            <p className="text-sm text-gray-400">
              {t("experience.accenture.year")}
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4 text-gray-300">
              <li>{t("experience.accenture.description_one")}</li>
              <li>{t("experience.accenture.description_two")}</li>
              <li>{t("experience.accenture.description_three")}</li>
            </ul>
          </div>

           {/* Javascript Developer Experience at Plataforma 5 */}
           <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-teal-400">
              {t("experience.plataforma.title")}
            </h3>
            <p className="text-sm text-gray-400">
              {t("experience.plataforma.year")}
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4 text-gray-300">
              <li>{t("experience.plataforma.description_one")}</li>
              <li>{t("experience.plataforma.description_two")}</li>
              <li>{t("experience.plataforma.description_three")}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
