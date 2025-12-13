import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

function TeamMembers() {
    const teamMembers = [
        {
            id: 1,
            image: '/images/team/team1.jpg',
            name: 'Gökhan Özdemir',
            profession: 'Project Manager',
            social: {
                facebook: '#',
                instagram: '#',
                twitter: '#'
            }
        },
        {
            id: 2,
            image: '/images/team/team2.jpg',
            name: 'Buket Tireli',
            profession: 'Full Stack Developer',
            social: {
                facebook: '#',
                instagram: '#',
                twitter: '#'
            }
        },
        {
            id: 3,
            image: '/images/team/team3.jpg',
            name: 'Team Member',
            profession: 'Developer',
            social: {
                facebook: '#',
                instagram: '#',
                twitter: '#'
            }
        },
       
        
    ];

    return (
        <section className="w-full bg-white py-12 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
               
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
                                <a 
                                    href={member.social.facebook} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-[#23A6F0] hover:text-[#1a8cd8] transition"
                                >
                                    <Facebook size={20} />
                                </a>
                                <a 
                                    href={member.social.instagram} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-[#23A6F0] hover:text-[#1a8cd8] transition"
                                >
                                    <Instagram size={20} />
                                </a>
                                <a 
                                    href={member.social.twitter} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-[#23A6F0] hover:text-[#1a8cd8] transition"
                                >
                                    <Twitter size={20} />
                                </a>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default TeamMembers;