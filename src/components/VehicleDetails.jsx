import React from "react";
import Button from "./Button";

const VehicleDetails = ({ details }) => {
  const { brand, model, year, doors, ac, transmission, fuel, price } =
    details[0];

  return (
    <>
      <div className="border border-orange-600 bg-orange-600 text-white font-bold py-2 text-center w-80 mt-10">
        <span>{price}</span> € / per day
      </div>
      <table className="border border-orange-600 border-t-0 text-center w-80">
        <tr className="border-b border-b-gray-500">
          <td className="border-r border-r-gray-500 py-1 w-[50%]">Brand</td>
          <td>{brand}</td>
        </tr>
        <tr className="border-b border-b-gray-500">
          <td className="border-r border-r-gray-500 py-1 w-[50%]">Model</td>
          <td>{model}</td>
        </tr>
        <tr className="border-b border-b-gray-500">
          <td className="border-r border-r-gray-500 py-1 w-[50%]">Year</td>
          <td>{year}</td>
        </tr>
        <tr className="border-b border-b-gray-500">
          <td className="border-r border-r-gray-500 py-1 w-[50%]">Doors</td>
          <td>{doors}</td>
        </tr>
        <tr className="border-b border-b-gray-500">
          <td className="border-r border-r-gray-500 py-1 w-[50%]">AC</td>
          <td>{ac}</td>
        </tr>
        <tr className="border-b border-b-gray-500">
          <td className="border-r border-r-gray-500 py-1 w-[50%]">
            Transmission
          </td>
          <td>{transmission}</td>
        </tr>
        <tr>
          <td className="border-r border-r-gray-500 py-1 w-[50%]">Fuel</td>
          <td>{fuel}</td>
        </tr>
      </table>
      <div className="flex items-center justify-center w-80 mt-4">
        <Button className="w-32 bg-orange-600 font-bold text-white border-2 border-orange-600 hover:bg-white hover:text-orange-600">
          Book now
        </Button>
      </div>
    </>
  );
};

export default VehicleDetails;
