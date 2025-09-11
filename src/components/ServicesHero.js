const ServicesHero = () => (
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

export default ServicesHero;
