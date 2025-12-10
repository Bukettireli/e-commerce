import { Phone, Mail, Instagram, Youtube, Facebook, Twitter } from 'lucide-react';

function TopBar() {
    return (
        <div className="bg-[#23856D] text-[#FFFFFF] py-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <div className="max-w-[1440px] mx-auto flex flex-wrap justify-between items-center px-6 gap-4">
                <div className="flex items-center space-x-6 text-sm">
                    <div className="flex items-center space-x-2">
                        <Phone size={16} className="text-[#FFFFFF]" /> 
                        <span className="font-bold">(225) 555-0118</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Mail size={16} className="text-[#FFFFFF]" /> 
                        <span className="font-bold">michelle.rivera@example.com</span>
                    </div>
                </div>

                <span className="font-bold text-sm">
                    Follow Us and get a chance to win 80% off
                </span>

                <div className="flex items-center space-x-4">
                    <span className="font-bold text-sm">Follow Us:</span>
                    <div className="flex gap-3">
                        <Instagram size={16} className="text-[#FFFFFF] cursor-pointer hover:opacity-80" />
                        <Youtube size={16} className="text-[#FFFFFF] cursor-pointer hover:opacity-80" />
                        <Facebook size={16} className="text-[#FFFFFF] cursor-pointer hover:opacity-80" />
                        <Twitter size={16} className="text-[#FFFFFF] cursor-pointer hover:opacity-80" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBar;