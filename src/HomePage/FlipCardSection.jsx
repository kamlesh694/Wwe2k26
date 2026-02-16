// MultiCardCarousel.jsx
import React, { useState } from "react";

const cardsData = [
  { id: 1,  img: "/images/wwe1.jpg" },
  { id: 2,  img: "/images/wwe2.jpg" },
  { id: 3,  img: "/images/wwe3.jpg" },
  { id: 4,  img: "/images/wwe4.jpg" },
  { id: 5,  img: "/images/wwe5.jpg" },
  { id: 6, img: "/images/wwe6.jpg" },
  { id: 7,  img: "/images/wwe7.jpg" },
  { id: 8,  img: "/images/wwe8.jpg" },
  { id: 9, img: "/images/wwe9.jpg" },
];

const MultiCardCarousel = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const visibleCards = 4;

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + visibleCards < cardsData.length ? prev + visibleCards : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - visibleCards >= 0 ? prev - visibleCards : cardsData.length - visibleCards
    );
  };

  return (
    <div className="relative bg-black w-full max-w-8xl mx-auto py-10 overflow-hidden">
      <div
        className="flex transition-transform mx-[30px] duration-500"
        style={{ transform: `translateX(-${(100 / visibleCards) * currentIndex}%)` }}
      >
        {cardsData.map((card) => (
          <div
            key={card.id}
            className="flex-none p-4 w-full sm:w-full md:w-1/2 lg:w-1/4"
          >
            {/* Card with hover animation */}
            <div className="mt-7 relative w-full h-94 bg-white rounded-lg shadow-lg overflow-hidden
                            transition-transform duration-300 ease-in-out
                            hover:scale-105 hover:border-2 hover:border-red-500">
              <img
                src={card.img}
                alt={card.description}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center py-2">
                <h2 className="text-lg font-bold">{card.description}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Prev/Next Buttons */}
      <button onClick={prevSlide} className="absolute top-2 right-16 p-2 z-10">
        <img src="/images/button1.png" alt="Prev" className="w-8 h-8" />
      </button>

      <button onClick={nextSlide} className="absolute top-2 right-2 p-2 z-10">
        <img src="/images/button2.png" alt="Next" className="w-8 h-8" />
      </button>
    </div>
  );
};

export default MultiCardCarousel;
