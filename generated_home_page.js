import React, { useState, useEffect } from 'react';

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

const slides = [
    {
        image: "https://thecmsolution.com/wp-content/uploads/2025/08/Home-program-management4-1404x938.jpg",
        subtitle: "Project Management & Controls",
        title: "Integrating Controls for Project Success",
        link: "https://thecmsolution.com/service/construction-program-project-management/"
    },
    {
        image: "https://thecmsolution.com/wp-content/uploads/2021/04/Energy-home_new-1404x957.jpg",
        subtitle: "Project Management & Controls",
        title: "Energizing Your Success",
        link: "https://thecmsolution.com/project-category/energy-construction-projects/"
    },
    {
        image: "https://thecmsolution.com/wp-content/uploads/2021/04/Transportation-home_new-1404x937.jpg",
        subtitle: "Project Management & Controls",
        title: "Advancing success one milestone at a time",
        link: "https://thecmsolution.com/project-category/transportation-construction-projects/"
    },
    {
        image: "https://thecmsolution.com/wp-content/uploads/2021/04/Wastewater_home_new-1404x937.jpg",
        subtitle: "Project Management & Controls",
        title: "Sustaining Water Resources for Tomorrow",
        link: "https://thecmsolution.com/project-category/water-wastewater-construction-projects/"
    },
    {
        image: "https://thecmsolution.com/wp-content/uploads/2021/04/oil_gas_home_new-1404x936.jpg",
        subtitle: "Project Management & Controls",
        title: "Fueling Traditional and Alternative Energy Sources",
        link: "https://thecmsolution.com/project-category/oil-and-gas-construction-projects/"
    }
];

const HomeHeroSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsFading(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
                setIsFading(false);
            }, 1200); // Corresponds to transition duration
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const currentSlide = slides[currentIndex];

    return (
        <section className="relative h-screen text-white">
            {slides.map((slide, index) => (
                 <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-[1200ms] ease-linear ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                    style={{ zIndex: index === currentIndex ? 1 : 0 }}
                >
                    <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                </div>
            ))}
           
            <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
                 <div className={`transition-opacity duration-1000 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
                    <h2 className="text-xl md:text-2xl font-light mb-4">{currentSlide.subtitle}</h2>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight whitespace-pre-line mb-6" dangerouslySetInnerHTML={{ __html: currentSlide.title.replace('\n', '<br/>') }}></h1>
                    <a href={currentSlide.link} className="font-semibold tracking-wider hover:underline flex items-center">
                        Learn More
                        <img src="https://thecmsolution.com/wp-content/themes/cm_solutions/markup/assets/img/ico-arrow-right.svg" alt="arrow" className="ml-2 h-4"/>
                    </a>
                </div>
            </div>
             <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-sm tracking-widest z-10">
                Solutions for Project Success
            </div>
        </section>
    );
};


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
      <main>
        <HomeHeroSlider />
      </main>
      {/* The footer can be added here if needed, or removed if the home page doesn't have one */}
      {/* <Footer /> */}
    </div>
  )
}

