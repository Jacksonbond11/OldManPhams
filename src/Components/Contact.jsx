import React, { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xgoraqao", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-20 bg-[#f6f6eb]" id="contact">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-[#4b5717] mb-4">
          Contact
        </h2>
        <div className="w-24 h-1 bg-[#afae81] mx-auto mb-8 rounded-full"></div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-[#4b5717] mb-6">
            Get your lawn cared for today!
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4 text-left max-w-lg mx-auto">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-black mb-1">Name</label>
              <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4b5717] focus:ring-2 focus:ring-[#4b5717]/20 outline-none transition text-black" />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-black mb-1">Phone Number</label>
              <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4b5717] focus:ring-2 focus:ring-[#4b5717]/20 outline-none transition text-black" />
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-black mb-1">Address</label>
              <input type="text" id="address" name="address" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4b5717] focus:ring-2 focus:ring-[#4b5717]/20 outline-none transition text-black" />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-black mb-1">What needs to be done?</label>
              <textarea id="description" name="description" rows={4} required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4b5717] focus:ring-2 focus:ring-[#4b5717]/20 outline-none transition resize-none text-black"></textarea>
            </div>

            <button type="submit" disabled={status === "sending"} className="w-full px-8 py-4 bg-[#4b5717] text-white font-bold rounded-full text-lg hover:bg-[#3a4612] transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed">
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-600 text-center font-medium">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-600 text-center font-medium">Something went wrong. Please try again.</p>
            )}
          </form>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-[#4b5717] mb-4">Or call us directly:</p>
            <a href="tel:405-293-8795" className="inline-flex items-center gap-3 px-8 py-4 bg-[#afae81] text-[#4b5717] font-bold rounded-full text-lg hover:bg-[#8a8a65] transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.22 16.88c-.68-.51-1.88-1.01-4.26-1.44-2.12-.39-4.34-.39-6.44 0-2.12.39-3.58 1.01-4.68 1.44-.68.26-1.11.77-1.11 1.33v1.56c0 .56.51 1.07 1.11 1.33 1.37.51 3.06 1.01 5.44 1.44 2.12.39 4.34.39 6.44 0 2.12-.39 3.58-1.01 4.68-1.44.68-.26 1.11-.77 1.11-1.33v-1.56c0-.56-.43-1.07-1.11-1.33z"/>
                <path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              </svg>
              405-293-8795
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
