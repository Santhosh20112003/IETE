import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import { motion, useScroll,useSpring } from "framer-motion";

export default function Membership() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  Aos.init();
	useEffect(() => {
		document.title="IETE - MemberShip";
		 });
  return (
	<div>
	  <section class="text-gray-600 body-font overflow-hidden">
    <motion.div
        className="progress-bar fixed top-0 left-0 right-0 h-[5px] bg-red-600 z-50 origin-[0%] "
        style={{ scaleX: scaleX }}
      />
  <div class="container px-5 pb-24 pt-16 mx-auto">
    <div class="flex flex-col text-center w-full mb-16">
      <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Join MemberShip</h1>
     
    </div>
    <div class="flex flex-wrap justify-center -m-4">
     
      <div class="p-4 xl:w-1/4 md:w-1/2 w-full ">
        <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000" class="h-full p-6 rounded-lg border-2  border-indigo-500 flex flex-col justify-center relative overflow-hidden">
          <span class="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl ">MEMBERSHIP</span>
          
          <p>The IETE membership is available at different levels based on the applicants' academic qualifications and practical experience in electronics, telecommunications, computers, information technology and related areas. Applicants are invited to seek the highest membership grade they are qualified for. </p>
          
        </div>
      </div>
      <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000" class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
          <h2 class="text-xl tracking-widest title-font mb-10 font-medium">Corporate Members:</h2>
          
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Honorary fellow (HF) (elected),
          </p>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Distinguished Fellow (DF) (elected),
          </p>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Fellow (F),
          </p>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Member (M),
          </p>
          <p class="flex items-center text-gray-600 mb-6">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Associate member (AM)
          </p>
         <a rel="noreferrer" href="https://iete.org/index111.html" className='mt-2' target="_blank">
         <button class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Button
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button></a> 
          
          <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
        </div>
      </div>
      <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000" class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
          <h2 class="text-xl tracking-widest title-font mb-5 font-medium">Non-Corporate Members:</h2>
          
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Associate (A),
          </p>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Organisational Member (ORG)
          </p>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>AMIETE Student (AMIETE),
          </p>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>DIPIETE Student (DipIETE),
          </p>
          <p class="flex items-center text-gray-600 mb-6">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Diploma Member (DipIETE Passout) (DIP)
          </p>
          
          <a rel="noreferrer" href="https://iete.org/index111.html" target="_blank">
         <button class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Button
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button></a> 
          <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
        </div>
      </div>
      <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div data-aos="fade-right" data-aos-delay="400" data-aos-duration="1000" class="h-full p-6 rounded-lg  border-2 border-gray-300 flex flex-col justify-center items-center relative overflow-hidden">
          <h2 className="text-2xl mb-5 font-bold text-black">Common Links</h2>
          
          <a rel="noreferrer" target="_blank" href='https://iete.org/IETE1_CORPUP.pdf' class="flex items-center text-indigo-600 underline mb-2">
            Corporate Member
          </a>
          <a rel="noreferrer" target="_blank" href="https://iete.org/CE_Formup.pdf" class="flex items-center text-indigo-600 underline mb-2">
            Chartered Engineer
          </a>
          <a rel="noreferrer" target="_blank" href='https://iete.org/orgmemup.pdf' class="flex items-center text-indigo-600 underline mb-2">
            Organisational Member
          </a>
          <a rel="noreferrer" target="_blank" href='https://iete.org/AMMEM.pdf' class="flex items-center text-indigo-600 underline mb-2">
            AMIETE
          </a>
          <a rel="noreferrer" target="_blank" href='https://iete.org/DIPMEM.pdf' class="flex items-center text-indigo-600 underline mb-6">
            DIPIETE
          </a>
          
        </div>
      </div>
    </div>
  </div>
</section>
	</div>
  )
}
