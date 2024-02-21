import React from 'react';

const Experience: React.FC = () => {
    return (
        <section id="experience" className="bg-gray-900 text-gray-200">
            <div className="container">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-start">Experience</h2>
                <div className="space-y-8">
                    {/* React Developer Experience */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                        <div className="md:col-span-1">
                            <h3 className="text-xl font-semibold">React Developer</h3>
                            <p className="text-gray-400">Cliengo Argentina</p>
                            <p className="text-gray-400">2022 - 2023</p>
                        </div>
                        <div className="md:col-span-2">
                            <ul className="list-disc list-inside space-y-2 text-start">
                                <li>Worked in the conversation experience team developing React applications for chatbot conversations.</li>
                                <li>Built reusable UI components for multiple projects.</li>
                                <li>Deployed React applications on AWS cloud platform.</li>
                                <li>Maintained high coding standards with TypeScript and ESLint.</li>
                                <li>Managed projects using Agile methodology, including Scrum.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Front End Developer Experience */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                        <div className="md:col-span-1">
                            <h3 className="text-xl font-semibold">Front End Developer</h3>
                            <p className="text-gray-400">Client: Adobe, Endava Argentina</p>
                            <p className="text-gray-400">2021 - 2022</p>
                        </div>
                        <div className="md:col-span-2">
                            <ul className="list-disc list-inside space-y-2 text-start   ">
                                <li>Developed data-driven UIs from designs, using HTML, CSS, JavaScript, and React.</li>
                                <li>Created reusable UI components for enhanced user experience.</li>
                                <li>Participated in daily standup meetings for progress updates.</li>
                            </ul>
                        </div>
                    </div>
                    {/* Front End Developer Experience */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                        <div className="md:col-span-1">
                            <h3 className="text-xl font-semibold">React Native Developer</h3>
                            <p className="text-gray-400">Client: Varsity, Endava Argentina</p>
                            <p className="text-gray-400">2021 - 2021</p>
                        </div>
                        <div className="md:col-span-2">
                            <ul className="list-disc list-inside space-y-2 text-start   ">
                                <li>Development of mobile application in React Native.</li>
                                <li>Participated in daily standup meetings providing feedback on progress towards project milestones.</li>
                                <li>Collaborated with UX and UI designers to implement user-friendly design elements in the mobile app.</li>
                                <li>Utilized Redux library to manage the state of the React Native application and ensure scalability.</li>
                            </ul>
                        </div>
                    </div>
                    {/* Front End Developer Experience */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                        <div className="md:col-span-1">
                            <h3 className="text-xl font-semibold">Full Stack Developer</h3>
                            <p className="text-gray-400">Seeed, USA</p>
                            <p className="text-gray-400">2020 - 2021</p>
                        </div>
                        <div className="md:col-span-2">
                            <ul className="list-disc list-inside space-y-2 text-start   ">
                                <li>Development of applications using React, Firebase, Mysql database, and GCP pub/sub.</li>
                                <li>Implementation of Scrum Methodology.</li>
                                <li>Created RESTful APIs using Node.js with Express framework for data manipulation.</li>
                            </ul>
                        </div>
                    </div>
                    {/* Front End Developer Experience */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                        <div className="md:col-span-1">
                            <h3 className="text-xl font-semibold">Full Stack Developer</h3>
                            <p className="text-gray-400">Accenture, Argentina</p>
                            <p className="text-gray-400">2019 - 2020</p>
                        </div>
                        <div className="md:col-span-2">
                            <ul className="list-disc list-inside space-y-2 text-start   ">
                                <li>Design and development of web solutions and applications using Amazon Web Services, Javascript frameworks (for front-end and back-end), SQL and NoSQL databases.</li>
                                <li>Managed source control repositories with Git including branching strategies and pull requests.</li>
                                <li>Developed unit testing and integration testing for functionality.</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Experience;
