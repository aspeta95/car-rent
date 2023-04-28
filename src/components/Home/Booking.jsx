import React, { useState } from "react";
import Input from "../Input";
import Select from "../Select";
import Button from "../Button";
import {
  AiFillCar,
  AiTwotoneEnvironment,
  AiTwotoneCalendar,
} from "react-icons/ai";
import { ImCross } from "react-icons/im";
import clsx from "clsx";

const vehicles = [
  "Toyota Corolla",
  "Honda Civic",
  "Ford Fiesta",
  "Volkswagen Golf",
  "Nissan Altima",
  "Hyundai Elantra",
  "Chevrolet Cruze",
];
const locations = [
  "Madrid",
  "A coruña",
  "Barcelona",
  "Sevilla",
  "Bilbao",
  "Valencia",
  "Granada",
  "Leon",
];

const Booking = () => {
  const [showModal, setShowModal] = useState(false);
  const [showError, setShowError] = useState(false);
  const [vehicleType, setVehicleType] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");

  const errorClass = clsx({
    hidden: !showError,
  });

  const isFormValid = () => {
    return (
      vehicleType !== "" &&
      pickupLocation !== "" &&
      dropoffLocation !== "" &&
      pickupDate !== "" &&
      dropoffDate !== ""
    );
  };

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!isFormValid()) {
      setShowError(true);
    }
  }

  return (
    <section className="mt-12">
      <div className="container mx-auto border-2 border-orange-100 px-28 py-6 bg-gradient-to-r from-orange-100 via-yellow-50 to-orange-100 p-8 rounded-lg">
        <h2 className="text-black font-bold leading-[1.2] mb-9 text-3xl">
          Book a car
        </h2>
        <div
          className={`flex flex-row justify-between items-center px-8 py-2 mb-4 rounded-xl bg-gradient-to-r from-red-200 via-red-100 to-red-200 ${errorClass}`}
        >
          <h4 className="text-red-600 font-bold leading-[1.2] text-xl">
            Fill all the fields
          </h4>
          <ImCross size={20} color="red" />
        </div>
        <form className="grid grid-cols-3 gap-8">
          <Select
            placeholder="car type"
            label="Vehicle Type"
            options={vehicles}
            icon={AiFillCar}
            value={vehicleType}
            onChange={setVehicleType}
          ></Select>
          <Select
            placeholder="pick-up location"
            label="Pick-up Location"
            options={locations}
            icon={AiTwotoneEnvironment}
            value={pickupLocation}
            onChange={setPickupLocation}
          ></Select>
          <Select
            placeholder="drop off location"
            label="Drop-off Location"
            options={locations}
            icon={AiTwotoneEnvironment}
            value={dropoffLocation}
            onChange={setDropoffLocation}
          ></Select>
          <Input
            label="Pick-up Date"
            type="date"
            icon={AiTwotoneCalendar}
            value={pickupDate}
            onChange={setPickupDate}
          ></Input>
          <Input
            label="Pick-up Date"
            type="date"
            icon={AiTwotoneCalendar}
            value={dropoffDate}
            onChange={setDropoffDate}
          ></Input>
          <div className="flex pt-8">
            <Button
              className="bg-orange-600 font-bold text-white border-2 border-orange-600 w-full "
              onClick={handleFormSubmit}
            >
              Book now
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Booking;
