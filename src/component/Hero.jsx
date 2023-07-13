import React, { useState } from "react";
import hlogo from "../assets/hlogo.png";
import hsback from "../assets/hsback.png";
import hback from "../assets/hback.jpg";
import {AiOutlineMenu} from 'react-icons/ai'
const Hero = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <img
        className="absolute w-full h-screen object-cover"
        src={hsback}
        alt=""
      />
      <img className="w-full h-screen object-cover " src={hback} alt="" />
      <div>
        <img className="absolute top-12 left-12" src={hlogo} alt="" />
        <div className="flex justify-center items-center mt-[-1.5%] text-white">
          <div>
            <AiOutlineMenu
              onClick={handleNav}
              className="absolute top-4 right-4 z-[99] md:hidden"
            />
            {nav ? (
              <div className="fixed w-full h-screen  bg-[#030621] flex flex-col justify-center items-center left-0 right-0 top-0 z-20">
                <a
                  onClick={handleNav}
                  href="#main"
                  className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-[#030621] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                >
                  <span className="pl-4">Home</span>
                </a>
                <a
                  onClick={handleNav}
                  href="#open"
                  className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-[#030621] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                >
                  <span className="pl-4">What is GPT?</span>
                </a>
                <a
                  onClick={handleNav}
                  href="#case"
                  className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-[#030621] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                >
                  <span className="pl-4"> Open AI</span>
                </a>
                <a
                  onClick={handleNav}
                  href="#lib"
                  className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-[#030621] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                >
                  <button>Case Studies</button>
                  <span className="pl-4">Case Studies</span>
                </a>
                <a
                  onClick={handleNav}
                  href="#news"
                  className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-[#030621] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                >
                  <span className="pl-4">Library</span>
                </a>
              </div>
            ) : (
              ""
            )}

            <div className="md:block hidden absolute z-10 top-12 right-12◘">
              <div className="flex flex-col">
                <ul className="flex  gap-4">
                <ul className=" flex  gap-4">
          <li>Destinations</li>
          <li>Flights</li>
          <li>Accommodatin</li>
          <li>Activites</li>
          <li>About Us</li>
        </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
        

        <div className="absolute left-12 top-[25%] text-white font-sansmont ">
          <h1 className="font-bold text-5xl">Experience the World's Wonders</h1>
          <p className="max-w-[60%] pt-4">
            Welcome to our world of travel, where we specialize in crafting
            unique and personalized experiences for every traveler. From
            adventurous expeditions to relaxing getaways, our expert team is
            here to help you explore the world and create unforgettable
            memories.
          </p>
        </div>
        <div className="">
          <button className=" absolute top-[45%]  left-12 bg-[#F96E09] w-24 h-10 rounded-2xl text-white font-bold font-sansmont">
            Discover
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
