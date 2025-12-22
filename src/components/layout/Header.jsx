import { useState, useRef, useEffect } from 'react';
import { Search, ShoppingCart, User, Heart, ChevronDown, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../actions/clientActions';
import { getWomenCategories, getMenCategories } from '../../actions/productActions';
import { getGravatarUrl } from '../../utils/gravatar';
import CartDropdown from '../cart/CartDropdown';

function Header() {
    const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
    const [userDropdownOpen, setUserDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const userDropdownRef = useRef(null);
    
    const { user } = useSelector((state) => state.client);
    const { categories } = useSelector((state) => state.product);
    const dispatch = useDispatch();

    // API'den gelen kategorileri filtrele
    const womenCategories = getWomenCategories(categories);
    const menCategories = getMenCategories(categories);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShopDropdownOpen(false);
            }
            if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
                setUserDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLogout = () => {
        dispatch(logoutUser());
        setUserDropdownOpen(false);
    };

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
                                <div key={link.name} className="relative" ref={link.hasDropdown ? dropdownRef : null}>
                                    {link.hasDropdown ? (
                                        <>
                                            <div className="flex items-center gap-1">
                                                <Link
                                                    to={link.href}
                                                    className="text-sm font-bold text-[#737373] hover:text-[#252B42] transition py-2"
                                                >
                                                    {link.name}
                                                </Link>
                                                <button
                                                    onClick={() => setShopDropdownOpen(!shopDropdownOpen)}
                                                    className="text-[#737373] hover:text-[#252B42] transition py-2"
                                                >
                                                    <ChevronDown 
                                                        size={16} 
                                                        className={`transition-transform duration-200 ${shopDropdownOpen ? 'rotate-180' : ''}`}
                                                    />
                                                </button>
                                            </div>
                                            
                                            {shopDropdownOpen && (
                                                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg border border-gray-200 rounded-md py-6 z-50 min-w-[400px]">
                                                    <div className="grid grid-cols-2 gap-8 px-8">
                                                        {/* KADIN KATEGORİLERİ - API'den */}
                                                        <div>
                                                            <h6 className="text-base font-bold text-[#252B42] mb-4">Kadın</h6>
                                                            <div className="space-y-3">
                                                                {womenCategories.length > 0 ? (
                                                                    womenCategories.map(category => (
                                                                        <Link 
                                                                            key={category.id}
                                                                            to={`/shop/kadin/${category.title.toLowerCase()}/${category.id}`}
                                                                            className="block text-sm text-[#737373] hover:text-[#23A6F0] transition"
                                                                            onClick={() => setShopDropdownOpen(false)}
                                                                        >
                                                                            {category.title}
                                                                        </Link>
                                                                    ))
                                                                ) : (
                                                                    <p className="text-sm text-gray-400">Loading...</p>
                                                                )}
                                                            </div>
                                                        </div>
                                                        
                                                        {/* ERKEK KATEGORİLERİ - API'den */}
                                                        <div>
                                                            <h6 className="text-base font-bold text-[#252B42] mb-4">Erkek</h6>
                                                            <div className="space-y-3">
                                                                {menCategories.length > 0 ? (
                                                                    menCategories.map(category => (
                                                                        <Link 
                                                                            key={category.id}
                                                                            to={`/shop/erkek/${category.title.toLowerCase()}/${category.id}`}
                                                                            className="block text-sm text-[#737373] hover:text-[#23A6F0] transition"
                                                                            onClick={() => setShopDropdownOpen(false)}
                                                                        >
                                                                            {category.title}
                                                                        </Link>
                                                                    ))
                                                                ) : (
                                                                    <p className="text-sm text-gray-400">Loading...</p>
                                                                )}
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
                        {/* User Section */}
                        {user?.email ? (
                            <div className="relative" ref={userDropdownRef}>
                                <button
                                    onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                                    className="flex items-center gap-2 text-sm font-bold text-[#23A6F0] hover:text-[#1a8cd8] transition"
                                >
                                    <img
                                        src={getGravatarUrl(user.email, 32)}
                                        alt={user.name || 'User'}
                                        className="w-8 h-8 rounded-full border-2 border-[#23A6F0]"
                                    />
                                    <span className="max-w-[100px] truncate">
                                        {user.name || user.email.split('@')[0]}
                                    </span>
                                    <ChevronDown 
                                        size={14} 
                                        className={`transition-transform duration-200 ${userDropdownOpen ? 'rotate-180' : ''}`}
                                    />
                                </button>

                                {userDropdownOpen && (
                                    <div className="absolute top-full right-0 mt-2 bg-white shadow-lg border border-gray-200 rounded-md py-2 z-50 min-w-[200px]">
                                        <div className="px-4 py-2 border-b border-gray-200">
                                            <p className="text-xs text-[#737373]">Signed in as</p>
                                            <p className="text-sm font-bold text-[#252B42] truncate">
                                                {user.email}
                                            </p>
                                        </div>
                                        <Link
                                            to="/profile"
                                            className="flex items-center gap-2 px-4 py-2 text-sm text-[#737373] hover:bg-gray-50 hover:text-[#23A6F0] transition"
                                            onClick={() => setUserDropdownOpen(false)}
                                        >
                                            <User size={16} />
                                            Profile
                                        </Link>
                                        <button
                                            onClick={handleLogout}
                                            className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-500 hover:bg-red-50 transition"
                                        >
                                            <LogOut size={16} />
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="flex items-center gap-1 text-sm font-bold text-[#23A6F0]">
                                <User size={12} />
                                <Link to="/login" className="hover:text-[#1a8cd8] transition">
                                    Login
                                </Link>
                                <span>/</span>
                                <Link to="/signup" className="hover:text-[#1a8cd8] transition">
                                    Register
                                </Link>
                            </div>
                        )}

                        <div className="flex items-center gap-5">
                            <Search size={16} className="text-[#23A6F0] cursor-pointer" />
                            
                            {/* Cart Dropdown */}
                            <CartDropdown />

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