import React from "react";
import AudiCar from "../../assets/img/audi.png";
import HeroText from "./HeroText";

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto flex items-center mt-20">
        <div className="flex flex-col max-w-2xl px-32">
          <HeroText />
        </div>

        <img src={AudiCar} className="w-[50%] h-full object-cover" />
      </div>
    </section>
  );
};

export default Hero;
