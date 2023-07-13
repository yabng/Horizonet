import React from "react";
import fback from "../assets/fback.jpg";
import fbackp from "../assets/fbackp.png";
const Flighs = () => {
  return (
    <div className="relative">
      <img
        className="absolute w-full h-screen object-cover"
        src={fbackp}
        alt=""
      />
      <img className="w-full h-screen object-cover" src={fback} alt="" />
      <div className="absolute left-12 top-[25%] font-sansmont">
        <h1 className="text-white font-bold text-4xl">
          Unleash Your Wanderlust:
        </h1>
        <p className="text-5xl text-white font-bold">
          Discover Unique Travel Experiences
        </p>
        <p className="text-[#f96e09] pt-6">Discover Our Story</p>

        <p className="text-white w-[90%] pt-6">
          Welcome to our world of travel, where we specialize in crafting unique
          and personalized experiences for every traveler.
        </p>

        <button className="bg-[#f96e09] w-40 h-10 rounded-3xl text-white font-medium ml-[35%] mt-24">
          Find out More
        </button>
      </div>
    </div>
  );
};

export default Flighs;
