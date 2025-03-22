"use client";

import Image from "next/image";

export function TrustedBy() {
  const brands = [
    {
      name: "Bonafide Digital Marketing",
      logo: "https://ext.same-assets.com/1287963695/3476218896.svg",
    },
    {
      name: "Bonfire",
      logo: "https://ext.same-assets.com/1287963695/3660439616.svg",
    },
    {
      name: "Clearwater",
      logo: "https://ext.same-assets.com/1287963695/2629785647.svg",
    },
    {
      name: "Clix",
      logo: "https://ext.same-assets.com/1287963695/2684145769.svg",
    },
    {
      name: "Edge",
      logo: "https://ext.same-assets.com/1287963695/2359173861.svg",
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-xl md:text-2xl font-bold text-[#0c3861] mb-8">
          Trusted by over 7,000 growing agencies
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {brands.map((brand) => (
            <div key={brand.name} className="flex items-center justify-center">
              <Image
                src={brand.logo}
                alt={brand.name}
                width={120}
                height={40}
                className="h-8 w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
