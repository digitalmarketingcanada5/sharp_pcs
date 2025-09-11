const ServicesContent = () => (
    <main className="bg-gray-50">
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto text-center mb-16">
                 <h2 className="text-3xl font-bold text-blue-900 mb-4">Managing Scope, Costs and Schedules</h2>
                <p className="text-gray-600 leading-relaxed">
                    Large EPC projects and capital improvement programs take years to accomplish, involve multiple stakeholders, large project teams, and ongoing change management. Containing scope, schedule, and cost – the backbone of any project – is what differentiates CMS and allows us to shine in program and project management.
                </p>
                 <p className="text-gray-600 leading-relaxed mt-4">
                    Founded by project controls experts, our program and project managers are trained in the rigors of project controls. We understand what affects the critical pieces of a project and how to solve them.
                </p>
            </div>

            {/* Partnering Section */}
             <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                    <img src="https://thecmsolution.com/wp-content/uploads/2024/02/Services-Pgm-Proj-mgmt-meeting-desktop.jpg" alt="Team meeting" className="rounded-lg shadow-xl"/>
                </div>
                <div className="text-left">
                     <h2 className="text-3xl font-bold text-blue-900 mb-4">Partnering for Coordinated Project Execution</h2>
                    <p className="text-gray-600 leading-relaxed">
                       Our role as the project manager is to be the eyes and ears of the client and to act in their best interest. Our approach begins with understanding and maintaining the design intent and the owner's purpose of use. From there, we identity the gaps and what it takes to improve the system. We develop a structure that builds in communication and project controls processes to ensure the right information is available for good decisions.
                    </p>
                </div>
            </div>

            {/* Quote Section */}
            <div className="text-center my-20">
                <blockquote className="text-2xl italic text-gray-700 font-serif border-l-4 border-blue-600 pl-6 inline-block">
                    "Project controls – solving critical issues of a project – is part of the CMS "DNA.""
                </blockquote>
            </div>

            {/* Specialties Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div className="text-left md:order-2">
                    <h2 className="text-3xl font-bold text-blue-900 mb-4">Specialties</h2>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 leading-relaxed">
                        <li>Scope Management</li>
                        <li>CPM Schedule Execution</li>
                        <li>Earned Value Management</li>
                        <li>Permitting, Environmental, Land Rights</li>
                        <li>Safety</li>
                        <li>Traffic controls</li>
                        <li>Inspection</li>
                        <li>Contract Compliance, DBE Outreach and Utilization</li>
                    </ul>
                </div>
                <div className="md:order-1">
                    <img src="https://thecmsolution.com/wp-content/uploads/2024/04/pgm-mgmt-specialities-desktop.jpg" alt="Specialties for program and project management" className="rounded-lg shadow-xl"/>
                </div>
            </div>

            {/* Solving Critical Issues Section */}
             <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                 <div>
                    <img src="https://thecmsolution.com/wp-content/uploads/2024/02/Services-Pgm-Proj-mgmt-gantt-chart-desktop.jpg" alt="Gantt chart" className="rounded-lg shadow-xl"/>
                </div>
                <div className="text-left">
                     <div className="flex items-center text-blue-600 mb-4">
                        <img src="https://thecmsolution.com/wp-content/uploads/2021/03/ico-innovation.svg" alt="Innovation Icon" className="h-8 w-8 mr-3"/>
                        <span className="font-bold tracking-wider">INNOVATION</span>
                    </div>
                     <h2 className="text-3xl font-bold text-blue-900 mb-4">Solving Critical Issues</h2>
                    <p className="text-gray-600 leading-relaxed">
                        As project controls experts, we know what drives scope, schedule, and cost. We identify the project's critical and near critical paths to bring focus to the proper activities and mitigate risks. We also understand earned value management, which enables us to evaluate a project's performance and suggest ways to bring struggling projects back on track. These skills enable us to make better decisions and to mitigate problems early on. We communicate this critical information a clear way, customized to specific stakeholders.
                    </p>
                </div>
            </div>
            
            {/* Projects Section */}
            <div className="text-center">
                <h2 className="text-3xl font-bold text-blue-900 mb-10">Solutions for Project Success</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Project 1 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden text-left">
                        <img src="https://thecmsolution.com/wp-content/uploads/2024/02/EDP-Pgm-mgmt-750x530-1-375x264.jpg" alt="Electric Distribution Planning" className="w-full h-48 object-cover"/>
                        <div className="p-6">
                            <h3 className="font-semibold text-blue-700 text-sm">Program Management, Project Management, Project Coordination</h3>
                            <p className="font-bold text-gray-800 my-2">Electric Distribution Planning Program Management</p>
                            <a href="https://thecmsolution.com/project/electric-distribution-construction-program-management/" className="text-blue-600 font-bold hover:underline text-sm">READ MORE</a>
                        </div>
                    </div>
                    {/* Project 2 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden text-left">
                        <img src="https://thecmsolution.com/wp-content/uploads/2024/02/LACounty-La-Mirada-Rendering750x530-375x264.jpg" alt="Public Works Facilities Program" className="w-full h-48 object-cover"/>
                        <div className="p-6">
                            <h3 className="font-semibold text-blue-700 text-sm">Project Management, Scope Management, Safety</h3>
                            <p className="font-bold text-gray-800 my-2">PM/CM for Public Works Facilities Program</p>
                            <a href="https://thecmsolution.com/project/project-management-for-public-works/" className="text-blue-600 font-bold hover:underline text-sm">READ MORE</a>
                        </div>
                    </div>
                    {/* Project 3 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden text-left">
                        <img src="https://thecmsolution.com/wp-content/uploads/2022/03/San-Jose-WRF-Feature-image-375x264.jpg" alt="San Jose Wastewater Facility" className="w-full h-48 object-cover"/>
                        <div className="p-6">
                             <h3 className="font-semibold text-blue-700 text-sm">Project Planning Services, Time Impact Analysis, Master Schedule</h3>
                            <p className="font-bold text-gray-800 my-2">San Jose-Santa Clara Regional Wastewater Facility CIP Program</p>
                            <a href="https://thecmsolution.com/project/san-jose-santa-clara-regional-wastewater-facility/" className="text-blue-600 font-bold hover:underline text-sm">READ MORE</a>
                        </div>
                    </div>
                </div>
            </div>
             {/* Next Service Section */}
            {/* <div className="mt-24 bg-white rounded-lg shadow-lg p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="text-left">
                        <h2 className="text-3xl font-bold text-blue-900 mb-4">Next Service</h2>
                        <a href="https://thecmsolution.com/service/project-controls-planning-scheduling/" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300">
                            PLANNING & SCHEDULING
                        </a>
                    </div>
                    <div>
                        <img src="https://thecmsolution.com/wp-content/uploads/2021/03/bg-services-2-mobile@2x.jpg" alt="Planning & Scheduling" className="rounded-lg" />
                    </div>
                </div>
            </div> */}
        </div>
    </main>
);

export default ServicesContent;
