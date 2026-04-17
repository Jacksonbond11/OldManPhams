import React, { useState } from "react";

const photos = [
  { src: "/image.png", alt: "Gallery Image 1" },
  { src: "/image4.png", alt: "Gallery Image 2" },
  { src: "/image2.png", alt: "Gallery Image 3" },
  { src: "/image3.png", alt: "Gallery Image 4" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-20 bg-white" id="gallery">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#4b5717] mb-4">
          Our Work
        </h2>
        <div className="w-24 h-1 bg-[#afae81] mx-auto mb-12 rounded-full"></div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg sm:rounded-xl shadow-md sm:shadow-lg cursor-pointer group"
              onClick={() => setSelectedImage(photo)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-32 sm:h-48 lg:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;