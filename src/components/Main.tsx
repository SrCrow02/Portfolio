    import React from 'react';
    import Typed from 'react-typed';
    import marioImage from '../assets/mario.jpeg'; // Use sua própria imagem para projetos

    const Main = () => {
    return (
        <section className="flex flex-col">
        {/* Intro Section */}
        <div className="flex flex-col justify-center items-center bg-gradient-to-r from-teal-600 to-blue-800 text-white min-h-screen text-center px-4 py-16">
            <div className="max-w-5xl text-center md:text-left">
            <h1 className="text-8xl font-extrabold mb-6">My name is Guilherme</h1>
                <p  className="text-4xl mb-8">I am a web developer 😉', 'I create stunning websites 💻', 'Let's build something amazing! 🚀</p>
            <button className="bg-yellow-500 text-white px-10 py-5 rounded-full hover:bg-yellow-600 transition duration-300">Know More</button>
            </div>
        </div>

        {/* About Me Section */}
        <div className="bg-gray-100 text-gray-900 min-h-[60vh] px-4 py-8 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <img src={marioImage} alt="About Me" className="w-full max-w-lg h-auto object-cover rounded-lg shadow-lg" />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left px-4">
            <h2 className="text-4xl font-bold mb-4 text-teal-600">About Me</h2>
            <p className="mb-6 text-lg">I am a passionate programmer with a love for creating impactful web <br />experiences. Always eager to learn and explore new technologies.</p>
            <button className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition duration-300">View Resume</button>
            </div>
        </div>

        {/* Projects Section */}
        <div className="bg-blue-50 text-gray-900 min-h-screen px-4 py-8">
            <h2 className="text-4xl font-bold mb-6 text-blue-600 text-center">Projects</h2>
            <div className="flex flex-col space-y-6 w-full max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-600 flex flex-col md:flex-row-reverse items-center">
                <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
                <img src={marioImage} alt="Project 2" className="w-full max-w-lg h-auto object-cover rounded-lg shadow-lg border-4 border-blue-600" />
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left px-4">
                <h3 className="text-2xl font-semibold mb-2">Project Title 2</h3>
                <p className="mb-4">A brief description of the project goes here. Highlight key features and technologies used.</p>
                <div className="flex space-x-4 justify-center md:justify-start">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300">See Live</button>
                    <button className="bg-gray-500 text-white px-4 py-2 rounded-full hover:bg-gray-600 transition duration-300">Source Code</button>
                </div>
                </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-600 flex flex-col md:flex-row-reverse items-center">
                <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
                <img src={marioImage} alt="Project 2" className="w-full max-w-lg h-auto object-cover rounded-lg shadow-lg border-4 border-blue-600" />
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left px-4">
                <h3 className="text-2xl font-semibold mb-2">Project Title 2</h3>
                <p className="mb-4">A brief description of the project goes here. Highlight key features and technologies used.</p>
                <div className="flex space-x-4 justify-center md:justify-start">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300">See Live</button>
                    <button className="bg-gray-500 text-white px-4 py-2 rounded-full hover:bg-gray-600 transition duration-300">Source Code</button>
                </div>
                </div>
            </div>
            </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-800 text-white min-h-[40vh] text-center px-4 py-8 flex flex-col justify-center items-center">
            <h2 className="text-4xl font-bold mb-4 text-red-400">Contact</h2>
            <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition duration-300">Call to Action</button>
        </div>

        {/* Footer Section */}
        <footer className="bg-gray-900 text-white py-4 text-center">
            <img src="" alt="Footer Image" className="mx-auto" />
        </footer>
        </section>
    );
    }

    export default Main;