"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "iconsax-react";

const HeroLeft = () => {
  return (
    <section className="lg:flex hidden flex-col lg:w-[730px] lg:h-[430px] mt-5  bg-white lg:absolute lg:rounded-tr-[100px] py-5">
      <div className="flex z-10 flex-col my-auto w-full">
        <h1 className="lg:text-4xl md:text-2xl text-xl font-semibold text-brand-blue font-unica">
          Network Technology Solution For All
        </h1>
        <p className="mt-12 text-2xl text-blue-950 font-poppins">
          Aspace Network and Technology Limited is a technology firm
          specializing in developing and delivering cutting-edge technology
          solutions for businesses and organizations. With a proven track record
          of delivering innovative and scalable software applications.
        </p>
        <Button asChild className="w-[201px] h-[56px] mt-5 flex gap-1">
          <Link href="/">
            Contact us
            <ArrowRight />
          </Link>
        </Button>
      </div>
    </section>
  );
};

const HeroRIght = () => {
  return (
    <section className="flex justify-end w-full">
      <Image
        src="/hero.png"
        alt="hero-right"
        width={999}
        height={721}
        className="object-cover w-full h-full rounded-md hidden lg:block max-w-[58%]"
      />
    </section>
  );
};

const HeroMobile = () => {
  return (
    <section className="flex flex-col w-full items-center justify-center lg:hidden">
      <Image
        src="/hero-sm.png"
        alt="hero-right"
        width={412}
        height={216}
        className="object-cover w-full"
      />
      <div className="mt-4 container text-center flex flex-col items-center">
        <h2 className="text-brand-blue text-2xl font-bold font-unica">
          Network Technology Solution For All
        </h2>
        <p className=" text-blue-950 font-poppins text-base font-medium mt-4">
          Aspace Network and Technology Limited is a technology firm
          specializing in developing and delivering cutting-edge technology
          solutions for businesses and organizations. With a proven track record
          of delivering innovative and scalable software applications.
        </p>
        <Button asChild className="w-[201px] h-[56px] mt-5 flex gap-1">
          <Link href="/">
            Contact us
            <ArrowRight />
          </Link>
        </Button>
      </div>
    </section>
  );
};

const Solution = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-2 container mt-10">
      <div className="flex gap-1">
        <div className="flex items-center justify-center p-2 bg-brand-blue h-[80px] w-[80px]">
          <Image
            src="/cube1.png"
            alt="solution-1"
            width={70}
            height={70}
            className="object-cover h-[70px] w-[70px] rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-brand-blue text-xl font-bold font-unica">
            Architect your Solution
          </h3>
          <p className="text-base">
            Our team in on your operational, technological, and strategic
            challenges through an in-depth understanding of your business. We
            design a strategic roadmap to guide your result-oriented goals.
          </p>
        </div>
      </div>
      <div className="flex gap-1">
        <div className="flex items-center justify-center p-2 bg-brand-blue h-[80px] w-[80px]">
          <Image
            src="/cube2.png"
            alt="solution-1"
            width={70}
            height={70}
            className="object-cover h-[70px] w-[70px] rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-brand-blue text-xl font-bold font-unica">
            Engineer your Solution
          </h3>
          <p className="text-base">
            We promptly put together your nearshore engineering dream team to
            fulfill your specific requirements. We create the most elegant
            solution for your difficulties by combining our deep tech expertise,
            Top 1% Tech Talent, and industry-specific experience.
          </p>
        </div>
      </div>
      <div className="flex gap-1">
        <div className="flex items-center justify-center p-2 bg-brand-blue h-[80px] w-[80px]">
          <Image
            src="/cube3.png"
            alt="solution-1"
            width={70}
            height={70}
            className="object-cover h-[70px] w-[70px] rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-brand-blue text-xl font-bold font-unica">
            ReEngineer your Business Process
          </h3>
          <p className="text-base">
            Bolster by our team, your digital transformation swiftly gains speed
            and evolves into a digital acceleration. This process places the
            foundation for a more efficient and strong business that can meet
            demands at scale.
          </p>
        </div>
      </div>
    </div>
  );
};

export { HeroRIght, HeroLeft, HeroMobile, Solution };
