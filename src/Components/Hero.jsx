import React from "react";

const Hero = () => {
  return (
    <div
      className="hero min-h-[50vh] flex flex-col justify-end"
      style={{
        backgroundImage: "url(grassy.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "bottom center",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-xl">
          <h1 className="mb-5 text-5xl font-bold">
            Cutting-edge service, from seed to bloom.
          </h1>
          <p className="mb-5 text-2xl font-bold">
            Get started with a $5 discount on your first cut! Schedule now and
            experience our cutting-edge service for yourself!
          </p>
          <button className="btn bg-[#afae81]">Schedule your services</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
