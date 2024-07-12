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

export { HeroRIght, HeroLeft, HeroMobile };
