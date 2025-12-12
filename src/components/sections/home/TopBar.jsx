import { Phone, Mail, Instagram, Youtube, Facebook, Twitter } from "lucide-react";

function TopBar() {
  return (
    <div className="hidden md:flex font-montserrat-bold w-full h-[58px] bg-[#252B42] flex items-center text-[#FFFFFF]">
      <div className="w-full max-w-[1429px] mx-auto flex justify-between items-center px-8 text-sm">
        
        <div className="flex items-center ">
          <div className="flex items-center gap-x-2 mr-10">
            <Phone size={16} />
            <span>(225) 555-0118</span>
          </div>

          <div className="flex items-center space-x-2">
            <Mail size={16} />
            <span>michelle.rivera@example.com</span>
          </div>
        </div>

        <div className="text-center font-medium">
          Follow Us and get a chance to win 80% off
        </div>

        <div className="flex items-center space-x-2">
          <span>Follow Us:</span>
          <Instagram size={16} />
          <Youtube size={16} />
          <Facebook size={16} />
          <Twitter size={16} />
        </div>

      </div>
    </div>
  );
}

export default TopBar;