import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import { motion, useScroll,useSpring } from "framer-motion";

export default function Events() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  Aos.init();
	useEffect(() => {
		document.title="IETE - Events";
		 });
  return (
	<div className='bg-[url(https://ik.imagekit.io/iete/assets/back.png)] bg-cover'>
    <motion.div
        className="progress-bar fixed top-0 left-0 right-0 h-[5px] bg-red-600 z-50 origin-[0%] "
        style={{ scaleX: scaleX }}
      />
	  <section class="text-gray-600 body-font">
  <div class="container px-5 py-20 mx-auto">
  <div class="flex flex-col text-center w-full mb-10">
      <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Events</h1>
     
    </div>
    <div class="flex flex-wrap -m-4">
      <div data-aos-duration="1000" data-aos="zoom-in" class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://ik.imagekit.io/iete/assets/Slide4.jpeg?updatedAt=1693417547699" alt="content"/>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">PROFESSIONAL RESUME WRITING</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">17/10/20</h2>
          <p class="leading-relaxed text-base">Mr.M.Vigneshwaran (Softskill Trainer/ e-learning developer) gave a guidance session on RESUME building in a Professional manner</p>
        </div>
      </div>
      <div data-aos-duration="1000" data-aos="zoom-in" class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://ik.imagekit.io/iete/assets/IMG-20230831-WA0003.jpg?updatedAt=1693463872758" alt="content" />
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">EVOLUTION OF COMPUTING AND SKILL SETS FOR THE FUTURE</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">17/10/20</h2>
          <p class="leading-relaxed text-base">Mr.MallikMahalingam (CEO,Springpath (CISCO)) commenced with the evolution of hardware and operating software</p>
        </div>
      </div>
      <div data-aos-duration="1000" data-aos="zoom-in" class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://ik.imagekit.io/iete/assets/IMG-20230831-WA0002.jpg?updatedAt=1693463848362" alt="content" />
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">EASE THE ERROR 1.0</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">10-11/10/20</h2>
          <p class="leading-relaxed text-base">24 Hour national level hackathon which challenged students to think out-of-the-box and offer innovative ideas</p>
        </div>
      </div>
      <div data-aos-duration="1000" data-aos="zoom-in" class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://ik.imagekit.io/iete/assets/IMG-20230831-WA0005.jpg?updatedAt=1693463887753" alt="content" />
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">5G AND IT’S HISTORYs</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">20/09/20</h2>
          <p class="leading-relaxed text-base">Mr.SunderPalaniraj (Director IC-design, TDKInvenSense) gave a technical talk on communication networks</p>
        </div>
      </div>
    </div>
	<div class="flex flex-wrap -m-4 py-2">
      <div data-aos-duration="1000" data-aos="zoom-in" class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://ik.imagekit.io/iete/assets/Slide1.jpeg?updatedAt=1693464296438" alt="content"/>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">COVID 19 AND AI SOLUTIONS</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">05/09/20</h2>
          <p class="leading-relaxed text-base">Quiz on ‘COVID19 and AI Solutions”. The event started with the note on ‘Revering of knowledge</p>
        </div>
      </div>
      <div data-aos-duration="1000" data-aos="zoom-in" class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://ik.imagekit.io/iete/assets/Slide11.jpeg?updatedAt=1693464321199" alt="content" />
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">OCEAN TECHNOLOGY IN NIOT</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">29/08/20</h2>
          <p class="leading-relaxed text-base">Mr.TATA SUDHAKAR (former IETE Che Chairman) explained about the role of Ocean Technology for society, Coastal Protection</p>
        </div>
      </div>
      <div data-aos-duration="1000" data-aos="zoom-in" class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://ik.imagekit.io/iete/assets/Slide10.jpeg?updatedAt=1693464333908" alt="content" />
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">A REALISTIC APPROACH TOWARDS DATA SCIENCE</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">23/08/20</h2>
          <p class="leading-relaxed text-base">Mr.Sivasubramanian (Business Intelligence & Data Analyst)covered various topics on data science like the sectors</p>
        </div>
      </div>
      <div data-aos-duration="1000" data-aos="zoom-in" class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://ik.imagekit.io/iete/assets/Slide9.jpeg?updatedAt=1693464347224" alt="content" />
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">MATLAB PROGRAMMING TECHNIQUES</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">22/08/20</h2>
          <p class="leading-relaxed text-base">DR.Markkandan (Asst. Professor, Anand Institute of Higher Technology) talked about MATLAB Fundamentals, Applications, Sample Matlab</p>
        </div>
      </div>
    </div>
	<div class="flex flex-wrap -m-4 py-2">
      <div data-aos-duration="1000" data-aos="zoom-in" class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://ik.imagekit.io/iete/assets/IMG-20230831-WA0005.jpg?updatedAt=1693463887753" alt="content"/>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">AN INTRODUCTION TO IoT AND APPLICATIONS</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">04/07/20</h2>
          <p class="leading-relaxed text-base">Mr.G.L.GangaPrasad (Senior Director, CFDOAC) talked on Basics of IoT, why IoT, components, communication</p>
        </div>
      </div>
      <div data-aos-duration="1000" data-aos="zoom-in" class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://ik.imagekit.io/iete/assets/Slide1.jpeg?updatedAt=1693464296438" alt="content" />
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">ELECTRONIC CONTROL UNIT FOR HEAVY DUTY TRUCKS</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">14/08/20</h2>
          <p class="leading-relaxed text-base">Mr.K.V.Nagesh (Founder and Managing Director of Data Care Systems) talked on speaking about engine cooling, speed & preheat control</p>
        </div>
      </div>
      <div data-aos-duration="1000" data-aos="zoom-in" class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://ik.imagekit.io/iete/assets/IMG-20230831-WA0003.jpg?updatedAt=1693463872758" alt="content" />
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">RECENT TRENDS IN OPTICAL COMMUNICATION SYSTEMS</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">  08/08/20</h2>
          <p class="leading-relaxed text-base">Sri A.Sadagopan (Asst. General Manager(Retd.), BSNL talked on Recent Trends in optical Communication</p>
        </div>
      </div>
      <div data-aos-duration="1000" data-aos="zoom-in" class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://ik.imagekit.io/iete/assets/Slide10.jpeg?updatedAt=1693464333908" alt="content" />
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SOFTWARE DESIGN ASPECTS OF WLAN ACCESS POINTS</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">25/07/20</h2>
          <p class="leading-relaxed text-base">Mr. Ashok Govindarajan (Head of Wireless Networks, Zilogic) started the session with how WLAN access points</p>
        </div>
      </div>
    </div>
  </div>
</section>
	</div>
  )
}
