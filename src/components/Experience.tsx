import React from 'react';

const Experience: React.FC = () => {
    return (
        <section id="experience" className="bg-gray-900 text-gray-200">
            <div className="container mx-auto p-5">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-start">Experience</h2>
                <div className="space-y-8">

                    {/* React Developer Experience */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-teal-400">React Developer - Cliengo Argentina</h3>
                        <p className="text-sm text-gray-400">2022 - 2023</p>
                        <ul className="list-disc list-inside space-y-2 mt-4 text-gray-300">
                            <li>Worked in the conversation experience team developing React applications for chatbot conversations.</li>
                            <li>Built reusable UI components for multiple projects.</li>
                            <li>Deployed React applications on AWS cloud platform.</li>
                            <li>Maintained high coding standards with TypeScript and ESLint.</li>
                            <li>Managed projects using Agile methodology, including Scrum.</li>
                        </ul>
                    </div>

                    {/* Front End Developer Experience */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-teal-400">Front End Developer - Client: Adobe, Endava Argentina</h3>
                        <p className="text-sm text-gray-400">2021 - 2022</p>
                        <ul className="list-disc list-inside space-y-2 mt-4 text-gray-300">
                            <li>Developed data-driven UIs from designs, using HTML, CSS, JavaScript, and React.</li>
                            <li>Created reusable UI components for enhanced user experience.</li>
                            <li>Participated in daily standup meetings for progress updates.</li>
                        </ul>
                    </div>

                    {/* React Native Developer Experience */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-teal-400">React Native Developer - Client: Varsity, Endava Argentina</h3>
                        <p className="text-sm text-gray-400">2021 - 2021</p>
                        <ul className="list-disc list-inside space-y-2 mt-4 text-gray-300">
                            <li>Development of mobile application in React Native.</li>
                            <li>Participated in daily standup meetings providing feedback on progress towards project milestones.</li>
                            <li>Collaborated with UX and UI designers to implement user-friendly design elements in the mobile app.</li>
                            <li>Utilized Redux library to manage the state of the React Native application and ensure scalability.</li>
                        </ul>
                    </div>

                    {/* Full Stack Developer Experience */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-teal-400">Full Stack Developer - Seeed, USA</h3>
                        <p className="text-sm text-gray-400">2020 - 2021</p>
                        <ul className="list-disc list-inside space-y-2 mt-4 text-gray-300">
                            <li>Development of applications using React, Firebase, Mysql database, and GCP pub/sub.</li>
                            <li>Implementation of Scrum Methodology.</li>
                            <li>Created RESTful APIs using Node.js with Express framework for data manipulation.</li>
                        </ul>
                    </div>

                    {/* Full Stack Developer Experience at Accenture */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-teal-400">Full Stack Developer - Accenture, Argentina</h3>
                        <p className="text-sm text-gray-400">2019 - 2020</p>
                        <ul className="list-disc list-inside space-y-2 mt-4 text-gray-300">
                            <li>Design and development of web solutions and applications using Amazon Web Services, Javascript frameworks (for front-end and back-end), SQL and NoSQL databases.</li>
                            <li>Managed source control repositories with Git including branching strategies and pull requests.</li>
                            <li>Developed unit testing and integration testing for functionality.</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Experience;
