import Header from './Header';
import Footer from './Footer';

function Layout({ children, topBar }) {
    return (
        <div className="min-h-screen flex flex-col bg-[#FAFAFA]">
            {/* TopBar varsa göster */}
            {topBar && topBar}
            
            <Header />
            
            <main className="flex-grow">
                {children}
            </main>
            
            <Footer />
        </div>
    );
}

export default Layout;