import React from 'react';
import Logo from '../assets/next.png'; 
import Menu from '../assets/kottta.png'

const Navbar = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 md:px-10 py-4 flex items-center justify-between">
        
        
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Nexcent" className="w-20 h-10" /> 
          
        </div>

        
        <nav className="hidden md:flex space-x-8 text-gray-700">
          <a href="#" className="hover:text-green-600">Home</a>
          <a href="#" className="hover:text-green-600">Features</a>
          <a href="#" className="hover:text-green-600">Community</a>
          <a href="#" className="hover:text-green-600">Blog</a>
          <a href="#" className="hover:text-green-600">Pricing</a>
        </nav>

        
        <button className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition">
          Register Now →
        </button>
      </div>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        
        <div className="max-w-xl">
          <h1 className="  md:text-5xl font-bold text-gray-800">
            Lessons and insights <br />
            <span className="text-green-600">from 8 years</span>
          </h1>
          <p className="mt-4 text-gray-600">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">
            Register
          </button>
        </div>


        <div className="mt-10 md:mt-0 md:w-1/2">
          <img className='w-110 ml-30' src={Menu} alt="Illustration" />
        </div>
      </div>
    </section>
    </header>
  );
};

export default Navbar;
