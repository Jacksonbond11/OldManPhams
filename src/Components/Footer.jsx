import React from "react";

const serviceAreas = [
  { name: "Yukon, OK", slug: "yukon" },
  { name: "Edmond, OK", slug: "edmond" },
  { name: "Oklahoma City, OK", slug: "oklahoma-city" },
  { name: "Moore, OK", slug: "moore" },
  { name: "Norman, OK", slug: "norman" },
  { name: "Mustang, OK", slug: "mustang" },
];

const Footer = () => {
  return (
    <footer className="bg-[#4b5717] text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex items-center gap-4">
            <img src="TaiLogo.jpg" className="h-20 rounded-lg" alt="Old Man Pham's Lawn Care" />
            <div>
              <h3 className="text-xl font-bold">Old Man Pham's Lawn Care</h3>
              <p className="text-white/70">Providing lawncare services since 2025</p>
            </div>
          </div>
          <div className="flex gap-12">
            <div>
              <h6 className="font-bold text-white/90 mb-3 uppercase text-sm tracking-wider">Quick Links</h6>
              <div className="flex flex-col gap-2">
                <a href="/#services" className="text-white/70 hover:text-white transition-colors">Services</a>
                <a href="/#contact" className="text-white/70 hover:text-white transition-colors">Contact</a>
                <a href="/blog" className="text-white/70 hover:text-white transition-colors">Blog</a>
              </div>
            </div>
            <div>
              <h6 className="font-bold text-white/90 mb-3 uppercase text-sm tracking-wider">Service Areas</h6>
              <div className="flex flex-col gap-2">
                {serviceAreas.map((area) => (
                  <a
                    key={area.slug}
                    href={`/landscaping/${area.slug}`}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {area.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/50 text-sm">
          &copy; 2025 Old Man Pham's Lawn Care. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
