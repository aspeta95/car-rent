import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const ReviewsCard = ({ details }) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col py-6 px-10 border rounded-lg shadow-lg ">
          <div className="relative p-4">
            <div className="absolute top-1 left-[-1.5rem]">
              <FaQuoteLeft color="coral" />
            </div>
            <p className="text-md italic">{details.review}</p>
            <div className="absolute bottom-1 right-[-1rem]">
              <FaQuoteRight color="coral" />
            </div>
          </div>
          <div className="flex flex-row justify-between mt-10">
            <div className="">
              <h5 className="text-gray-800 font-bold leading-[1.2] mb-2 text-lg">
                {details.name}
              </h5>
              <p className="text-gray-600 font-bold leading-[1.2] mb-2 text-md">
                {details.country}
              </p>
            </div>

            <div className="w-16 h-16 rounded-full overflow-hidden ">
              <img
                src={`../src/assets/img/${details.img}`}
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
        <div className="flex-grow"></div>
      </div>
    </>
  );
};

export default ReviewsCard;
