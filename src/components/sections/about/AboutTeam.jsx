import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

function AboutTeam() {
    const teamMembers = [
        {
            id: 1,
            image: '/images/about/team1.jpg',
            name: 'Username',
            profession: 'Profession'
        },
        {
            id: 2,
            image: '/images/about/team2.jpg',
            name: 'Username',
            profession: 'Profession'
        },
        {
            id: 3,
            image: '/images/about/team3.jpg',
            name: 'Username',
            profession: 'Profession'
        }
    ];

    return (
        <section className="w-full bg-white py-12 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                
                <div className="text-center mb-12 lg:mb-16">
                    <h2 className="text-4xl font-bold text-[#252B42] mb-4">
                        Meet Our Team
                    </h2>
                    <p className="text-sm text-[#737373] max-w-lg mx-auto">
                        Problems trying to resolve the conflict between <br />the two major realms of Classical physics: Newtonian mechanics
                    </p>
                </div>

                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="flex flex-col items-center">
                            
                            
                            <div className="w-full mb-6 overflow-hidden">
                                <img 
                                    src={member.image} 
                                    alt={member.name}
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                
                            <h5 className="text-base font-bold text-[#252B42] mb-2">
                                {member.name}
                            </h5>

                    
                            <p className="text-sm font-bold text-[#737373] mb-4">
                                {member.profession}
                            </p>

                    
                            <div className="flex gap-4">
                                <a href="#" className="text-[#23A6F0] hover:text-[#1a8cd8] transition">
                                    <Facebook size={20} />
                                </a>
                                <a href="#" className="text-[#23A6F0] hover:text-[#1a8cd8] transition">
                                    <Instagram size={20} />
                                </a>
                                <a href="#" className="text-[#23A6F0] hover:text-[#1a8cd8] transition">
                                    <Twitter size={20} />
                                </a>
                            </div>

                        </div>
                    ))}
                </div>

              
                <div className="text-center mt-8">
                    <Link to="/team">
                        <button className="bg-[#23A6F0] text-white px-10 py-4 rounded-[5px] text-sm font-bold hover:bg-[#1a8cd8] transition">
                            View All Team Members
                        </button>
                    </Link>
                </div>

            </div>
        </section>
    );
}

export default AboutTeam;