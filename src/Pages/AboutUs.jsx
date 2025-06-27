import React from "react";

const AboutUs = () => {
  return (
    <div className="py-12 w-11/12 mx-auto ">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#69af07]">
          About Plantera
        </h2>

        {/* Intro */}
        <p className=" mb-8 leading-relaxed">
          Plantera is your ultimate companion in the world of plants. Whether you're a seasoned gardener
          or just starting your plant journey, our platform is designed to make it easy to track, grow,
          and care for your favorite green friends.
        </p>

        {/* Mission & Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-[#69af07] mb-2">Our Mission</h3>
            <p className=" leading-relaxed">
              We believe that plants bring life, calm, and joy into our spaces. Plantera helps you organize
              and grow your personal plant collection by giving you insights, reminders, and inspiration—
              all in one place.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[#69af07] mb-2">What We Offer</h3>
            <ul className="list-disc list-inside  space-y-2">
              <li>Track and manage your plants effortlessly</li>
              <li>Detailed care instructions and reminders</li>
              <li>View community-contributed plant collections</li>
              <li>Organize by category, difficulty, and more</li>
            </ul>
          </div>
        </div>

        {/* Team or Vision */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-[#69af07] mb-2">Why Plantera?</h3>
          <p className=" leading-relaxed">
            We’re passionate about plants and technology. Plantera is built by a team of green thumbs and
            tech lovers who want to make plant care simple, engaging, and personalized for everyone.
          </p>
        </div>

        {/* Footer note */}
        <div className="mt-12 border-t border-[#69af07]/40 pt-6 text-sm ">
          &copy; {new Date().getFullYear()} Plantera. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
