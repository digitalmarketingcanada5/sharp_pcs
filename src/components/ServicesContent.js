const ServicesContent = () => (
    <main className="bg-gray-50">
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto text-center mb-16">
                 <h2 className="text-3xl font-bold text-blue-900 mb-4">Delivering Comprehensive Project Control Solutions</h2>
                <p className="text-gray-600 leading-relaxed">
                    Complex EPC projects and capital improvement programs require years of dedication, coordination among numerous stakeholders, substantial project teams, and continuous change management. Managing scope, schedule, and cost effectively – the foundation of successful project delivery – is what sets SHARP PCS apart and enables us to excel in program and project management.
                </p>
                 <p className="text-gray-600 leading-relaxed mt-4">
                    Established by project controls specialists, our program and project managers bring deep expertise in project control methodologies. We have the insight to identify critical project elements and the expertise to implement effective solutions.
                </p>
            </div>

            {/* Partnering Section */}
             <div id="planning-scheduling" className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                    <img src="/services/services1.png" alt="Team meeting" className="rounded-lg shadow-xl"/>
                </div>
                <div className="text-left">
                     <div className="flex items-center text-blue-600 mb-4">
                        <img src="/globe.svg" alt="Partnership Icon" className="h-8 w-8 mr-3"/>
                        <span className="font-bold tracking-wider">PARTNERSHIP</span>
                    </div>
                     <h2 className="text-3xl font-bold text-blue-900 mb-4">Building Strategic Partnerships for Project Success</h2>
                    <p className="text-gray-600 leading-relaxed">
                       As project managers, we serve as the client&apos;s trusted advisors and advocates, acting in their best interests at every stage. Our methodology starts with comprehensive understanding of the design vision and the owner&apos;s operational objectives. Building on this foundation, we identify potential gaps and develop strategies for system optimization. We establish robust communication frameworks and project control mechanisms that ensure stakeholders have access to timely, accurate information for informed decision-making.
                    </p>
                </div>
            </div>

            {/* Quote Section */}
            <div className="text-center my-20">
                <blockquote className="text-2xl italic text-gray-700 font-serif border-l-4 border-blue-600 pl-6 inline-block">
                    &ldquo;Project controls – solving critical issues of a project – is part of our &ldquo;DNA.&rdquo;&rdquo;
                </blockquote>
            </div>

            {/* Specialties Section */}
            <div id="cost-controls" className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div className="text-left md:order-2">
                    <div className="flex items-center text-blue-600 mb-4">
                        <img src="/window.svg" alt="Specialties Icon" className="h-8 w-8 mr-3"/>
                        <span className="font-bold tracking-wider">SPECIALTIES</span>
                    </div>
                    <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Core Expertise</h2>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 leading-relaxed">
                        <li>Scope Management</li>
                        <li>CPM Schedule Execution</li>
                        <li>Earned Value Management</li>
                        <li>Cost Controls</li>
                        <li>Cost Estimating</li>
                        <li>Project Controls</li>
                        <li>Project Processing</li>
                    </ul>
                </div>
                <div className="md:order-1">
                    <img src="/services/services2.png" alt="Specialties for program and project management" className="rounded-lg shadow-xl"/>
                </div>
            </div>

            {/* Solving Critical Issues Section */}
             <div id="executive-reporting" className="grid md:grid-cols-2 gap-12 items-center mb-20">
                 <div>
                    <img src="/services/services3.png" alt="Gantt chart" className="rounded-lg shadow-xl"/>
                </div>
                <div className="text-left">
                     <div className="flex items-center text-blue-600 mb-4">
                        <img src="/file.svg" alt="Innovation Icon" className="h-8 w-8 mr-3"/>
                        <span className="font-bold tracking-wider">INNOVATION</span>
                    </div>
                     <h2 className="text-3xl font-bold text-blue-900 mb-4">Resolving Complex Project Challenges</h2>
                    <p className="text-gray-600 leading-relaxed">
                        With our deep expertise in project controls, we understand the key factors influencing scope, schedule, and cost. We pinpoint critical and near-critical paths to focus efforts on high-impact activities and proactively manage risks. Our proficiency in earned value management allows us to assess project performance objectively and develop strategies to restore projects that are off-track. This expertise empowers us to make informed decisions and address issues before they escalate. We deliver this vital information through clear, stakeholder-specific communication channels.
                    </p>
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
