import React from "react";
import ReviewsCard from "./ReviewsCard";
import userReviews from "../assets/data/reviews.json";

const Reviews = () => {
  return (
    <section className="mt-10">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <h4 className="text-gray-800 font-bold leading-[1.2] mb-2 text-xl">
          Client Reviews
        </h4>
        <h2 className="text-gray-800 font-bold leading-[1.2] mb-2 text-4xl">
          Testimonials
        </h2>
        <p className="items-center justify-center max-w-xl text-center font-bold text-gray-400">
          Our clients have enjoyed our exceptional service and outcomes, and
          they're enthusiastic about sharing their gratifying experience with
          you.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-3 gap-16 p-16">
        {userReviews.map((user, idx) => (
          <ReviewsCard key={idx} details={user} />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
