/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

const Contact = () => {
    return (
<>
<div class="w-full h-[300px] relative">
        <h1 class="absolute top-[37%] left-[41%] text-4xl uppercase font-bold text-white">
          Get in touch
        </h1>
        <img
          class="w-full h-full object-cover"
          src="https://i.ibb.co/zRbvgPF/contactus.png"
          alt="Banner"
        />
      </div>
<div class="max-w-[90%] mx-auto mb-10">
  <div class="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-4 lg:gap-8">
    <a class="flex flex-col h-full text-center rounded-md bg-gray-100 hover:bg-gray-200 p-4 sm:p-6 dark:hover:bg-white/[.05]" href="#">
      <img src="https://i.ibb.co/R6wRM9g/phone-call.png" className="w-[80px]  mx-auto" alt="" />
      <div class="grow">
        <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200">Give us a call</h3>
        <p class="mt-1 text-gray-500">(+1) 400-630 123</p>
        <p class="mt-1 text-gray-500">(+1) 400-630 123</p>
      </div>
    </a>
    <a class="flex flex-col h-full text-center rounded-md bg-gray-100 hover:bg-gray-200 p-4 sm:p-6 dark:hover:bg-white/[.05]" href="#">
      <img src="https://i.ibb.co/6Dhnq8C/location.png" className="w-[80px] mx-auto" alt="" />
      <div class="grow">
        <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200">Visit our office</h3>
        <p class="mt-1 text-gray-500">Bandarban, Chittagong, Bangladesh</p>
      </div>
    </a>
    <a class="flex flex-col h-full text-center rounded-md bg-gray-100 hover:bg-gray-200 p-4 sm:p-6 dark:hover:bg-white/[.05]" href="#">
      <img src="https://i.ibb.co/t8r8v0h/gmail.png" className="w-[80px] mx-auto" alt="" />
      <div class="grow">
        <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200">Drop us a line</h3>
        <p class="mt-1 text-gray-500">info@techwix-theme.com</p>
        <p class="mt-1 text-gray-500">info@techwix-theme.com</p>
      </div>
    </a>
  </div>
  <div class="lg:w-[60%] sm:w-[100%] mt-24 mx-auto">
    <div class="text-left flex flex-col border rounded-xl p-4 sm:p-6 ">
      <h2 class="mb-8 text-xl font-semibold text-gray-800 dark:text-gray-200">
        Fill in the form
      </h2>

      <form>
        <div class="grid gap-4 lg:gap-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <label for="#" class="block text-sm text-gray-700 font-medium dark:text-white">Full Name</label>
              <input type="text" name="" id="#" class="py-3 px-4 block w-full border-gray-300 border-blue border rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"></input>
            </div>
            <div>
              <label for="hs-phone-number-1" class="block text-sm text-gray-700 font-medium dark:text-white">Phone Number</label>
              <input type="text" name="#" id="#" class="py-3 px-4 block w-full border-gray-300 border rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"></input>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-1 gap-4 lg:gap-6">
          <div>
              <label for="#" class="block text-sm text-gray-700 font-medium dark:text-white">Email</label>
              <input type="email" name="#" id="#" autocomplete="email" class="py-3 px-4 block w-full border-gray-300 rounded-md text-sm focus:border-blue-500 border focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"></input>
            </div>
          </div>

          <div>
            <label for="#" class="block text-sm text-gray-700 font-medium dark:text-white">Message</label>
            <textarea id="#" name="#" rows="4" class="py-3 px-4 block w-full border-gray-500 rounded-md text-sm focus:border-blue-300 border focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"></textarea>
          </div>
        </div>
        <div class="mt-6 grid">
          <button type="submit" class="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800">Send</button>
        </div>
      </form>
    </div>
  </div>
</div>
</>
    );
};

export default Contact;