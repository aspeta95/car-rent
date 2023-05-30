import React, { useState, useEffect } from "react";
import { carDetails } from "../assets/data/cars";
import VehicleDetails from "./VehicleDetails";

const Vehicles = () => {
  const [car, setCar] = useState(carDetails[0]);
  // console.log(car)

  useEffect(() => {}, [car]);

  function handleCarClick(id) {
    setCar(carDetails[id]);
  }

  return (
    <section className="mt-4">
      {/* {console.log(carDetails)} */}
      <div className="container mx-auto flex flex-col justify-center items-center">
        <h4 className="text-black font-bold leading-[1.2] mb-2 text-2xl">
          Vehicles
        </h4>
        <h2 className="text-black font-bold leading-[1.2] mb-4 text-4xl">
          Our Car Fleet
        </h2>
        <p>Choose a rental car for your trip</p>
        <div className="grid grid-cols-3 gap-12">
          <div className="flex flex-col items-center">
            {carDetails.map((car, idx) => (
              <button
                key={idx}
                id={car.id}
                onClick={() => handleCarClick(car.id)}
                className="w-64 px-8 py-3 mb-2 bg-gray-100 font-bold text-black hover:bg-orange-600 hover:text-white"
              >
                {`${car.brand} ${car.model}`}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-center w-96">
            <img src={`${car.img}`} className="" />
          </div>

          <div>
            <VehicleDetails details={[car]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vehicles;
