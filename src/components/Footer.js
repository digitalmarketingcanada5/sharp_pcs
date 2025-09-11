const Footer = () => (
    <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-16">
            <div className="grid md:grid-cols-4 gap-8">
                {/* Block 1: Logo and Description */}
                <div>
                    <img src="/images/logo.png" alt="SHARP PCS Logo" className="h-16 mb-4" />
                    <p className="text-gray-400 text-sm">SHARP PCS&apos; experts bring the very best in project management and controls for complex, multimillion-dollar construction projects in transportation, energy, water/wastewater, facilities and oil & gas.</p>
                </div>
                {/* Block 2: SHARP PCS Links */}
                <div>
                    <h2 className="font-bold mb-4">SHARP PCS</h2>
                    <ul className="text-sm space-y-2">
                        <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
                        <li><a href="/services" className="text-gray-400 hover:text-white">Services</a></li>
                        <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
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
                <p>Copyright © 2025 SHARP PCS. All rights reserved.</p>
                <div className="flex space-x-4">
                     <a href="https://thecmsolution.com/privacy-policy/" className="hover:text-white">Privacy Policy</a>
                     <a href="https://thecmsolution.com/terms-of-service/" className="hover:text-white">Terms of Service</a>
                </div>
             </div>
        </div>
    </footer>
);

export default Footer;
