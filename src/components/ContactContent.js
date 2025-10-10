'use client'

import { useState } from 'react'
import Link from 'next/link'

const ContactContent = () => {
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

        // Create mailto link with form data
        const mailtoLink = `mailto:h_hendizadeh@yahoo.com?subject=Contact Form Submission from ${encodeURIComponent(formData.firstName)} ${encodeURIComponent(formData.lastName)}&body=${encodeURIComponent(
            `First Name: ${formData.firstName}\nLast Name: ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
        )}`;

        // Open default mail client
        window.location.href = mailtoLink;
    };
    
    return (
        <>
            <div className="bg-gray-100 py-4">
                <div className="container mx-auto px-4 text-sm text-gray-600">
                    <span><Link href="/" className="hover:underline">Home</Link></span> / <span>Contact</span>
                </div>
            </div>
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12">
                    {/* Sidebar */}
                    <aside className="md:w-1/3 space-y-8">
                        <div>
                            <h3 className="font-bold text-lg text-blue-900 tracking-wider">CORPORATE OFFICE</h3>
                            <p className="mt-4 text-gray-600">SHARP PCS<br/>3099-421 7 ave sw</p>
                            <ul className="mt-6 space-y-3">
                                <li className="flex items-center"><img src="https://thecmsolution.com/wp-content/themes/cm_solutions/markup/assets/img/icon-phone.svg" alt="Phone" className="h-5 w-5 mr-3"/><a href="tel:403.797.1362" className="text-gray-600 hover:text-blue-600">403.797.1362</a></li>
                                {/* <li className="flex items-center"><img src="https://thecmsolution.com/wp-content/themes/cm_solutions/markup/assets/img/icon-marker.svg" alt="Directions" className="h-5 w-5 mr-3"/><a href="https://g.page/cm-solutions-monrovia?gm" target="_blank" className="text-gray-600 hover:text-blue-600">Directions</a></li> */}
                                {/* <li className="flex items-center"><img src="https://thecmsolution.com/wp-content/themes/cm_solutions/markup/assets/img/icon-linkedin-small.svg" alt="LinkedIn" className="h-5 w-5 mr-3"/><a href="https://www.linkedin.com/company/construction-management-solutions/" target="_blank" className="text-gray-600 hover:text-blue-600">LinkedIn</a></li> */}
                            </ul>
                        </div>
                    </aside>
                    {/* Main Content */}
                    <div className="md:w-2/3">
                        {/* <img src="/contact.png" alt="Contact Us Banner" className="w-full rounded-lg mb-8 shadow-md" /> */}
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
                </div>
            </section>
        </>
    );
};

export default ContactContent;
