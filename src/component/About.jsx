import React from "react";
import {
  TiSocialTwitterCircular,
  TiSocialLinkedinCircular,
  TiSocialYoutube,
} from "react-icons/ti";
import { FaFacebook, FaAppStore } from "react-icons/fa";
import { BsInstagram, BsGooglePlay } from "react-icons/bs";

const About = () => {
  return (
    <div>
      <div className="w-full flex justify-center">
        <button className="bg-[#F96E09] text-white w-[45%] h-10 rounded-2xl mt-12 mx-auto text-2xl font-medium font-sansmont mb-5">
          Check Discount Offer
        </button>
      </div>

      <div className=" w-full bg-[#21283A]">
        <h1 className="text-center text-white font-sansmont text-3xl font-medium pt-12">
          About
        </h1>

        <p className="text-center text-white  font-sansmont font-light pl-[10%] pr-[10%] pt-12 pb-12">
          "Thrills": Get ready for the adventure of a lifetime with our Thrills
          section. Whether you're seeking heart-pumping activities like bungee
          jumping and white-water rafting or more laid-back experiences like
          hiking and kayaking, we've got you covered. Our team of experts
          specializes in crafting unique and customized adventure itineraries
          that cater to your interests and skill level. Get ready to push your
          limits and create unforgettable memories with our Thrills section.
        </p>

        <div className="w-full bg-white">
          <div className="grid grid-cols-3 pl-[5%] pr-[5%] pt-8">
            <div>
              <div className="bg-[#F96E09] w-24 h-2" />
              <ul className="pt-5 font-sansmont font-medium ">
                <li className="pt-5">Explore, Create, Cherish Memories</li>
                <li className="pt-5">Destinations</li>
              </ul>
            </div>
            <div>
              <div className="bg-[#F96E09] w-24 h-2" />
              <ul className="pt-5 font-sansmont font-medium ">
                <li className="pt-5">Flights</li>
                <li className="pt-5">Accommodation</li>
              </ul>
            </div>
            <div>
              <div className="bg-[#F96E09] w-24 h-2" />
              <ul className="pt-5 font-sansmont font-medium ">
                <li className="pt-5">Activities</li>
                <li className="pt-5">About Us</li>
              </ul>
            </div>
          </div>

          <div className="pt-12 flex justify-between">
            <div className="flex gap-8 pl-[5%]">
            <h1 className="  font-sansmont font-bold">Follw Us</h1>
              <FaFacebook size={25} color="#F96E09" />
              <BsInstagram size={25} color="#F96E09" />
              <TiSocialTwitterCircular size={25} color="#F96E09" />
              <TiSocialLinkedinCircular size={25} color="#F96E09" />
              <TiSocialYoutube size={25} color="#F96E09" />
            </div>
            <div className="flex pr-[5%] gap-8">
            <h1 className=" font-sansmont font-bold">Download</h1>
              <FaAppStore size={25} color="#F96E09" />
              <BsGooglePlay size={25} color="#F96E09" />
            </div>
          </div>
          <div className="bg-black w-[80%] border-black ml-[10%] h-0.5 mt-4 "/>
          <p  className="text-center font-sansmont font-light mb-3">Copyright © 2023 - Grand Holidays Ethiopia Tours. All Rights Reserved. Website Developed by Libra Technologies</p>

        </div>
      </div>
    </div>
  );
};

export default About;
