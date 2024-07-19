import React from "react";
import * as Hero from "../body";

const HeroSection = () => {
  return (
    <>
      <main className="flex container relative justify-between items-center">
        <Hero.HeroLeft />
        <Hero.HeroRIght />
      </main>
      <Hero.HeroMobile />
      <Hero.Solution />
      <Hero.HowSection />
      <Hero.Expertise />
      <Hero.StackSection />
      <Hero.Framework />
      <main className="flex container relative justify-between items-center">
        <Hero.ContactUs />
        <Hero.contactUsRight />
      </main>
    </>
  );
};

export { HeroSection };
