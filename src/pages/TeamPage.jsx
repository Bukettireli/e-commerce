import React from 'react';
import Header from '../components/layout/Header';
import TeamHero from '../components/sections/team/TeamHero';
import TeamMembers from '../components/sections/team/TeamMembers';
import Footer from '../components/layout/Footer';

function TeamPage() {
    return (
        <div>
            <Header />
            <TeamHero />
            <TeamMembers />
            <Footer />
        </div>
    );
}

export default TeamPage;