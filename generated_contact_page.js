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

const ContactPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted! (Check console for data)');
        console.log('Form data:', formData);
    };
    
    return (
        <>
            <div className="bg-gray-100 py-4">
                <div className="container mx-auto px-4 text-sm text-gray-600">
                    <span><a href="/" className="hover:underline">Home</a></span> / <span>Contact</span>
                </div>
            </div>
            <section className="container mx-auto px-4 py-16">
                <div className="flex flex-col md:flex-row gap-12">
                    {/* Sidebar */}
                    <aside className="md:w-1/3 space-y-8">
                        <div>
                            <h3 className="font-bold text-lg text-blue-900 tracking-wider">LOS ANGELES<br/>CORPORATE OFFICE</h3>
                            <p className="mt-4 text-gray-600">CM Solutions<br/>114 W Colorado Blvd<br/>Monrovia, CA 91016</p>
                            <ul className="mt-6 space-y-3">
                                <li className="flex items-center"><img src="https://thecmsolution.com/wp-content/themes/cm_solutions/markup/assets/img/icon-phone.svg" alt="Phone" className="h-5 w-5 mr-3"/><a href="tel:626.639.2813" className="text-gray-600 hover:text-blue-600">626.639.2813</a></li>
                                <li className="flex items-center"><img src="https://thecmsolution.com/wp-content/themes/cm_solutions/markup/assets/img/icon-mail.svg" alt="Email" className="h-5 w-5 mr-3"/><a href="mailto:info@thecmsolution.com" className="text-gray-600 hover:text-blue-600">info@thecmsolution.com</a></li>
                                <li className="flex items-center"><img src="https://thecmsolution.com/wp-content/themes/cm_solutions/markup/assets/img/icon-marker.svg" alt="Directions" className="h-5 w-5 mr-3"/><a href="https://g.page/cm-solutions-monrovia?gm" target="_blank" className="text-gray-600 hover:text-blue-600">Directions</a></li>
                                <li className="flex items-center"><img src="https://thecmsolution.com/wp-content/themes/cm_solutions/markup/assets/img/icon-linkedin-small.svg" alt="LinkedIn" className="h-5 w-5 mr-3"/><a href="https://www.linkedin.com/company/construction-management-solutions/" target="_blank" className="text-gray-600 hover:text-blue-600">LinkedIn</a></li>
                            </ul>
                        </div>
                         <div>
                            <h4 className="font-bold text-blue-800 tracking-wide">Sales/Services Inquiries</h4>
                            <a href="mailto:services@thecmsolution.com" className="text-blue-600 hover:underline">services@thecmsolution.com</a>
                        </div>
                        <div>
                            <h4 className="font-bold text-blue-800 tracking-wide">Partnering Inquiries</h4>
                            <a href="mailto:teaming@thecmsolution.com" className="text-blue-600 hover:underline">teaming@thecmsolution.com</a>
                        </div>
                        <div>
                            <h4 className="font-bold text-blue-800 tracking-wide">Careers</h4>
                            <a href="mailto:recruiting@thecmsolution.com" className="text-blue-600 hover:underline">recruiting@thecmsolution.com</a>
                        </div>
                    </aside>
                    {/* Main Content */}
                    <div className="md:w-2/3">
                        <img src="https://thecmsolution.com/wp-content/uploads/2021/06/Contact_Us_banner-1.jpg" alt="Contact Us Banner" className="w-full rounded-lg mb-8 shadow-md" />
                        <h1 className="text-3xl font-bold text-blue-900 mb-6">Contact Us Today About a Project</h1>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="relative">
                                    <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleInputChange} className="peer w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-transparent" placeholder="First Name *" required />
                                    <label htmlFor="firstName" className="absolute left-3 -top-2.5 text-gray-500 text-sm transition-all bg-white px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-blue-600 peer-focus:text-sm">First Name <span className="text-red-500">*</span></label>
                                </div>
                                <div className="relative">
                                    <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleInputChange} className="peer w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-transparent" placeholder="Last Name *" required />
                                    <label htmlFor="lastName" className="absolute left-3 -top-2.5 text-gray-500 text-sm transition-all bg-white px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-blue-600 peer-focus:text-sm">Last Name <span className="text-red-500">*</span></label>
                                </div>
                                <div className="relative">
                                    <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} className="peer w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-transparent" placeholder="Email *" required />
                                    <label htmlFor="email" className="absolute left-3 -top-2.5 text-gray-500 text-sm transition-all bg-white px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-blue-600 peer-focus:text-sm">Email <span className="text-red-500">*</span></label>
                                </div>
                                <div className="relative">
                                    <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleInputChange} className="peer w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-transparent" placeholder="Phone (include ext) *" required />
                                    <label htmlFor="phone" className="absolute left-3 -top-2.5 text-gray-500 text-sm transition-all bg-white px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-blue-600 peer-focus:text-sm">Phone (include ext) <span className="text-red-500">*</span></label>
                                </div>
                            </div>
                             <div className="relative">
                                <textarea name="message" id="message" value={formData.message} onChange={handleInputChange} rows="5" className="peer w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-transparent" placeholder="Questions/Comments"></textarea>
                                <label htmlFor="message" className="absolute left-3 -top-2.5 text-gray-500 text-sm transition-all bg-white px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-blue-600 peer-focus:text-sm">Questions/Comments</label>
                            </div>
                            <div>
                                <button type="submit" className="bg-blue-800 text-white font-bold py-3 px-8 rounded-md hover:bg-blue-900 transition duration-300">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
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
    <div className="font-sans bg-white">
      <Header />
      <main className="pt-20">
        <ContactPage />
      </main>
      <Footer />
    </div>
  )
}

