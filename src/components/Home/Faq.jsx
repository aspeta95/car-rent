import React from "react";
import faq from "../../assets/data/faq.json";
import FaqCard from "./FaqCard";

const Faq = () => {
  return (
    <section>
      <div className="container flex flex-col items-center justify-center mx-auto mt-16 text-center">
        <h4 className="text-black font-bold leading-[1.2] mb-9 text-2xl">
          FAQ
        </h4>
        <h2 className="text-black font-bold leading-[1.2] mb-9 text-4xl">
          Frequently Asked Question
        </h2>
        <p></p>
        <div className="w-[50%] shadow-xl shadow-black/30 rounded-lg">
          {faq.map((question, idx) => (
            <FaqCard key={idx} details={question} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
