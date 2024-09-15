import React from 'react';
import marioImage from '../assets/mario.jpeg'; 
import blogImage from '../assets/blog.jpeg';
import galeryImage from '../assets/galery.png';
import { FaHtml5, FaGithub, FaReact, FaNodeJs, FaCss3Alt, FaJsSquare, FaDiscord,  FaSass } from 'react-icons/fa'; // Importando ícones das tecnologias
import { SiPrisma, SiTypescript, SiPostgresql, SiHandlebarsdotjs } from 'react-icons/si';

import TiltImage from './TiltImage';
import ContactForm from './ContactForm';
const Main = () => {
  return (
    <section className="flex flex-col">
      {/* Intro Section */}
      <div className="flex flex-col justify-center items-center bg-gradient-to-r from-teal-600 to-blue-800 text-white min-h-screen text-center px-4 py-16">
        <div className="max-w-5xl text-center md:text-left">
          <h1 className="text-8xl font-extrabold mb-6">My name is Guilherme</h1>
          <p className="text-4xl mb-8">I am a web developer 😉, I create stunning websites 💻, Let's build something amazing! 🚀</p>
          <button className="bg-yellow-600 text-white px-10 py-5 rounded-full hover:bg-yellow-600 transition duration-300">Know More</button>
        </div>
      </div>

      {/* About Me Section */}
      <div className="bg-gradient-to-br from-gray-100 to-gray-300 text-gray-900 min-h-[60vh] px-4 py-8 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img src={marioImage} alt="About Me" className="w-full max-w-lg h-auto object-cover rounded-lg shadow-lg" />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left px-4">
          <h2 className="text-4xl font-bold mb-4 text-teal-600">About Me</h2>
          <p className="mb-6 text-lg">I am a passionate programmer with a love for creating impactful web <br /> experiences. Always eager to learn and explore new technologies.</p>
          <button className="bg-teal-600 text-white px-6 py-4 rounded-full hover:bg-teal-700 transition duration-300">View Resume</button>
        </div>
      </div>

    {/* Projects Section */}
    <div className="bg-gray-50 text-gray-900 min-h-screen px-4 py-8">
    <h2 className="text-4xl font-bold mb-6 text-blue-600 text-center">Projects</h2>
    
    <div className="flex flex-col space-y-6 w-full max-w-6xl mx-auto">
        {/* Blog Project */}
        <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-600 flex flex-col md:flex-row-reverse items-center">
        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <TiltImage
          imageUrl={blogImage}
          className="w-full max-w-4xl h-auto object-cover rounded-lg shadow-lg"
          />
      </div>
        <div className="w-full md:w-1/2 text-center md:text-left px-6">
            <h3 className="text-2xl font-semibold mb-2">Blog</h3>
            <p className="mb-4">I did this project just for fun, it actually works, but is not amazing</p>
            <div className="flex space-x-4 justify-center md:justify-start">
            {/* <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300">See Live</button> */}
            <a href="https://github.com/SrCrow02/DevBlog" target="_blank" rel="noopener noreferrer">
              <button className="bg-gray-500 text-white px-6 py-3 rounded-full hover:bg-gray-600 transition duration-300">
                Source Code
              </button>
            </a>
            </div>
            <div className="flex space-x-4 mt-4">
              <FaNodeJs className="text-green-500" size={30} />
              <FaCss3Alt className="text-blue-700" size={30} />
              <FaHtml5 className="text-blue-700" size={30} />
              <SiPrisma className="text-blue-700" size={30} />
              <SiTypescript className="text-blue-700" size={30} />
              <SiPostgresql className="text-blue-700" size={30} />
              <SiHandlebarsdotjs className="text-blue-700" size={30} />
            </div>
        </div>
        </div>
        
        {/* Gallery Project */}
        <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-600 flex flex-col md:flex-row-reverse items-center">
        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <TiltImage
          imageUrl={galeryImage}
          className="w-full max-w-4xl h-auto object-cover rounded-lg shadow-lg"
          />
      </div>
        <div className="w-full md:w-1/2 text-center md:text-left px-6">
            <h3 className="text-2xl font-semibold mb-2">Galery</h3>
            <p className="mb-4">Just a frontend mini-project that I used to study a little bit.</p>
            <div className="flex space-x-4 justify-center md:justify-start">
            <button className="bg-gray-500 text-white px-6 py-3 rounded-full hover:bg-gray-600 transition duration-300">Source Code</button>
            </div>
            <div className="flex space-x-4 mt-4">
              <FaSass className="text-blue-700" size={30} />
              <FaHtml5 className="text-blue-700" size={30} />
            </div>
        </div>
        </div>
    </div>
    </div>
{/* Contact Section */}
<div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white min-h-[60vh] text-center px-8 py-12 flex flex-col justify-center items-center space-y-6">
  <h2 className="text-4xl font-bold mb-4 text-red-400">Contact</h2>
  <p className="text-lg mb-6">Let's work together on your next big project. Whether you have a question or want to get started, I'd love to hear from you!</p>
  
    <ContactForm/>

    {/* Additional Contact Info */}
    <div className="mt-8">
      <p className="text-lg">Or reach me directly at:</p>
      <a href="mailto:guibio24@proton.me" className="text-red-400 underline">guibio24@proton.me</a>
      <p className="mt-2">Phone: <a href="tel:+1234567890" className="text-red-400 underline">+55 11 9 1337-1300</a></p>
    </div>
  </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-2x"><FaGithub></FaGithub></i></a>
          <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-2x"><FaDiscord></FaDiscord></i></a>
        </div>
        <p>&copy; 2024 Guilherme. All rights reserved.</p>
      </footer>
    </section>    
  );
}

export default Main;