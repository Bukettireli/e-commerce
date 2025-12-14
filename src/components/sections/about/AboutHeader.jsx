import { Link } from 'react-router-dom';

function AboutHeader() {
    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Product', href: '/product' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header className="bg-white">
            <div className="max-w-[1440px] mx-auto px-6">
                <div className="flex justify-between items-center h-[58px]">
                
                    <div className="flex items-center gap-28">
                        <h3 className="text-2xl font-bold text-[#252B42]">
                            <Link to="/">Bandage</Link>
                        </h3>
                        
                        <nav className="flex gap-5">
                            {navLinks.map((link) => (
                                <Link 
                                    key={link.name}
                                    to={link.href}
                                    className="text-sm font-bold text-[#737373] hover:text-[#252B42] transition py-2"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

            
                    <div className="flex items-center gap-8">
                        <Link 
                            to="/login" 
                            className="text-sm font-bold text-[#23A6F0] hover:text-[#1a8cd8] transition"
                        >
                            Login
                        </Link>

                        <Link to="/signup">
                            <button className="bg-[#23A6F0] text-white px-6 py-3 rounded-[5px] text-sm font-bold hover:bg-[#1a8cd8] transition flex items-center gap-2">
                                Become a member
                                <span>→</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default AboutHeader;