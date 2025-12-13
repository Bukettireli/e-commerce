import Layout from '../components/layout/Footer';
import AboutHeader from '../components/sections/about/AboutHeader';
import AboutHero from '../components/sections/about/AboutHero';
import AboutProblem from '../components/sections/about/AboutProblem';
import AboutStats from '../components/sections/about/AboutStats';
import AboutVideo from '../components/sections/about/AboutVideo';
import AboutTeam from '../components/sections/about/AboutTeam';
import AboutCompanies from '../components/sections/about/AboutCompanies';
import AboutCTA from '../components/sections/about/AboutCTA';
import Footer from '../components/layout/Footer';

function AboutPage() {
    return (
        <div>
            <AboutHeader/>
            <AboutHero />
            <AboutProblem/>
            <AboutStats/>
            <AboutVideo/>
            <AboutTeam/>
            <AboutCompanies/>
            <AboutCTA/>
            <Footer/>
        </div>
    );
}

export default AboutPage;