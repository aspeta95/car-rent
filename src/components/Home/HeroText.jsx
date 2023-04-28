import React from "react";
import Button from "../Button";

const HeroText = () => {
  return (
    <>
      <h1 className="text-black font-bold leading-[1.2] mb-9 text-5xl">
        Save <span className="text-orange-600">big</span> with our car rental
      </h1>
      <p>
        Find your perfect ride. Choose from a wide range of vehicles and enjoy a
        hassle-free booking experience.
      </p>
      <div className="flex flex-row mt-10">
        <Button className="w-32 bg-orange-600 font-bold text-white border-2 border-orange-600 hover:bg-white hover:text-orange-600">
          Book Car
        </Button>
        <Button className="w-32 border-2 bg-black text-white border-black font-bold ml-6 hover:bg-white hover:text-black">
          Learn +
        </Button>
      </div>
    </>
  );
};

export default HeroText;
