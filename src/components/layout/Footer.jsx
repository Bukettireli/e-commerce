import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-white font-montserrat">
     
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          
            <h3 className="text-2xl font-bold text-[#252B42]">Bandage</h3>
            
         
            <div className="flex gap-5">
              <a href="#" className="text-[#23A6F0] hover:text-[#1a8cd8] transition">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-[#23A6F0] hover:text-[#1a8cd8] transition">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-[#23A6F0] hover:text-[#1a8cd8] transition">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">

     
          <div className="flex flex-col gap-3">
            <h4 className="text-[#252B42] font-bold text-base mb-2">Company Info</h4>
            <a href="#" className="text-[#737373] text-sm font-bold hover:text-[#252B42]">About Us</a>
            <a href="#" className="text-[#737373] text-sm font-bold hover:text-[#252B42]">Carrier</a>
            <a href="#" className="text-[#737373] text-sm font-bold hover:text-[#252B42]">We are hiring</a>
            <a href="#" className="text-[#737373] text-sm font-bold hover:text-[#252B42]">Blog</a>
          </div>

      
          <div className="flex flex-col gap-3">
            <h4 className="text-[#252B42] font-bold text-base mb-2">Legal</h4>
            <a href="#" className="text-[#737373] text-sm font-bold hover:text-[#252B42]">About Us</a>
            <a href="#" className="text-[#737373] text-sm font-bold hover:text-[#252B42]">Carrier</a>
            <a href="#" className="text-[#737373] text-sm font-bold hover:text-[#252B42]">We are hiring</a>
            <a href="#" className="text-[#737373] text-sm font-bold hover:text-[#252B42]">Blog</a>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-[#252B42] font-bold text-base mb-2">Features</h4>
            <a href="#" className="text-[#737373] text-sm font-bold hover:text-[#252B42]">Business Marketing</a>
            <a href="#" className="text-[#737373] text-sm font-bold hover:text-[#252B42]">User Analytic</a>
            <a href="#" className="text-[#737373] text-sm font-bold hover:text-[#252B42]">Live Chat</a>
            <a href="#" className="text-[#737373] text-sm font-bold hover:text-[#252B42]">Unlimited Support</a>
          </div>

    
          <div className="flex flex-col gap-3">
            <h4 className="text-[#252B42] font-bold text-base mb-2">Resources</h4>
            <a href="#" className="text-[#737373] text-sm font-bold hover:text-[#252B42]">IOS & Android</a>
            <a href="#" className="text-[#737373] text-sm font-bold hover:text-[#252B42]">Watch a Demo</a>
            <a href="#" className="text-[#737373] text-sm font-bold hover:text-[#252B42]">Customers</a>
            <a href="#" className="text-[#737373] text-sm font-bold hover:text-[#252B42]">API</a>
          </div>

          
          <div className="flex flex-col gap-4">
            <h4 className="text-[#252B42] font-bold text-base mb-2">Get in Touch</h4>

            <div className="flex">
              <input 
                type="email" 
                placeholder="Your Email"
                className="flex-1 border border-[#E6E6E6] bg-[#F9F9F9] px-5 py-[15px] text-sm outline-none rounded-l-[5px]"
              />
              <button className="bg-[#23A6F0] text-white px-6 py-[15px] text-sm font-normal rounded-r-[5px] hover:bg-[#1a8cd8] transition">
                Subscribe
              </button>
            </div>

            <p className="text-[#737373] text-xs">Lore imp sum dolor Amit</p>
          </div>

        </div>
      </div>


      <div className="bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-[#737373] text-sm font-bold text-center sm:text-left">
            Made With Love By Finland All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;