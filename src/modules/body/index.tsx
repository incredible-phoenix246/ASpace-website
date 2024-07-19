"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "iconsax-react";
import * as Icon from "@/components/icons";
import { cn } from "@/utils";

interface StackCardProps {
  iconSrc: string;
  title: string;
  id: number;
}

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
    <div className="flex flex-col md:flex-row md:flex-wra items-center justify-center gap-2 container mt-10">
      <div className="flex gap-2">
        <div className="flex items-center justify-center p-2 bg-brand-blue min-h-[80px] min-w-[80px] max-h-[80px]  rounded-lg">
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
      <div className="flex gap-2">
        <div className="flex items-center justify-center p-2 bg-brand-main min-h-[80px] min-w-[80px] max-h-[80px]  rounded-lg">
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
      <div className="flex gap-2">
        <div className="flex items-center justify-center p-2 bg-brand-blue min-h-[80px] min-w-[80px] max-h-[80px]  rounded-lg">
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

const HowSection = () => {
  return (
    <section className="bg-brand-main">
      <section className="flex flex-col items-center justify-center  mt-[50px] py-3  [background:var (--red,_linear-gradient(90deg,_#ec5f6c_0%_#be1e2d_100%))] [box-shadow:0px_4px_16px_0px_rgba(0_0_0_0.06)] w-full container">
        <div className="flex flex-col gap-4 items-center text-center">
          <h2 className="text-brand-blue text-xl font-bold font-unica">
            How to Start
          </h2>
          <h3 className="text-brand-white text-4xl font-semibold">
            Easy Process
          </h3>
          <p className="text-brand-white text-lg font-poppins lg:w-[80%]">
            We specialize in helping you build a team of expert developers,
            testers, and leaders.
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-between w-full py-3">
          <div className="flex flex-col items-center gap-2">
            <Icon.Message />
            <div className="flex gap-2 items-center justify-center">
              <h1 className="text-brand-blue text-4xl font-bold font-worksans">
                01
              </h1>
              <h3 className="text-brand-blue text-xl font-bold font-unica">
                YOU ASK
              </h3>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Icon.Settings />
            <div className="flex gap-2 items-center justify-center">
              <h1 className="text-brand-blue text-4xl font-bold font-worksans">
                02
              </h1>
              <h3 className="text-brand-blue text-xl font-bold font-unica">
                WE PROCEED
              </h3>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Icon.HandShake />
            <div className="flex gap-2 items-center justify-center">
              <h1 className="text-brand-blue text-4xl font-bold font-worksans">
                03
              </h1>
              <h3 className="text-brand-blue text-xl font-bold font-unica">
                Negotiate
              </h3>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Icon.Medal />
            <div className="flex gap-2 items-center justify-center">
              <h1 className="text-brand-blue text-4xl font-bold font-worksans">
                04
              </h1>
              <h3 className="text-brand-blue text-xl font-bold font-unica">
                YOU GET
              </h3>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

const Expertise = () => {
  return (
    <section className="container flex flex-col py-10 text-center md:text-start gap-2 md:gap-4 items-center justify-center lg:items-start">
      <h2 className="text-lg md:text-2xl font-unica font-semibold">
        Expertise
      </h2>
      <h2 className="text-2xl md:text-4xl lg:w-[50%] font-bold text-brand-blue font-worksans">
        Hire Permanent and Remote Developers
      </h2>
      <p className="text-sm md:text-balance lg:w-[40%] font-poppins">
        From full-time remote engineering teams to hourly contractors, work with
        remote devs as needed
      </p>
      <div className="flex flex-wrap lg:flex-row items-center justify-between place-content-center mt-5 gap-2">
        <div className="flex flex-col gap-1.5 w-[357px] items-center justify-center">
          <div className="flex items-center justify-center p-2 bg-brand-main min-h-[80px] min-w-[80px] max-w-[80px] max-h-[80px] rounded-lg">
            <Image
              src="/link1.png"
              alt="solution-1"
              width={70}
              height={70}
              className="object-cover h-[70px] w-[70px] rounded-md"
            />
          </div>
          <h2 className="text-2xl font-raleway text-brand-blue font-bold">
            Dedicated Teams
          </h2>
          <span className="text-xs md:text-sm">Find your next team member</span>
        </div>
        <div className="flex flex-col gap-1.5 w-[357px] items-center justify-center">
          <div className="flex items-center justify-center p-2 bg-brand-blue min-h-[80px] min-w-[80px] max-w-[80px] max-h-[80px] rounded-lg">
            <Image
              src="/link2.png"
              alt="solution-1"
              width={70}
              height={70}
              className="object-cover h-[70px] w-[70px] rounded-md"
            />
          </div>
          <h2 className="text-2xl font-raleway text-brand-blue font-bold">
            Staff Augmentation
          </h2>
          <span className="text-xs md:text-sm">
            Build a distributed development team
          </span>
        </div>
        <div className="flex flex-col gap-1.5 w-[357px] items-center justify-center">
          <div className="flex items-center justify-center p-2 bg-brand-main min-h-[80px] min-w-[80px] max-w-[80px] max-h-[80px] rounded-lg">
            <Image
              src="/link3.png"
              alt="solution-1"
              width={70}
              height={70}
              className="object-cover h-[70px] w-[70px] rounded-md"
            />
          </div>
          <h2 className="text-2xl font-raleway text-brand-blue font-bold">
            Software Outsourcing
          </h2>
          <span className="text-xs md:text-sm">
            End-to-End Software Development Outsourcing Solutions
          </span>
        </div>
        <div className="flex flex-col gap-1.5 w-[357px] items-center justify-center">
          <div className="flex items-center justify-center p-2 bg-brand-blue min-h-[80px] min-w-[80px] max-w-[80px] max-h-[80px] rounded-lg">
            <Image
              src="/link4.png"
              alt="solution-1"
              width={70}
              height={70}
              className="object-cover h-[70px] w-[70px] rounded-md"
            />
          </div>
          <h2 className="text-2xl font-raleway text-brand-blue font-bold">
            Remote Office
          </h2>
          <span className="text-xs md:text-sm">
            Open your own remote development center and grow your business
          </span>
        </div>
      </div>
    </section>
  );
};

const StackCard = ({ title, iconSrc }: StackCardProps) => {
  return (
    <div className="flex gap-5 bg-brand-white rounded-xl shadow-sm">
      <div className="flex gap-5">
        <div className="shrink-0 bg-brand-blue rounded-xl shadow-sm h-[93px] w-[13px]" />
        <Image
          src={`${iconSrc}`}
          alt=""
          width={52}
          height={52}
          className="shrink-0 my-auto aspect-square w-[52px]"
        />
      </div>
      <div className="flex-auto my-auto text-lg font-semibold text-blue-950">
        {title}
      </div>
    </div>
  );
};

export const stackData = [
  { id: 1, iconSrc: "/stack1.png", title: "Frontend Engineers" },
  { id: 2, iconSrc: "/stack2.png", title: "Angular Developers" },
  {
    id: 3,
    iconSrc: "/stack3.png",
    title: "AI and ML Engineers Deep Learning/Machine Vision/NLP",
  },
  { id: 4, iconSrc: "/stack4.png", title: "Application Security Engineers" },
  { id: 5, iconSrc: "/stack5.png", title: "Fullstack Engineers" },
  { id: 6, iconSrc: "/stack6.png", title: "DevOps + DevSecOps Engineers" },
  { id: 7, iconSrc: "/stack7.png", title: "Data Scientist / Data Engineers" },
  { id: 8, iconSrc: "/stack8.png", title: "IOS and Android Developers" },
  { id: 9, iconSrc: "/stack9.png", title: "UI/UX Engineers" },
  { id: 10, iconSrc: "/stack10.png", title: "PHP Developers" },
  { id: 11, iconSrc: "/stack11.png", title: "Project Managers" },
  { id: 12, iconSrc: "/stack12.png", title: "Solution Architects" },
  { id: 13, iconSrc: "/stack13.png", title: "QA Engineers" },
  { id: 14, iconSrc: "/stack14.png", title: "Wordpress CMS Developers" },
  { id: 15, iconSrc: "/stack15.png", title: "Business Analyst" },
  { id: 16, iconSrc: "/stack16.png", title: "Tech Leads / Team Leads" },
  { id: 17, iconSrc: "/stack17.png", title: "Product Designer" },
  { id: 18, iconSrc: "/stack18.png", title: "Mobile App Developers" },
  { id: 19, iconSrc: "/stack19.png", title: "Information Security Engineers" },
  { id: 20, iconSrc: "/stack20.png", title: "Golang Dev" },
  { id: 21, iconSrc: "/stack21.png", title: "Database Admin" },
];

const StackSection = () => {
  return (
    <section className="flex justify-center items-center container py-20 max-md:px-5">
      <div className="flex flex-col mt-4 w-full">
        <h2 className="text-2xl font-semibold text-blue-900 max-md:max-w-full">
          Specialized
        </h2>
        <h1 className="mt-10 text-5xl font-semibold text-blue-900 leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[57px]">
          Specialized Staff We Provide
        </h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 mt-14 grid-cols-1 max-md:mt-10">
          {stackData.map((da) => (
            <StackCard key={da.id} {...da} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Framework = () => {
  return (
    <section className="flex flex-col container items-center justify-center w-full py-10 md:py-20">
      <div className="flex flex-col items-center w-full justify-center gap-3">
        <h2 className="text-lg md:text-2xl font-unica font-semibold">
          Specialized
        </h2>
        <h2 className="text-2xl md:text-4xl font-bold text-brand-blue font-worksans">
          Technologies
        </h2>
      </div>
      <div className="mt-6 flex flex-wrap w-full items-center justify-between">
        <Image src="/framework1.png" alt="framework" width={213} height={71} />
        <Image src="/framework2.png" alt="framework" width={232} height={57} />
        <Image src="/framework3.png" alt="framework" width={148} height={81} />
        <Image src="/framework4.png" alt="framework" width={171} height={94} />
      </div>
    </section>
  );
};

const ContactUs = () => {
  return (
    <section className="lg:flex hidden flex-col mt-5 lg:absolute lg:rounded-tl-[100px] py-5 justify-end items-end">
      <div className="flex z-10 flex-col my-auto w-full justify-end md:w-[50%] p-[3%] lg:rounded-tl-[100px]  bg-brand-white">
        <h1 className="lg:text-4xl md:text-2xl text-xl font-semibold text-brand-blue font-unica">
          Connect With Your Next Great Hire Today!Connect With Your Next Great
          Hire Today!
        </h1>
        <div className="flex flex-col w-full mt-5">
          <div className="flex gap-1">
            <div className="w-full flex-col justify-start items-start gap-1.5 flex">
              <label
                htmlFor=""
                className="flex gap-1 items-center text-[#0F172A] text-base font-medium leading-relaxed"
              >
                Company
              </label>
              <input
                type="text"
                className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex h-[56px]"
                placeholder="Company"
              />
            </div>
            <div className="w-full flex-col justify-start items-start gap-1.5 flex">
              <label
                htmlFor=""
                className="flex gap-1 items-center text-[#0F172A] text-base font-medium leading-relaxed"
              >
                Your Name
              </label>
              <input
                type="text"
                className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex h-[56px]"
                placeholder="Name"
              />
            </div>
          </div>
          <div className="flex gap-1">
            <div className="w-full flex-col justify-start items-start gap-1.5 flex">
              <label
                htmlFor=""
                className="flex gap-1 items-center text-[#0F172A] text-base font-medium leading-relaxed"
              >
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex h-[56px]"
                placeholder="(234) 123 456 789"
              />
            </div>
            <div className="w-full flex-col justify-start items-start gap-1.5 flex">
              <label
                htmlFor=""
                className="flex gap-1 items-center text-[#0F172A] text-base font-medium leading-relaxed"
              >
                Email
              </label>
              <input
                type="email"
                className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex h-[56px]"
                placeholder="Name"
              />
            </div>
          </div>
          <div className="w-full flex-col justify-start items-start gap-1.5 flex">
            <label
              htmlFor=""
              className="flex gap-1 items-center text-[#0F172A] text-base font-medium leading-relaxed"
            >
              Project Details
            </label>
            <textarea
              className="w-full  md:h-[200px] h-[150px] resize-none p-4"
              placeholder="project title"
            />
          </div>
        </div>
        <button
          className={cn(
            "rounded-lg bg-brand-blue mt-5 text-white min-[450px]:w-[178px] min-[450px]:h-[56px] h-[40px] px-2 max-[450px]:px-4 text-base hover:opacity-80 transition-opacity duration-300 disabled:cursor-not-allowed disabled:opacity-40 font-medium dark:text-gray-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-light"
          )}
        >
          GET CONSULTATION
        </button>
      </div>
    </section>
  );
};

const contactUsRight = () => {
  return (
    <section className="flex justify-start w-full">
      <Image
        src="/contact.png"
        alt="hero-right"
        width={1000}
        height={992}
        className="object-cover w-full h-full rounded-md hidden lg:block max-w-[58%]"
      />
    </section>
  );
};

export {
  HeroRIght,
  HeroLeft,
  HeroMobile,
  Solution,
  HowSection,
  Expertise,
  StackSection,
  Framework,
  ContactUs,
  contactUsRight,
};
