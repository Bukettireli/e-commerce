import { Phone, Mail, Instagram, Youtube, Facebook, Twitter } from 'lucide-react';

function ShopTopBar() {
    return (
        <div className="bg-[#23856D] text-white py-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-2 text-xs sm:text-sm">
                    {/* Contact Info */}
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                        <div className="flex items-center gap-2">
                            <Phone size={14} />
                            <span className="font-bold">(225) 555-0118</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail size={14} />
                            <span className="font-bold">michelle.rivera@example.com</span>
                        </div>
                    </div>
                    
                    {/* Promo Text */}
                    <span className="font-bold text-center">
                        Follow Us and get a chance to win 80% off
                    </span>
                    
                    {/* Social Links */}
                    <div className="flex items-center gap-2">
                        <span className="font-bold">Follow Us :</span>
                        <div className="flex gap-2">
                            <Instagram size={16} className="cursor-pointer hover:opacity-80" />
                            <Youtube size={16} className="cursor-pointer hover:opacity-80" />
                            <Facebook size={16} className="cursor-pointer hover:opacity-80" />
                            <Twitter size={16} className="cursor-pointer hover:opacity-80" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShopTopBar;