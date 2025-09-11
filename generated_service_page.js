import React, { useState } from 'react';

// Header component
const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="logo">
            <a href="https://thecmsolution.com/">
              <img src="https://thecmsolution.com/wp-content/uploads/2021/01/CMS-new-logo.svg" alt="CM Solutions Logo" className="h-10" />
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="https://thecmsolution.com/about-cm-solutions/" className="text-gray-700 hover:text-blue-600">About Us</a>
            <div className="relative">
              <button onClick={() => setServicesOpen(!servicesOpen)} className="text-gray-700 hover:text-blue-600 focus:outline-none flex items-center">
                Services <svg className={`w-4 h-4 ml-1 transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {servicesOpen && (
                <ul className="absolute left-0 mt-2 w-64 bg-white border rounded-md shadow-lg">
                  <li><a href="https://thecmsolution.com/service/construction-program-project-management/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Program & Project Management</a></li>
                  <li><a href="https://thecmsolution.com/service/project-controls-planning-scheduling/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Planning & Scheduling</a></li>
                  <li><a href="https://thecmsolution.com/service/project-controls-cost-engineering/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Cost Controls</a></li>
                  <li><a href="https://thecmsolution.com/service/project-controls-dashboards-reporting/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Executive Reporting & Dashboards</a></li>
                  <li><a href="https://thecmsolution.com/service/project-controls-risk-mitigation/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Risk Management & Claims Avoidance</a></li>
                </ul>
              )}
            </div>
             <div className="relative">
              <button onClick={() => setProjectsOpen(!projectsOpen)} className="text-gray-700 hover:text-blue-600 focus:outline-none flex items-center">
                Projects <svg className={`w-4 h-4 ml-1 transform ${projectsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {projectsOpen && (
                 <ul className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
                    <li><a href="https://thecmsolution.com/project-category/energy-construction-projects/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Energy</a></li>
                    <li><a href="https://thecmsolution.com/project-category/transportation-construction-projects/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Transportation</a></li>
                    <li><a href="https://thecmsolution.com/project-category/water-wastewater-construction-projects/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Water/Wastewater</a></li>
                    <li><a href="https://thecmsolution.com/project-category/facilities-construction-projects/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Facilities</a></li>
                    <li><a href="https://thecmsolution.com/project-category/oil-and-gas-construction-projects/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Oil & Gas</a></li>
                </ul>
              )}
            </div>
            <a href="https://thecmsolution.com/careers-for-schedulers-and-cost-analysts/" className="text-gray-700 hover:text-blue-600">Careers</a>
            <a href="https://thecmsolution.com/articles-about-construction-scheduling-and-cost-controls/" className="text-gray-700 hover:text-blue-600">News</a>
            <a href="https://thecmsolution.com/contact-us-for-construction-project-success/" className="text-gray-700 hover:text-blue-600">Contact</a>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsNavOpen(!isNavOpen)} className="text-gray-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path></svg>
            </button>
          </div>
        </div>
        {isNavOpen && (
          <div className="md:hidden pb-4">
            <a href="https://thecmsolution.com/about-cm-solutions/" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">About Us</a>
            <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Services</a>
            <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Projects</a>
            <a href="https://thecmsolution.com/careers-for-schedulers-and-cost-analysts/" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Careers</a>
            <a href="https://thecmsolution.com/articles-about-construction-scheduling-and-cost-controls/" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">News</a>
            <a href="https://thecmsolution.com/contact-us-for-construction-project-success/" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Contact</a>
          </div>
        )}
      </div>
    </header>
  );
};

// Hero Section Component
const HeroSection = () => (
  <section className="relative text-white pt-32 pb-16">
    <div className="absolute inset-0">
      <img src="https://thecmsolution.com/wp-content/uploads/2024/04/Services-Pgm-Proj-Mgmt-Hero-1410x554.jpg" alt="Program & project management for construction" className="w-full h-full object-cover hidden md:block" />
      <img src="https://thecmsolution.com/wp-content/uploads/2024/04/Services-Pgm-Proj-Mgmt-Hero.jpg" alt="Program & project management for construction" className="w-full h-full object-cover md:hidden" />
      <div className="absolute inset-0 bg-black opacity-40"></div>
    </div>
    <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row">
        <div className="md:w-3/4">
             <h1 className="text-4xl md:text-6xl font-bold">Program & Project Management</h1>
        </div>
        <aside className="md:w-1/4 mt-8 md:mt-0 md:pl-8">
            <div className="bg-gray-800 bg-opacity-70 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-4 text-white">Services</h3>
                <ul className="space-y-2 text-sm">
                    <li className="font-bold bg-white bg-opacity-20 p-2 rounded"><a href="https://thecmsolution.com/service/construction-program-project-management/" className="hover:underline">PROGRAM & PROJECT MANAGEMENT</a></li>
                    <li><a href="https://thecmsolution.com/service/project-controls-planning-scheduling/" className="hover:underline">PLANNING & SCHEDULING</a></li>
                    <li><a href="https://thecmsolution.com/service/project-controls-cost-engineering/" className="hover:underline">COST CONTROLS</a></li>
                    <li><a href="https://thecmsolution.com/service/project-controls-dashboards-reporting/" className="hover:underline">EXECUTIVE REPORTING & DASHBOARDS</a></li>
                    <li><a href="https://thecmsolution.com/service/project-controls-risk-mitigation/" className="hover:underline">RISK MANAGEMENT & CLAIMS AVOIDANCE</a></li>
                </ul>
            </div>
        </aside>
    </div>
  </section>
);


// Main Content Component
const MainContent = () => (
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
                       Our role as the project manager is to be the eyes and ears of the client and to act in their best interest. Our approach begins with understanding and maintaining the design intent and the owner’s purpose of use. From there, we identity the gaps and what it takes to improve the system. We develop a structure that builds in communication and project controls processes to ensure the right information is available for good decisions.
                    </p>
                </div>
            </div>

            {/* Quote Section */}
            <div className="text-center my-20">
                <blockquote className="text-2xl italic text-gray-700 font-serif border-l-4 border-blue-600 pl-6 inline-block">
                    "Project controls – solving critical issues of a project – is part of our “DNA.”"
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
                        As project controls experts, we know what drives scope, schedule, and cost. We identify the project’s critical and near critical paths to bring focus to the proper activities and mitigate risks. We also understand earned value management, which enables us to evaluate a project’s performance and suggest ways to bring struggling projects back on track. These skills enable us to make better decisions and to mitigate problems early on. We communicate this critical information a clear way, customized to specific stakeholders.
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
            <div className="mt-24 bg-white rounded-lg shadow-lg p-8 md:p-12">
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
            </div>
        </div>
    </main>
);

// Footer Component
const Footer = () => (
    <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-16">
            <div className="grid md:grid-cols-4 gap-8">
                {/* Block 1: Logo and Description */}
                <div>
                    <img src="https://thecmsolution.com/wp-content/uploads/2021/01/CMS-new-logo.svg" alt="CM Solutions Logo" className="h-10 mb-4" />
                    <p className="text-gray-400 text-sm">CM Solutions’ experts bring the very best in project management and controls for complex, multimillion-dollar construction projects in transportation, energy, water/wastewater, facilities and oil & gas.</p>
                </div>
                {/* Block 2: CM Solutions Links */}
                <div>
                    <h2 className="font-bold mb-4">CM SOLUTIONS</h2>
                    <ul className="text-sm space-y-2">
                        <li><a href="https://thecmsolution.com/about-cm-solutions/" className="text-gray-400 hover:text-white">About Us</a></li>
                        <li><a href="https://thecmsolution.com/services/" className="text-gray-400 hover:text-white">Services</a></li>
                        <li><a href="https://thecmsolution.com/projects/" className="text-gray-400 hover:text-white">Projects</a></li>
                        <li><a href="https://thecmsolution.com/careers-for-schedulers-and-cost-analysts/" className="text-gray-400 hover:text-white">Careers</a></li>
                        <li><a href="https://thecmsolution.com/articles-about-construction-scheduling-and-cost-controls/" className="text-gray-400 hover:text-white">News</a></li>
                        <li><a href="https://thecmsolution.com/contact-us-for-construction-project-success/" className="text-gray-400 hover:text-white">Contact</a></li>
                    </ul>
                </div>
                 {/* Block 3: Contact Info */}
                <div>
                    <h2 className="font-bold mb-4">CONTACT INFO</h2>
                    <ul className="text-sm space-y-4">
                         <li className="flex items-start">
                            <img src="https://thecmsolution.com/wp-content/themes/cm_solutions/markup/assets/img/icon-marker.svg" alt="Location" className="h-5 w-5 mr-3 mt-1"/>
                            <a href="https://g.page/cm-solutions-monrovia?gm" target="_blank" className="text-gray-400 hover:text-white">114 W. Colorado Blvd.<br/>Monrovia, CA 91016</a>
                        </li>
                        <li className="flex items-center">
                            <img src="https://thecmsolution.com/wp-content/themes/cm_solutions/markup/assets/img/icon-phone.svg" alt="Phone" className="h-5 w-5 mr-3"/>
                            <a href="tel:626.639.2813" className="text-gray-400 hover:text-white">626.639.2813</a>
                        </li>
                        <li className="flex items-center">
                            <img src="https://thecmsolution.com/wp-content/themes/cm_solutions/markup/assets/img/icon-mail.svg" alt="Email" className="h-5 w-5 mr-3"/>
                            <a href="mailto:info@thecmsolution.com" className="text-gray-400 hover:text-white">info@thecmsolution.com</a>
                        </li>
                    </ul>
                </div>
                 {/* Block 4: Follow Us & Certifications */}
                <div>
                    <h2 className="font-bold mb-4">FOLLOW US</h2>
                    <div className="flex space-x-4 mb-6">
                        <a href="https://www.linkedin.com/company/construction-management-solutions/" target="_blank">
                            <img src="https://thecmsolution.com/wp-content/uploads/2021/03/icon-linkedin.svg" alt="LinkedIn" className="h-8"/>
                        </a>
                        <a href="https://g.page/cm-solutions-monrovia?gm" target="_blank">
                             <img src="https://thecmsolution.com/wp-content/uploads/2021/03/GMB_logo-1.svg" alt="Google My Business" className="h-8"/>
                        </a>
                    </div>
                     <h2 className="font-bold mb-4">OUR CERTIFICATIONS</h2>
                     <p className="text-gray-400 text-sm">A Certified SBE/DBE/WBE Firm in multiple states including CA, AZ, CO, FL, NJ, NY, TN, TX, and WA</p>
                </div>
            </div>
        </div>
        <div className="bg-gray-900 py-4">
             <div className="container mx-auto px-4 flex justify-between items-center text-xs text-gray-500">
                <p>Copyright © 2025 CM Solutions. All rights reserved.</p>
                <div className="flex space-x-4">
                     <a href="https://thecmsolution.com/privacy-policy/" className="hover:text-white">Privacy Policy</a>
                     <a href="https://thecmsolution.com/terms-of-service/" className="hover:text-white">Terms of Service</a>
                </div>
             </div>
        </div>
    </footer>
);


export default function App() {
  return (
    <div className="font-sans">
      <Header />
      <div className="pt-20"> {/* Add padding top to body to offset fixed header */}
        <HeroSection />
        <MainContent />
      </div>
      <Footer />
    </div>
  )
}
