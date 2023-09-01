import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import { motion, useScroll,useSpring } from "framer-motion";

export default function Gallery() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  Aos.init();
	useEffect(() => {
		document.title="IETE - Gallery";
		 });
  return (
    <>
    <motion.div
        className="progress-bar fixed top-0 left-0 right-0 h-[5px] bg-red-600 z-50 origin-[0%] "
        style={{ scaleX: scaleX }}
      />
    <section class="text-gray-600 body-font">
    
    <div class="container px-5 pt-16 pb-10 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">IETE Collections</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Chennai Centre of IETE is committed to attain commanding heights and achieve the status of “Centre of Excellence” in Technical, Engineering & Management ..</p>
      </div>
      <div class="flex flex-wrap -m-4">
        <div class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative md:hover:motion-safe:animate-[bounce_2s_ease-in-out_infinite] cursor-pointer" data-aos="zoom-in" data-aos-duration="1000" >
            <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://ik.imagekit.io/iete/assets/chencon2022.jpeg?updatedAt=1693413810930" />
            <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">IETE CHENCON 2022 - Call for Papers</h2>
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Hybrid Mode- MAY 20 & 21, 2022</h1>
              <p class="leading-relaxed">"International Conference on Power of Artificial Intelligence and Machine Learning for Human Empowerment"</p>
            </div>
          </div>
        </div>
        <div class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative md:hover:motion-safe:animate-[bounce_2s_ease-in-out_infinite] cursor-pointer " data-aos="zoom-in" data-aos-duration="1000">
            <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://ik.imagekit.io/iete/assets/GC-meeting22Jul2023Dehradun.jpg?updatedAt=1693416733375" />
            <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">IETE</h2>
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">22 July 2023</h1>
              <p class="leading-relaxed">IETE Governing Council Meeting held at Dehradun on 22 July 2023</p>
            </div>
          </div>
        </div>
        <div class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative md:hover:motion-safe:animate-[bounce_2s_ease-in-out_infinite] cursor-pointer" data-aos="zoom-in" data-aos-duration="1000">
            <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://ik.imagekit.io/iete/assets/Slide4.jpeg?updatedAt=1693417547699" />
            <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">PROFESSIONAL RESUME WRITING</h2>
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">17/10/20</h1>
              <p class="leading-relaxed">Mr.M.Vigneshwaran (Softskill Trainer/ e-learning developer) gave a guidance session on RESUME building in a Professional manner</p>
            </div>
          </div>
        </div>
        <div class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative md:hover:motion-safe:animate-[bounce_2s_ease-in-out_infinite] cursor-pointer" data-aos="zoom-in" data-aos-duration="1000">
            <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://ik.imagekit.io/iete/assets/NoidaCentreNielitMoU.jpg?updatedAt=1693417396873" />
            <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">IETE Noida Centre and NIELIT</h2>
              
              <p class="leading-relaxed">IETE Noida Centre and NIELIT signed Business MoU at Noida Centre in the presence of President IETE, D G NIELIT, Noida Centre Chairman, IETE President elect Prof (Dr) A K Saini, Prof (Col) S L Kapoor (Retd), Secretary General and IETE Noida Centre EC Members, NIELIT Officials</p>
            </div>
          </div>
        </div>
        <div class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative md:hover:motion-safe:animate-[bounce_2s_ease-in-out_infinite] cursor-pointer" data-aos="zoom-in" data-aos-duration="1000">
            <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://ik.imagekit.io/iete/assets/Slide9.jpeg?updatedAt=1693464347224" />
            <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">MATLAB PROGRAMMING TECHNIQUES</h2>
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">22/08/20</h1>
              <p class="leading-relaxed">DR.Markkandan (Asst. Professor, Anand Institute of Higher Technology) talked about MATLAB Fundamentals, Applications, Sample Matlab</p>
            </div>
          </div>
        </div>
        <div class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative md:hover:motion-safe:animate-[bounce_2s_ease-in-out_infinite] cursor-pointer" data-aos="zoom-in" data-aos-duration="1000">
            <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://ik.imagekit.io/iete/assets/IMG-20221229-WA0023.jpg?updatedAt=1693417457097" />
            <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Dr Shiban Koul presentation</h2>
              
              <p class="leading-relaxed">Dr Shiban Koul presenting on IETE Journal of Research future plans to Governing Council Members at Clarion Hotel, Chennai on 24 Dec.2022, President IETE Prof (Dr) V Gunasekhar Reddy Presided.</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </section>
  <section class="text-gray-600 body-font md:hidden lg:hidden xl:hidden">
    <div class="container px-5 pb-5 mx-auto">   
      <div class="flex flex-wrap -m-4">
        <div class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative md:hover:motion-safe:animate-[bounce_2s_ease-in-out_infinite] cursor-pointer" data-aos="zoom-in" data-aos-duration="1000">
            <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://ik.imagekit.io/iete/assets/images%20(2).jpg?updatedAt=1693488849921" />
            
          </div>
        </div>
        <div class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative md:hover:motion-safe:animate-[bounce_2s_ease-in-out_infinite] cursor-pointer" data-aos="zoom-in" data-aos-duration="1000">
            <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://ik.imagekit.io/iete/assets/images%20(3).jpg?updatedAt=1693488943817" />
            
          </div>
        </div>
        <div class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative md:hover:motion-safe:animate-[bounce_2s_ease-in-out_infinite] cursor-pointer" data-aos="zoom-in" data-aos-duration="1000">
            <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://ik.imagekit.io/iete/assets/aurangabad8-9may23.jpg?updatedAt=1693417425466" />
            
          </div>
        </div>
        <div class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative md:hover:motion-safe:animate-[bounce_2s_ease-in-out_infinite] cursor-pointer" data-aos="zoom-in" data-aos-duration="1000">
            <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://ik.imagekit.io/iete/assets/IETEdoodarshand21Jul23Dehradun.jpg?updatedAt=1693417504526" />
            
          </div>
        </div>
        <div class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative md:hover:motion-safe:animate-[bounce_2s_ease-in-out_infinite] cursor-pointer" data-aos="zoom-in" data-aos-duration="1000">
            <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://ik.imagekit.io/iete/assets/images%20(1).jpg?updatedAt=1693488833041" />
            
          </div>
        </div>
        <div class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative md:hover:motion-safe:animate-[bounce_2s_ease-in-out_infinite] cursor-pointer" data-aos="zoom-in" data-aos-duration="1000">
            <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://ik.imagekit.io/iete/assets/images.jpg?updatedAt=1693488814502" />
            
          </div>
        </div>
      </div>
    </div>
  </section>
  
  
    
  <section class="text-gray-600 body-font hidden md:block xl:block">
  <div class="container px-5 pb-10 mx-auto flex flex-wrap">
    
    <div class="flex flex-wrap md:-m-2 -m-1">
      <div class="flex flex-wrap w-1/2">
        <div data-aos="zoom-in" data-aos-delay="100" class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://ik.imagekit.io/iete/assets/images%20(2).jpg?updatedAt=1693488849921" />
        </div>
        <div data-aos="zoom-in" data-aos-delay="200" class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://ik.imagekit.io/iete/assets/images%20(3).jpg?updatedAt=1693488943817" />
        </div>
        <div data-aos="zoom-in" data-aos-delay="300" class="md:p-2 p-1 w-full"> 
          <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://ik.imagekit.io/iete/assets/aurangabad8-9may23.jpg?updatedAt=1693417425466" />
        </div>
      </div>
      <div class="flex flex-wrap w-1/2">
        <div data-aos="zoom-in" data-aos-delay="400" class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://ik.imagekit.io/iete/assets/IETEdoodarshand21Jul23Dehradun.jpg?updatedAt=1693417504526  " />
        </div>
        <div data-aos="zoom-in" data-aos-delay="500" class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://ik.imagekit.io/iete/assets/Slide11.jpeg?updatedAt=1693464321199" />
        </div>
        <div data-aos="zoom-in" data-aos-delay="600" class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://ik.imagekit.io/iete/assets/images.jpg?updatedAt=1693488814502" />
        </div>
      </div>
    </div>
  </div>
</section> 

<section class="text-gray-600 body-font hidden md:block xl:block">
    
    <div class="container px-5  pb-10 mx-auto">
      
      <div class="flex flex-wrap -m-4">
        <div class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex h-[300px] overflow-hidden  cursor-pointer" data-aos="zoom-in" data-aos-duration="1000">
            <img alt="gallery" class="md:hover:scale-125 transition-transform absolute inset-0 w-full h-full object-cover object-center" src="https://ik.imagekit.io/iete/assets/5.jpg?updatedAt=1693593802810" />
           
          </div>
        </div>
        <div class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex h-[300px] overflow-hidden  cursor-pointer " data-aos="zoom-in" data-aos-duration="1000">
            <img alt="gallery" class="md:hover:scale-125 transition-transform absolute inset-0 w-full h-full object-cover object-center" src="https://ik.imagekit.io/iete/assets/22.jpg?updatedAt=1693593766669" />
           
          </div>
        </div>
        <div class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex h-[300px] overflow-hidden  cursor-pointer" data-aos="zoom-in" data-aos-duration="1000">
            <img alt="gallery" class="md:hover:scale-125 transition-transform absolute inset-0 w-full h-full object-cover object-center" src="https://ik.imagekit.io/iete/assets/16.jpg?updatedAt=1693593567064" />
            
          </div>
        </div>
        <div class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex h-[300px] overflow-hidden  cursor-pointer" data-aos="zoom-in" data-aos-duration="1000">
            <img alt="gallery" class="md:hover:scale-125 transition-transform absolute inset-0 w-full h-full object-cover object-center" src="https://ik.imagekit.io/iete/assets/15.jpg?updatedAt=1693593700064" />
           
          </div>
        </div>
        <div class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex h-[300px] overflow-hidden  cursor-pointer" data-aos="zoom-in" data-aos-duration="1000">
            <img alt="gallery" class="md:hover:scale-125 transition-transform absolute inset-0 w-full h-full object-cover object-center" src="https://ik.imagekit.io/iete/assets/iete.jpg?updatedAt=1693593602915" />
            
          </div>
        </div>
        <div class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex  h-[300px] overflow-hidden  cursor-pointer" data-aos="zoom-in" data-aos-duration="1000">
            <img alt="gallery" class="md:hover:scale-125 transition-transform absolute inset-0 w-full h-full object-cover object-center" src="https://ik.imagekit.io/iete/assets/6.jpg?updatedAt=1693593642825" />
           
          </div>
        </div>
      </div>
      
    </div>
  </section>


</>
  )
}
