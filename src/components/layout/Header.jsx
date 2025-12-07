import { useState } from 'react';
import { Search, ShoppingCart, User, Heart, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

function Header() {
    const [shopDropdownOpen, setShopDropdownOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Shop', href: '/shop', hasDropdown: true },
        { name: 'About', href: '/about' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
        { name: 'Pages', href: '/pages' },
    ];

    return (
        <header className="bg-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <div className="max-w-[1440px] mx-auto px-6">
                <div className="flex justify-between items-center h-[58px]">
                    <div className="flex items-center gap-28">
                        <h3 className="text-2xl font-bold text-[#252B42]">
                            <Link to="/">Bandage</Link>
                        </h3>
                        
                        <nav className="flex gap-5">
                            {navLinks.map((link) => (
                                <div key={link.name} className="relative">
                                    {link.hasDropdown ? (
                                        <>
                                            <Link
                                                to={link.href}
                                                className="flex items-center gap-1 text-sm font-bold text-[#737373] hover:text-[#252B42] transition py-2"
                                                onMouseEnter={() => setShopDropdownOpen(true)}
                                                onMouseLeave={() => setShopDropdownOpen(false)}
                                            >
                                                {link.name}
                                                <ChevronDown size={16} />
                                            </Link>
                                            {shopDropdownOpen && (
                                                <div 
                                                    className="absolute top-full left-0 mt-2 bg-white shadow-lg border border-gray-200 rounded-md py-8 px-12 z-50"
                                                    onMouseEnter={() => setShopDropdownOpen(true)}
                                                    onMouseLeave={() => setShopDropdownOpen(false)}
                                                >
                                                    <div className="grid grid-cols-2 gap-x-32 gap-y-6">
                                                        <div>
                                                            <h6 className="text-base font-bold text-[#252B42] mb-6">Kadın</h6>
                                                            <div className="space-y-4">
                                                                <div className="text-sm font-normal text-[#737373] hover:text-[#23A6F0] cursor-pointer">Bags</div>
                                                                <div className="text-sm font-normal text-[#737373] hover:text-[#23A6F0] cursor-pointer">Belts</div>
                                                                <div className="text-sm font-normal text-[#737373] hover:text-[#23A6F0] cursor-pointer">Cosmetics</div>
                                                                <div className="text-sm font-normal text-[#737373] hover:text-[#23A6F0] cursor-pointer">Bags</div>
                                                                <div className="text-sm font-normal text-[#737373] hover:text-[#23A6F0] cursor-pointer">Hats</div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h6 className="text-base font-bold text-[#252B42] mb-6">Erkek</h6>
                                                            <div className="space-y-4">
                                                                <div className="text-sm font-normal text-[#737373] hover:text-[#23A6F0] cursor-pointer">Bags</div>
                                                                <div className="text-sm font-normal text-[#737373] hover:text-[#23A6F0] cursor-pointer">Belts</div>
                                                                <div className="text-sm font-normal text-[#737373] hover:text-[#23A6F0] cursor-pointer">Cosmetics</div>
                                                                <div className="text-sm font-normal text-[#737373] hover:text-[#23A6F0] cursor-pointer">Bags</div>
                                                                <div className="text-sm font-normal text-[#737373] hover:text-[#23A6F0] cursor-pointer">Hats</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <Link 
                                            to={link.href}
                                            className="text-sm font-bold text-[#737373] hover:text-[#252B42] transition py-2 inline-block"
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </nav>
                    </div>

                    <div className="flex items-center gap-8">
                        <div className="flex items-center text-sm font-bold text-[#23A6F0] cursor-pointer">
                            <User size={12} className="mr-1" />
                            <span>Login / Register</span>
                        </div>

                        <div className="flex items-center gap-5">
                            <Search size={16} className="text-[#23A6F0] cursor-pointer" />
                            
                            <div className="relative cursor-pointer">
                                <ShoppingCart size={16} className="text-[#23A6F0]" />
                                <span className="absolute -top-2 -right-2 text-xs font-normal text-[#23A6F0]">
                                    1
                                </span>
                            </div>

                            <div className="relative cursor-pointer">
                                <Heart size={16} className="text-[#23A6F0]" />
                                <span className="absolute -top-2 -right-2 text-xs font-normal text-[#23A6F0]">
                                    1
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;