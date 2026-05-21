import { useEffect } from "react";
import { useParams } from "react-router-dom";

const cities = {
  yukon: {
    name: "Yukon",
    slug: "yukon",
    headline: "Landscaping & Lawn Care in Yukon, OK",
    subheadline:
      "Serving Yukon homeowners with reliable, affordable lawn care — right in your neighborhood.",
    description:
      "Old Man Pham's Lawn Care is proud to serve Yukon, Oklahoma. Whether you're in a newer development off Czech Hall Road or an established neighborhood near downtown Yukon, we know that a well-maintained lawn makes all the difference. We bring the same hands-on care and attention to every yard in Yukon — no job too small.",
    nearbyNote:
      "We also serve the surrounding areas of Mustang, OKC, and Piedmont.",
    metaDescription:
      "Professional landscaping and lawn care in Yukon, OK. Old Man Pham's Lawn Care offers mowing, trimming, edging, flowerbed maintenance & more. Call 405-293-8795.",
  },
  edmond: {
    name: "Edmond",
    slug: "edmond",
    headline: "Landscaping & Lawn Care in Edmond, OK",
    subheadline:
      "Keeping Edmond lawns looking their best — from Deer Creek to Coffee Creek and everywhere in between.",
    description:
      "Edmond's beautiful neighborhoods deserve beautiful lawns. Old Man Pham's Lawn Care works with Edmond homeowners to maintain curb appeal all season long. From routine mowing and edging to flowerbed design, we handle the yard work so you can enjoy your property. We're local, reliable, and built on word-of-mouth in the Edmond community.",
    nearbyNote:
      "We also serve OKC, Yukon, and the surrounding north metro.",
    metaDescription:
      "Professional landscaping and lawn care in Edmond, OK. Old Man Pham's Lawn Care offers mowing, trimming, edging, flowerbed maintenance & more. Call 405-293-8795.",
  },
  "oklahoma-city": {
    name: "Oklahoma City",
    slug: "oklahoma-city",
    headline: "Landscaping & Lawn Care in Oklahoma City, OK",
    subheadline:
      "Local lawn care you can count on — serving OKC neighborhoods from the northwest side to the south.",
    description:
      "From Nichols Hills to Southside OKC, Old Man Pham's Lawn Care is here for Oklahoma City homeowners. We understand the unique challenges of maintaining a lawn in Oklahoma's climate — the heat, the wind, and everything in between. Our team shows up, does the work right, and leaves your yard looking great every time.",
    nearbyNote:
      "We serve all of OKC and the surrounding metro including Edmond, Moore, Norman, Yukon, and Mustang.",
    metaDescription:
      "Professional landscaping and lawn care in Oklahoma City, OK. Old Man Pham's Lawn Care offers mowing, trimming, edging, flowerbed maintenance & more. Call 405-293-8795.",
  },
  moore: {
    name: "Moore",
    slug: "moore",
    headline: "Landscaping & Lawn Care in Moore, OK",
    subheadline:
      "Dependable lawn care for Moore homeowners — we show up, do the work, and keep your yard looking great.",
    description:
      "Old Man Pham's Lawn Care is a trusted name for lawn care in Moore, Oklahoma. Moore families know the value of a clean, well-kept yard, and we're here to deliver that every week. Whether your lawn needs a fresh cut, precise edging, or a flowerbed makeover, we handle it all with care. We're proud to serve the Moore community and be your go-to landscaping service near home.",
    nearbyNote:
      "We also serve Norman, Midwest City, OKC, and Mustang.",
    metaDescription:
      "Professional landscaping and lawn care in Moore, OK. Old Man Pham's Lawn Care offers mowing, trimming, edging, flowerbed maintenance & more. Call 405-293-8795.",
  },
  norman: {
    name: "Norman",
    slug: "norman",
    headline: "Landscaping & Lawn Care in Norman, OK",
    subheadline:
      "Quality lawn care for Norman homeowners — from Campus Corner to the south side of town.",
    description:
      "Norman, Oklahoma is home to great neighborhoods — and great lawns don't happen by accident. Old Man Pham's Lawn Care serves Norman with the kind of careful, consistent work that keeps your yard looking sharp all season. We work with homeowners across Norman who want reliable service without the hassle. Boomer Sooner — and a clean yard.",
    nearbyNote:
      "We also serve Moore, Midwest City, and OKC.",
    metaDescription:
      "Professional landscaping and lawn care in Norman, OK. Old Man Pham's Lawn Care offers mowing, trimming, edging, flowerbed maintenance & more. Call 405-293-8795.",
  },
  mustang: {
    name: "Mustang",
    slug: "mustang",
    headline: "Landscaping & Lawn Care in Mustang, OK",
    subheadline:
      "Serving Mustang's growing community with reliable, professional lawn care.",
    description:
      "Mustang is one of the fastest-growing communities in the OKC metro — and with new homes come new lawns that need attention. Old Man Pham's Lawn Care is here to help Mustang homeowners establish and maintain beautiful yards from the start. We offer regular mowing, edging, trimming, and flowerbed services to keep your property looking its best year-round.",
    nearbyNote:
      "We also serve Yukon, OKC, and the surrounding southwest metro.",
    metaDescription:
      "Professional landscaping and lawn care in Mustang, OK. Old Man Pham's Lawn Care offers mowing, trimming, edging, flowerbed maintenance & more. Call 405-293-8795.",
  },
};

const services = [
  "Lawn Mowing",
  "Trimming",
  "Edging",
  "Leaf Blowing",
  "Flowerbed Maintenance & Design",
];

export default function LocationPage() {
  const { city } = useParams();
  const data = cities[city];

  useEffect(() => {
    if (!data) return;
    const baseUrl = "https://www.oldmanphamslawncare.com";
    const pageUrl = `${baseUrl}/landscaping/${data.slug}`;

    document.title = `${data.name} Landscaping & Lawn Care | Old Man Pham's`;

    const setOrCreate = (selector, creator, apply) => {
      let el = document.querySelector(selector);
      if (!el) { el = creator(); document.head.appendChild(el); }
      apply(el);
      return el;
    };

    const metaDesc = setOrCreate('meta[name="description"]', () => Object.assign(document.createElement("meta"), { name: "description" }), el => { el.content = data.metaDescription; });
    const canonical = setOrCreate('link[rel="canonical"]', () => Object.assign(document.createElement("link"), { rel: "canonical" }), el => { el.href = pageUrl; });
    const ogTitle = setOrCreate('meta[property="og:title"]', () => Object.assign(document.createElement("meta"), { setAttribute: () => {} }), el => { el.setAttribute("property", "og:title"); el.content = `${data.name} Landscaping & Lawn Care | Old Man Pham's`; });
    const ogDesc = setOrCreate('meta[property="og:description"]', () => document.createElement("meta"), el => { el.setAttribute("property", "og:description"); el.content = data.metaDescription; });
    const ogUrl = setOrCreate('meta[property="og:url"]', () => document.createElement("meta"), el => { el.setAttribute("property", "og:url"); el.content = pageUrl; });

    const schema = {
      "@context": "https://schema.org",
      "@type": "LandscapingBusiness",
      "name": "Old Man Pham's Lawn Care",
      "url": baseUrl,
      "telephone": "+14052938795",
      "description": data.metaDescription,
      "areaServed": { "@type": "City", "name": data.name, "addressRegion": "OK" },
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "location-schema";
    script.textContent = JSON.stringify(schema);
    document.querySelector("#location-schema")?.remove();
    document.head.appendChild(script);

    return () => {
      document.title = "Old Man Pham's Lawn Care";
      canonical.href = `${baseUrl}/`;
      metaDesc.content = "Professional lawn care and landscaping in the OKC metro. Serving Yukon, Edmond, Oklahoma City, Moore, Norman, and Mustang, OK.";
      document.querySelector("#location-schema")?.remove();
    };
  }, [data]);

  if (!data) {
    return (
      <div className="p-12 text-center text-[#4b5717]">
        404 - Page Not Found
      </div>
    );
  }

  return (
    <div className="bg-[#f6f6eb] text-[#4b5717]">
      {/* Hero */}
      <div
        className="min-h-[40vh] flex flex-col justify-end"
        style={{
          backgroundImage: "url(/grassy.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "bottom center",
        }}
      >
        <div className="bg-black/50 w-full">
          <div className="max-w-4xl mx-auto px-6 py-10 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              {data.headline}
            </h1>
            <p className="text-xl md:text-2xl font-semibold mb-6">
              {data.subheadline}
            </p>
            <a href="tel:405-293-8795">
              <button className="btn bg-[#afae81] text-black border-none text-lg px-6">
                Call for a Free Quote — 405-293-8795
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* About section */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-4">
          Your Local Landscaping Company in {data.name}
        </h2>
        <div className="border-b-2 mb-6" />
        <p className="text-lg leading-relaxed mb-4">{data.description}</p>
        <p className="text-base text-[#6b7a1e] italic">{data.nearbyNote}</p>
      </div>

      {/* Services */}
      <div className="bg-[#4b5717] text-white px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Lawn Care Services in {data.name}, OK
          </h2>
          <div className="border-b-2 border-white/30 mb-8" />
          <div className="grid md:grid-cols-2 gap-4">
            {services.map((service) => (
              <div
                key={service}
                className="flex items-center gap-3 bg-white/10 rounded-lg px-5 py-4"
              >
                <span className="text-[#afae81] text-xl">✓</span>
                <span className="text-lg font-semibold">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why choose us */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-4">
          Why {data.name} Homeowners Choose Old Man Pham's
        </h2>
        <div className="border-b-2 mb-6" />
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-4xl mb-3">🌱</div>
            <h3 className="font-bold text-xl mb-2">Locally Owned</h3>
            <p>
              We're an OKC-area small business, not a national franchise. You
              work directly with us every time.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-4xl mb-3">📅</div>
            <h3 className="font-bold text-xl mb-2">Reliable Service</h3>
            <p>
              We show up when scheduled and do the job right — no surprises, no
              excuses.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-4xl mb-3">💵</div>
            <h3 className="font-bold text-xl mb-2">Fair Pricing</h3>
            <p>
              Straightforward rates with no hidden fees. New customers get $5
              off their first cut.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#afae81] px-6 py-12 text-center">
        <h2 className="text-3xl font-bold text-[#4b5717] mb-3">
          Ready to get started in {data.name}?
        </h2>
        <p className="text-lg text-[#4b5717] mb-6">
          Call us today for a free quote. New customers get $5 off their first
          cut!
        </p>
        <a href="tel:405-293-8795">
          <button className="btn bg-[#4b5717] text-white border-none text-xl px-8 py-3 h-auto">
            Call 405-293-8795
          </button>
        </a>
      </div>
    </div>
  );
}
