import React from 'react';

const footerLinks = [
    {
        title: "Company Info",
        links: ["About Us", "Carrier", "We are hiring", "Blog"]
    },
    {
        title: "Legal",
        links: ["About Us", "Carrier", "We are hiring", "Blog"]
    },
    {
        title: "Features",
        links: ["Business Marketing", "User Analytic", "Live Chat", "Unlimited Support"]
    },
    {
        title: "Resources",
        links: ["IOS & Android", "Watch a Demo", "Customers", "API"]
    }
];

function Footer() {
    return (
        <footer className="w-full bg-white pt-10 md:pt-16 border-t border-gray-200">
            
        
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          
                <h3 className="text-2xl font-bold text-gray-800 mb-6 md:mb-0">
                    Bandage
                </h3>

             
                <div className="flex space-x-4 text-[#23A6F0] mb-6 md:mb-0">
                  
                    <a href="#" aria-label="Facebook">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 .273-2.247.309-.272.76-.328 1.227-.328h2.5V2.043C17.93 2.033 16.488 2 15 2c-4.145 0-5 2.583-5 5.5v3.25H7.5v4H10V22h4v-8.5z"/></svg>
                    </a>
                    
                    <a href="#" aria-label="Instagram">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c2.757 0 3.098.01 4.186.06A7.015 7.015 0 0119.82 4.18C21.053 5.412 22 7.07 22 10.06c0 1.088-.01 1.429-.06 2.517s-.26 2.09-.54 3.018a7.015 7.015 0 01-2.185 2.827c-1.232 1.232-2.89 2.185-5.917 2.185-1.088 0-1.429-.01-2.517-.06s-2.09-.26-3.018-.54a7.015 7.015 0 01-2.827-2.185C2.947 16.588 2 14.93 2 11.94c0-1.088.01-1.429.06-2.517s.26-2.09.54-3.018a7.015 7.015 0 012.185-2.827C5.412 2.947 7.07 2 10.06 2h1.88c2.757 0 3.098.01 4.186.06zM12 4.04c-2.65 0-2.98.01-4.04.06-1.06.05-1.78.25-2.27.44a4.99 4.99 0 00-1.89 1.89c-.19.49-.39 1.21-.44 2.27-.05 1.06-.06 1.39-.06 4.04s.01 2.98.06 4.04c.05 1.06.25 1.78.44 2.27a4.99 4.99 0 001.89 1.89c.49.19 1.21.39 2.27.44 1.06.05 1.39.06 4.04.06s2.98-.01 4.04-.06c1.06-.05 1.78-.25 2.27-.44a4.99 4.99 0 001.89-1.89c.19-.49.39-1.21.44-2.27.05-1.06.06-1.39.06-4.04s-.01-2.98-.06-4.04c-.05-1.06-.25-1.78-.44-2.27a4.99 4.99 0 00-1.89-1.89c-.49-.19-1.21-.39-2.27-.44-1.06-.05-1.39-.06-4.04-.06zM12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6zm0 2a4 4 0 100 8 4 4 0 000-8zm5-2a1 1 0 100 2 1 1 0 000-2z"/></svg>
                    </a>
                    
                    <a href="#" aria-label="Twitter">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.34-1.6.56-2.48.66.89-.53 1.5-1.38 1.8-2.39-.83.49-1.74.84-2.72 1.03-.78-.83-1.88-1.34-3.08-1.34-2.33 0-4.22 1.89-4.22 4.22 0 .33.04.65.1.96-3.5-.17-6.6-1.85-8.68-4.33-.36.6-.56 1.3-.56 2.02 0 1.46.74 2.75 1.87 3.52-.69-.02-1.33-.2-1.89-.53-.01.02-.01.04-.01.06 0 2.05 1.46 3.76 3.38 4.16-.36.1-.74.15-1.14.15-.28 0-.55-.03-.81-.08.54 1.68 2.1 2.91 3.96 2.95-1.46 1.14-3.3 1.82-5.3 1.82-.35 0-.7-.02-1.05-.06 1.88 1.2 4.12 1.9 6.55 1.9 7.85 0 12.15-6.51 12.15-12.15 0-.18-.0-.36-.01-.54.83-.6 1.56-1.35 2.14-2.2z"/></svg>
                    </a>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <hr className="hidden md:block border-gray-200 mb-8" />
            </div>

           
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 md:pb-16">
               
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-8 md:gap-x-8">
            
                    {footerLinks.map((section, index) => (
                        <div key={index}>
                            <h5 className="text-base font-bold text-gray-800 mb-5">
                                {section.title}
                            </h5>
                            <ul className="space-y-3 text-sm">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a href="#" className="text-gray-500 hover:text-[#2DC071] transition duration-200">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

               
                    <div>
                        <h5 className="text-base font-bold text-gray-800 mb-5">
                            Get In Touch
                        </h5>
                        
                        <div className="flex w-full">
                            <input 
                                type="email" 
                                placeholder="Your Email" 
                                className="flex-grow p-3 border border-gray-300 rounded-l-[5px] focus:outline-none focus:border-[#23A6F0]"
                            />
                            <button 
                                type="submit"
                                className="bg-[#23A6F0] text-white font-bold text-sm py-3 px-5 rounded-r-[5px] hover:bg-[#1f93d3] transition duration-200"
                            >
                                Subscribe
                            </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">
                           Made With Love By Finland All Right Reserved 
                        </p>
                    </div>

                </div>
            </div>

        
        </footer>
    );
}

export default Footer;