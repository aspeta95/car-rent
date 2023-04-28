import React from "react";
import { AiFillPhone, AiFillMail } from "react-icons/ai";
import Button from "./Button";

const Footer = () => {
  return (
    <section className="mb-10 mt-10 bg-gray-50 py-8">
      <div className="container mx-auto grid grid-cols-4 gap-8">
        <div className="px-16">
          <h4 className="text-black font-bold leading-[1.2] text-2xl mb-4">
            Car Rental
          </h4>
          <p>Always ready to provide you the best cars for rent</p>
          <p className="flex flex-row items-center mt-4">
            <AiFillPhone style={{ marginRight: "10px" }} /> (+34) 666 55 44 33
          </p>
          <p className="flex flex-row items-center">
            <AiFillMail style={{ marginRight: "10px" }} /> support@carrental.com
          </p>
        </div>
        <div>
          <h4 className="text-black font-bold leading-[1.2] text-2xl mb-4">
            Our Company
          </h4>
          <a href="#">
            <p>Location</p>
          </a>
          <a href="#">
            <p>Work with us!</p>
          </a>
          <a href="#">
            <p>Blog</p>
          </a>
          <a href="#">
            <p>Our Team</p>
          </a>
        </div>
        <div>
          <h4 className="text-black font-bold leading-[1.2] text-2xl mb-4">
            Legal
          </h4>
          <a href="#">
            <p>Cookies</p>
          </a>
          <a href="#">
            <p>Disclaimer</p>
          </a>
          <a href="#">
            <p>Privacy</p>
          </a>
          <a href="#">
            <p>Conditions</p>
          </a>
        </div>
        <div>
          <h4 className="text-black font-bold leading-[1.2] text-2xl mb-4">
            Newsletter
          </h4>
          <p className="mb-4">
            Susbscribe to our Newsletter to get the latest news
          </p>
          <input
            placeholder="Your Email"
            className="border border-gray-300 w-full rounded px-3 py-2 text-gray-600 focus:outline-none focus:ring-1 focus:ring-orange-600 mb-4"
          ></input>
          <Button className="bg-orange-600 font-bold text-white border-2 border-orange-600">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Footer;
