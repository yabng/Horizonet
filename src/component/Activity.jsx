import React from "react";

const Activity = () => {
  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2">
        <div>
          <h1 className="text-[#F96E09] font-semibold text-2xl pl-12 pt-12">
            Activity
          </h1>
          <h3 className="pl-12 font-sansmont font-semibold pt-4">
            Horizon Ethiopia provides with Unique Activities
          </h3>
          <p className=" font-sansmont font-light pl-12 pt-4">
            Showcase activities that allow travelers to immerse themselves in
            the local culture, such as cooking classes, dance lessons, and
            historical tours. Highlight adrenaline- pumping activities like
            bungee jumping, skydiving, and white-water rafting.
          </p>

          <h1 className="text-[#F96E09] font-semibold text-2xl pl-12 pt-8">
            Check Out Land Services
          </h1>
          <div className="flex justify-between pt-8">
            <div className="bg-[#F96E09] w-24 h-2 ml-12 mt-4" />
            <div className="flex justify-end">
              <button className="bg-[#F96E09] border-none rounded-2xl w-48 h-11 text-white font-semibold mr-12">
                New Services Available
              </button>
            </div>
          </div>

          <p className=" font-sansmont font-light pl-12 pt-4">
            Showcase activities that allow travelers to immerse themselves in
            the local culture, such as cooking classes, dance lessons, and
            historical tours. Highlight adrenaline- pumping activities like
            bungee jumping, skydiving, and white-water rafting. Showcase any
            unique activities or experiences that your agency specializes in,
            such as luxury yacht trips, photography tours, or sustainable
            tourism experiences.
          </p>

          <div className="flex justify-between pt-8">
            <div className="flex justify-end">
              <button className="bg-[#F96E09] border-none rounded-2xl text-2xl w-48 h-11 text-white font-semibold ml-12">
                Offers
              </button>
            </div>
            <div className="bg-[#F96E09] w-24 h-2  mr-12 mt-4" />
          </div>
        </div>
        <div className="grid grid-rows-3 mr-24">
          <div className="bg-[#21283A]">
            <h1 className=" text-[#F96E09] font-fontlobaser text-3xl text-center pt-12">
              Thrills
            </h1>
            <p className=" text-white font-sansmont font-thin text-center pt-4">
              Unleash your adventurous spirit with heart-pumping activities and
              customized itineraries in our Thrills section
            </p>
          </div>
          <div className="bg-[#F96E09]">
            <h1 className=" text-white font-fontlobaser text-3xl text-center pt-12">
              {" "}
              Wanderlust
            </h1>
            <p className=" text-white font-sansmont font-light text-center pt-4">
              Indulge your desire for exploration and discovery with our
              immersive travel experiences in the Wanderlust section.
            </p>
          </div>
          <div className="bg-[#21283A]">
            <h1 className=" text-[#F96E09] font-fontlobaser text-3xl text-center pt-12">
              Excursions
            </h1>
            <p className=" text-white font-sansmont font-thin text-center pt-4">
              Immerse yourself in local culture and discover new destinations
              with handpicked experiences in the Excursions section.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
