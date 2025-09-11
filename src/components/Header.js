'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="logo">
            <Link href="/">
              <img src="https://thecmsolution.com/wp-content/uploads/2021/01/CMS-new-logo.svg" alt="SHARP PCS Logo" className="h-10" />
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <div className="relative">
              <button onClick={() => setServicesOpen(!servicesOpen)} className="text-gray-700 hover:text-blue-600 focus:outline-none flex items-center">
                <Link href="/services">Services</Link>
                <svg className={`w-4 h-4 ml-1 transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
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
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsNavOpen(!isNavOpen)} className="text-gray-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path></svg>
            </button>
          </div>
        </div>
        {isNavOpen && (
          <div className="md:hidden pb-4">
            <Link href="/" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Home</Link>
            <Link href="/services" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Services</Link>
            {/* <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Projects</a>
            <a href="https://thecmsolution.com/careers-for-schedulers-and-cost-analysts/" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Careers</a>
            <a href="https://thecmsolution.com/articles-about-construction-scheduling-and-cost-controls/" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">News</a> */}
            <Link href="/contact" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Contact</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
