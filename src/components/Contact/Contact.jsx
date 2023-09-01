import React from 'react';
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import { motion, useScroll,useSpring } from "framer-motion";

export default function Contact() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
	useEffect(() => {
    Aos.init();
		document.title="IETE - Contact";
		 });

  
  return (
	<section class="text-gray-600 body-font relative">
    <motion.div
        className="progress-bar fixed top-0 left-0 right-0 h-[5px] bg-red-600 z-50 origin-[0%] "
        style={{ scaleX: scaleX }}
      />
  <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
     
	  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15547.184041300827!2d80.24595100448447!3d13.048652685200357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52663840000007%3A0x599fdc943bb973ff!2sThe%20Institution%20of%20Electronics%20and%20Telecommunication%20Engineers%20(I%20E%20T%20E)%20Chennai%20Centre!5e0!3m2!1sen!2sin!4v1693405598338!5m2!1sen!2sin"width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no"></iframe>
      <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div class="lg:w-1/2 px-6">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-md">ADDRESS</h2>
          <p class="mt-1">IETE Chennai centre, No: 37,
Conran Smith Road Entrance Peters Road,
Gopalapuram,Chennai, <br />
Tamil Nadu 600086</p>
        </div>
        <form action='' class="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-md">EMAIL</h2>
          <a href="mailto:ietechennai@gmail.com" class="text-indigo-500 leading-relaxed">ietechennai@gmail.com</a>
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-md mt-4">PHONE</h2>
          <p class="leading-relaxed">044 2835 0773</p>
        </form>
      </div>
    </div>
    <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 class="text-gray-900 text-3xl mb-1 font-medium title-font">Contact us to know more</h2>
      <div class="relative mb-4">
        <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div class="relative mb-4">
        <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <a href='mailto:ietechennai@gmail.com' class=" text-white text-center cursor-pointer bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Share Response </a>
      
    </div>
  </div>
</section>
  )
  
}
