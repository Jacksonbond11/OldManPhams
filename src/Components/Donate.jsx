import React from "react";

const Donate = () => {
  return (
    <div className="mt-2 bg-[#f6f6eb] text-[#4b5717] p-12">
      <h1 className="text-3xl font-bold m-auto text-center">Sustainability</h1>
      <div className="border-b-2"></div>
      <p>
        At Old Man Pham's Lawn Care, we’re not just about keeping your lawn and
        garden looking great — we’re also committed to protecting the planet. We
        donate 1% of all our revenue to initiatives that actively remove CO2
        from the atmosphere, helping to reduce the impact of climate change. By
        choosing us, you're not only supporting a local business but also
        contributing to a greener, healthier future. To learn more, please see{" "}
        <a href="https://stripe.com/climate">https://stripe.com/climate</a> for
        more details.
      </p>
    </div>
  );
};

export default Donate;
