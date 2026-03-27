import React from "react";

const Hero = () => {
  return (
    <>
      <div
        className="relative min-h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: "url(grassy.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
            Cutting-edge service, from seed to bloom.
          </h1>
          <p className="mb-8 text-xl sm:text-2xl text-white/90 drop-shadow-md font-medium">
            Get started with a $5 discount on your first cut! Schedule now and
            experience our cutting-edge service for yourself!
          </p>
          <a href="tel:405-293-8795">
            <button className="px-8 py-4 bg-[#afae81] text-[#4b5717] font-bold rounded-full text-lg hover:bg-[#8a8a65] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer">
              Schedule Your Services
            </button>
          </a>
        </div>
      </div>

      <div className="bg-[#f6f6eb] py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#4b5717] mb-4">
            Our Work
          </h2>
          <div className="w-24 h-1 bg-[#afae81] mx-auto mb-8 rounded-full"></div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/backyard.jpg"
              alt="Beautiful backyard transformation"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
