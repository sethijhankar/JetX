import React from 'react';
import banner2 from "./banner2.jpg";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-center lg:justify-between h-[80vh] md:px-24 py-16 lg:py-24'>
      <div className="lg:mr-8">
        <img className='w-full max-w-md lg:max-w-none' src={banner2} alt="" />
      </div>
      <div className="text-center lg:text-left lg:w-1/2 lg:pl-8">
        <div className="mb-4">
          <div className="h-1 w-10 bg-black mb-2 mx-auto lg:mx-0"></div>
          <span className="block text-xl lg:text-2xl">Self Adhesive Labels</span>
        </div>
        <span className="block text-3xl lg:text-5xl mb-4">Shop Best Labels <br /> for your Products</span>
        <p className="mb-4">
          At <b className='text-primarylight'>JetX</b>, we believe that labels aren't just pieces of paper or adhesive Whether you're a small startup or an established enterprise, we're here to provide you with labels that make a lasting impression.
        </p>
        <Link to="/products" className='bg-primarylight py-2 px-4 text-secondary font-bold rounded-lg inline-block'>Explore Products</Link>
      </div>
    </div>
  );
}

export default HeroSection;
