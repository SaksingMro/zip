import { useEffect, useState } from "react";
import MemberForAbout from "../Home/Members/MemberForAbout";
const About = () => {
  return (
    <>
      <div class="w-full h-[300px] relative">
        <h1 class="absolute top-[37%] left-[41%] text-4xl uppercase font-bold text-white">
          About Us
        </h1>
        <img
          class="w-full h-full object-cover"
          src="https://i.ibb.co/GPBrF99/aboutus.png"
          alt="Banner"
        />
      </div>
<div class="max-w-[90%] mx-auto mb-10">
  <section class="mb-32 text-gray-800">
    <div class="flex flex-wrap mb-12 mt-16">
      <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
        <div class="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg"
          >
          <img src="https://mdbootstrap.com/img/new/standard/city/028.jpg" class="w-full" alt="Louvre" />
          <a href="#!">
            <div
              class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
              ></div>
          </a>
        </div>
      </div>

      <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6">
        <h3 class="text-2xl font-bold mb-4">That's the news!</h3>
        <p class="text-gray-500 mb-6">
          Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat vulputate. Ut
          vulputate est non quam dignissim elementum. Donec a ullamcorper diam.
        </p>
        <p class="text-gray-500 mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae nulla saepe rerum
          aspernatur odio amet perferendis tempora mollitia? Ratione unde magni omnis quaerat
          blanditiis cumque dolore placeat rem dignissimos?
        </p>
        <div class="grid grid-cols-2 gap-4">
  <div>
    <h3 class="text-1xl font-bold mb-2 sm-12">Our Mission</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea quae nulla saepe rerum aspernatur odio amet perferendis tempora mollitia </p>
  </div>
  <div>
  <h3 class="text-1xl font-bold mb-2">Our Vission</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae nulla saepe rerum aspernatur odio amet perferendis tempora mollitia</p>
  </div>
      </div>
      </div>
    </div>
  </section>
      {/* price page start */}
    <div class="flex flex-col text-center w-full mb-20">
      <p className="text-blue-600">REASON TO CHOOSE US</p>
      <h1 class="sm:text-5xl text-3xl font-medium title-font mb-2 text-gray-900">We provide truly prominent <br></br> IT solutions.</h1>
    </div>

    <div class="flex flex-wrap -m-4">
      <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
          <img src="https://i.ibb.co/Nn5Vbdw/WebDev.png" className="lg:w-[120px] mx-auto" alt="" />
          <h1 class="text-4xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">Software Development</h1>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="items-center justify-center ">
            </span>Our tech companies offer tailored solutions to design, develop and deliver high-quality software products that align wit...
          </p>
        </div>
      </div>
      <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
          <img src="https://i.ibb.co/NW2YDY1/cloud-Computing.png" className="lg:w-[120px] mx-auto" alt="" />
          <h1 class="text-4xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">Cyber Security</h1>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="items-center justify-center ">
            </span>Our tech companies offer comprehensive solutions to protect sensitive data, mitigate cyber threats, and safeguard digita...
          </p>
        </div>
      </div>
  <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
          <img src="https://i.ibb.co/NW2YDY1/cloud-Computing.png" className="lg:w-[120px] mx-auto" alt="" />
          <h1 class="text-4xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">IT Consulting</h1>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="items-center justify-center ">
            </span>Our tech companies provide expert guidance, assessment, and recommendations to optimize technology infrastructure, strea...
          </p>
        </div>
      </div>

      <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
         <img src="https://i.ibb.co/Nn5Vbdw/WebDev.png" className="lg:w-[120px] mx-auto" alt="" />
          <h1 class="text-4xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">Web Development</h1>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="items-center justify-center ">
            </span>Our tech companies provide custom-designed websites and web applications that cater to their unique requirements, enhanc...
          </p>
        </div>
      </div>
    </div>
    {/* next part start */}
    <div class="flex flex-wrap -m-4">
      <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
          <h2 class="text-sm tracking-widest title-font mb-1 font-medium"><img src="https://i.ibb.co/Yky09kT/Group-9.png" className="lg:w-[120px] mx-auto" alt="" /></h2>
          <h1 class="text-4xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">Digital Marketing</h1>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="items-center justify-center ">
            </span>Our tech companies offer strategic planning, execution, and optimization of online marketing campaigns to drive brand aw...
          </p>
        </div>
      </div>
      <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
          <h2 class="text-sm tracking-widest title-font mb-1 font-medium"><img src="https://i.ibb.co/pX6cLDF/Man.png" className="lg:w-[120px] mx-auto" alt="" /></h2>
          <h1 class="text-4xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">UI/UX Design</h1>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="items-center justify-center ">
            </span>Our tech companies provide innovative and intuitive user interface and experience designs that optimize user engagement,...
          </p>
        </div>
      </div>
  <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
          <img src="https://i.ibb.co/7Q2k2fs/mobile.png" className="lg:w-[120px] mx-auto" alt="" />
          <h1 class="text-4xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">Mobile App Development</h1>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="items-center justify-center ">
            </span>Our tech companies deliver customized and user-centric mobile applications that enhance brand visibility, engage users, ..
          </p>
        </div>
      </div>

      <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
         <img src="https://i.ibb.co/ZGFTnH3/Ecommerce.png" className="lg:w-[120px] mx-auto" alt="" />
          <h1 class="text-4xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">E-Commerce Solutions</h1>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="items-center justify-center ">
            </span>Our tech companies offer end-to-end expertise and technologies to build, optimize, and manage online stores, enabling se...
          </p>
        </div>
      </div>
    </div>
    {/* next part end */}
  <MemberForAbout />
    </div>
    </>
  );
};

export default About;
