import React from "react";
import DetailsCard from "./DetailsCard";
import { BiWorld, BiCar } from "react-icons/bi";
import { RiComputerFill } from "react-icons/ri";

const Details = () => {
  return (
    <section className="bg-gray-50 mt-12 py-12">
      <div className="container flex flex-col items-center justify-center mx-auto text-center">
        <h4 className="text-black font-bold leading-[1.2] mb-9 text-2xl">
          Plan your trip now
        </h4>
        <h2 className="text-black font-bold leading-[1.2] mb-9 text-4xl">
          Quick & easy car rental
        </h2>

        <div className="grid grid-cols-3 gap-8 mt-8">
          <DetailsCard title="More than 100 countries" icon={BiWorld}>
            Offering cars worldwide for more than 109 years.
          </DetailsCard>
          <DetailsCard title="Premium Cars" icon={BiCar}>
            Feel like a VIP wherever you go with our cars
          </DetailsCard>
          <DetailsCard title="Fully Digital" icon={RiComputerFill}>
            Avoid long lines at the counter
          </DetailsCard>
        </div>
      </div>
    </section>
  );
};

export default Details;
