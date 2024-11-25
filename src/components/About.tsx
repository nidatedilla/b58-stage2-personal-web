import React from 'react';

interface AboutProps {
    name: string;
}

const About: React.FC<AboutProps> = ({ name }) => {
    return (
        <section id="about" className="bg-white shadow-lg rounded-lg p-6 mt-6 max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-center">Tentang Saya</h2>
            <div className="flex flex-col items-center mt-4">
                <img 
                    src="https://i.pinimg.com/736x/12/fb/66/12fb6604fc504a5e214e93d53f904db6.jpg" 
                    className="rounded-full mb-4 w-48 h-48 object-cover"
                />
                <p className="text-xl font-semibold">{name}</p>
                <p className="mt-4 text-gray-700 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis inventore ea aliquam, tenetur dolor veritatis voluptatibus. Repellendus maiores eius alias consequuntur natus magnam corrupti minima? Odio eligendi quae vero eaque.</p>
            </div>
        </section>
    );
};

export default About;