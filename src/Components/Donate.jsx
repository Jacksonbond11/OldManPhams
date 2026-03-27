import React from "react";

const Donate = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-[#4b5717] mb-4">
          Sustainability
        </h2>
        <div className="w-24 h-1 bg-[#afae81] mx-auto mb-8 rounded-full"></div>
        
        <div className="bg-[#f6f6eb] rounded-2xl shadow-lg p-8 md:p-10">
          <p className="text-lg text-[#4b5717] leading-relaxed">
            At Old Man Pham's Lawn Care, we're not just about keeping your lawn and
            garden looking great — we're also committed to protecting the planet. We
            donate 1% of all our revenue to initiatives that actively remove CO2
            from the atmosphere, helping to reduce the impact of climate change. By
            choosing us, you're not only supporting a local business but also
            contributing to a greener, healthier future.{" "}
            <a 
              href="https://stripe.com/climate" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#afae81] hover:text-[#8a8a65] underline font-medium"
            >
              Learn more
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Donate;
