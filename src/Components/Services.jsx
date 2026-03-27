import React from "react";

const services = [
  { name: "Lawn Mowing", icon: "✂️" },
  { name: "Trimming", icon: "🌿" },
  { name: "Edging", icon: "📏" },
  { name: "Leaf Blowing", icon: "🍃" },
  { name: "Flowerbed Maintenance & Design", icon: "🌸" },
  { name: "Ponds", icon: "💧" },
];

const Services = () => {
  return (
    <section className="py-20 bg-[#f6f6eb]" id="services">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#4b5717] mb-4">
          Services
        </h2>
        <div className="w-24 h-1 bg-[#afae81] mx-auto mb-12 rounded-full"></div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[#4b5717]"
                >
                  <span className="text-2xl mb-2 block">{service.icon}</span>
                  <span className="font-semibold text-[#4b5717]">{service.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="garden.jpg"
              alt="Professional garden maintenance"
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
