import React from "react";
import wback from "../assets/wback.jpg";
import wbackp from "../assets/wbacko.png";
import wb from "../assets/wb.png";
import wi1 from "../assets/wi1.png";
import wi2 from "../assets/wi2.png";
import wi3 from "../assets/wi3.png";

const Wander = () => {
  return (
    <div className="relative">
      <img
        className="absolute max-h-full w-full  object-cover"
        src={wbackp}
        alt=""
      />
      <img className="w-full  object-cover " src={wback} alt="" />
      <div className=" absolute  grid sm:grid-cols-1 md:grid-cols-3 top-12 w-full">
        <div>
          <div className="flex justify-center ">
            <img className="absolute" src={wb} alt="" />
            <img className="relative top-4" src={wi1} alt="" />
          </div>
          <h1 className=" font-fontlobaser text-center text-white text-3xl mt-[25%]">
            Wanderlust
          </h1>
          <p className=" font-sansmont text-white text-center font-light ">
            Indulge your desire for exploration and discovery with our immersive
            travel experiences in the Wanderlust.
          </p>
        </div>
        <div>
          <div>
            <div className="flex justify-center ">
              <img className="absolute" src={wb} alt="" />
              <img className="relative top-5" src={wi2} alt="" />
            </div>
            <h1 className=" font-fontlobaser text-center text-white text-3xl mt-[25%]">
              Wanderlust
            </h1>
            <p className=" font-sansmont text-white text-center font-light ">
              Indulge your desire for exploration and discovery with our
              immersive travel experiences in the Wanderlust.
            </p>
          </div>
        </div>
        <div>
          <div>
            <div className="flex justify-center ">
              <img className="absolute" src={wb} alt="" />
              <img className="relative top-5" src={wi3} alt="" />
            </div>
            <h1 className=" font-fontlobaser text-center text-white text-3xl mt-[25%]">
              Wanderlust
            </h1>
            <p className=" font-sansmont text-white text-center font-light ">
              Indulge your desire for exploration and discovery with our
              immersive travel experiences in the Wanderlust.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wander;
