"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";

const Portofolio = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Content Section */}
      <div className="col-span-1 lg:col-span-7 px-6">
        <section>
          {/* Heading with Gradient Text */}
          <h1 className="text-center sm:text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500">
              Hello, I'm
            </span>{" "}
            <TypeAnimation
              sequence={[
                'Kenneth Poenadi',
                1000,
                'Studying in Institut Teknologi Bandung',
                1000,
                'Web Developer',
                1000,
                'Informatics Engineer',
                1000
              ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
          </h1>
          {/* Description Paragraph */}
          <p className="text-[#ADB7BE] mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </section>
        {/* Button Section */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Button className="w-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white border border-white hover:bg-slate-800">
            Hire Me!
          </Button>
          <Button className="w-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white border border-white hover:bg-slate-800">
            Contact Me!
          </Button>
        </div>
      </div>

      {/* Image Section */}
      <div className="col-span-1 lg:col-span-5 flex justify-center lg:justify-evenly mt-4">
        <div className="relative w-full max-w-xs sm:max-w-md lg:max-w-lg aspect-[16/9] bg-[#181818] rounded-lg overflow-hidden">
          <Image
            src="/gambar.jpeg"
            layout="fill"
            objectFit="cover"
            alt="Kenneth Poenadi's portfolio"
          />
        </div>
      </div>
    </div>
  );
}

export default Portofolio;
