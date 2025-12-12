import React from 'react'; 

const postData = [
    {
        id: 1,
        imgSrc: '/images/home/post1.jpg', 
        tag: 'NEW',
        badges: ['Google', 'Trending', 'New'],
        title: 'Loudest à la Madison #1 (L\'Integral)',
        description: 'We focus on ergonomics and meeting you where you work. It\'s only a keystroke away.',
        date: '22 April 2021',
        comments: '10 comments',
    },
    {
        id: 2,
        imgSrc: '/images/home/post2.jpg', 
        tag: 'NEW',
        badges: ['Google', 'Trending', 'New'],
        title: 'Loudest à la Madison #1 (L\'Integral)',
        description: 'We focus on ergonomics and meeting you where you work. It\'s only a keystroke away.',
        date: '22 April 2021',
        comments: '10 comments',
    },
    {
        id: 3,
        imgSrc: '/images/home/post3.jpg', 
        tag: 'NEW',
        badges: ['Google', 'Trending', 'New'],
        title: 'Loudest à la Madison #1 (L\'Integral)',
        description: 'We focus on ergonomics and meeting you where you work. It\'s only a keystroke away.',
        date: '22 April 2021',
        comments: '10 comments',
    },
];

const PostCard = ({ post }) => (

    <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-xl">
        
        <div className="relative">
            <img 
                src={post.imgSrc} 
                alt={post.title} 
                className="w-full h-[300px] object-cover" 
            />
          
            <span className="absolute top-5 left-5 bg-red-500 text-white text-xs font-bold py-1 px-3 rounded">
                {post.tag}
            </span>
        </div>

        <div className="p-6 flex flex-col grow">
            
        
            <div className="flex space-x-3 text-xs font-bold mb-3">
                {post.badges.map((badge, index) => (
                    <span 
                        key={index} 
                        className={index === 0 ? "text-[#2DC071]" : "text-gray-500"} 
                    >
                        {badge}
                    </span>
                ))}
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-2">
                {post.title}
            </h3>
            <p className="text-sm text-gray-500 mb-4 grow">
                {post.description}
            </p>

        
            <div className="flex items-center justify-between text-xs text-gray-500 mt-auto">
        
                <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4 text-[#2DC071]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    <span>{post.date}</span>
                </div>
               
                <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4 text-[#007bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.692A9.962 9.962 0 0112 2c4.97 0 9 3.582 9 8z"></path></svg>
                    <span>{post.comments}</span>
                </div>
            </div>

         
            <a href="#" className="flex items-center space-x-1 text-sm font-bold text-[#9D9D9D] mt-4 transition duration-300 hover:text-[#2DC071]">
                <span>Learn More</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </a>
        </div>
    </div>
);


function FeaturedPostsSection() {
    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center mb-16">
                    <p className="text-sm font-bold text-[#23A6F0] mb-2">
                        Practice Advice
                    </p>
                    <h2 className="text-4xl font-bold text-gray-800 mb-3">
                        Featured Posts
                    </h2>
                    <p className="text-base text-gray-500 max-w-xl mx-auto">
                        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                    </p>
                </div>

            
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {postData.map(post => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>

            </div>
        </section>
    );
}

export default FeaturedPostsSection;