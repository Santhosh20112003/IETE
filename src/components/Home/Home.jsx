import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";
import { motion, useScroll,useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
     const scaleX = useSpring(scrollYProgress, {
       stiffness: 100,
       damping: 30,
       restDelta: 0.001
     });
	useEffect(() => {
		document.title="IETE - Home";
    Aos.init();
   
		 });
     
  return (
	<>
	<div className=''>
  <motion.div
        className="progress-bar fixed top-0 left-0 right-0 h-[5px] bg-red-600 z-50 origin-[0%] "
        style={{ scaleX: scaleX }}
      />
	<section class="text-gray-600 body-font bg-[url(https://ik.imagekit.io/iete/assets/blurry-gradient-haikei.svg?updatedAt=1693550495862)] bg-cover bg-fixed">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col-reverse items-center">
    <div data-aos-duration="1000" data-aos="fade-right" class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1  class="title-font sm:text-5xl text-3xl mb-4 font-medium text-white">Learning Today,
        <br class="hidden lg:inline-block" />Leading Tomorrow
      </h1>
      <p  class="mb-8 leading-relaxed text-xl text-slate-300">ETE is governed by its elected Governing Council headed by an elected President. It has on its roll the Secretary General – the head of IETE Secretariat as Chief Executive.</p>
      <div class="flex justify-center">
        <Link to="/gallery">
        <button  class="flex hover:translate-x-3 transition-all items-center gap-4 text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 rounded text-lg">Explore Now<i className="fas  fa-arrow-right-long"></i></button></Link>
       
      </div>
      
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img data-aos-duration="1000" data-aos="fade-left" class="object-cover object-center rounded" alt="hero" src="https://ik.imagekit.io/iete/assets/Learning-bro%20(1)_animated.svg?updatedAt=1693508234288" />
    </div>
  </div>
  
</section>
<section data-aos-duration="1000" data-aos="zoom-in" class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">"INNOVATION FOR THE PEOPLE AND BY THE PEOPLE IS THE REACTION OF OUR NEW INDIA"</h1>
      <p className='text-md mb-3 text-slate-400'>- NARENDRA MODI, HON'BLE PRIME MINISTER OF INDIA.
</p>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Chennai Centre of IETE is committed to attain commanding heights and achieve the status of “Centre of Excellence” in Technical, Engineering & Management education by harnessing the best practices in educational innovation and through its concerted endeavors like quality teaching, industrial consultancy and training to the aspirants including corporate training.</p>
      <span className='pt-4'>
      <Link to="/about" class=" w-[100px] text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Read More</Link>
      </span>
    </div>
    
  </div>
</section>
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-10">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Recent Events</h1>
        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
     
    </div>
    <div class="flex flex-wrap -m-4">
      <div data-aos-duration="1000" data-aos="zoom-out"  data-aos-delay="100" class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://ik.imagekit.io/iete/assets/Slide4.jpeg?updatedAt=1693417547699" alt="content" />
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">PROFESSIONAL RESUME WRITING</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">17th October 2020 (Saturday)</h2>
          <p class="leading-relaxed text-base">Mr.M.Vigneshwaran (Softskill Trainer/ e-learning developer) gave a guidance session on RESUME building in a Professional manner</p>
        </div>
      </div>
      <div data-aos-duration="1000" data-aos="zoom-out"  data-aos-delay="200" class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://ik.imagekit.io/iete/assets/IMG-20230831-WA0003.jpg?updatedAt=1693463872758" alt="content" />
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">EVOLUTION OF COMPUTING AND SKILL SETS FOR THE FUTURE</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">17/10/2020</h2>
          <p class="leading-relaxed text-base">Mr.MallikMahalingam (CEO,Springpath (CISCO)) commenced with the evolution of hardware and operating software</p>
        </div>
      </div>
      <div data-aos-duration="1000" data-aos="zoom-out"  data-aos-delay="300" class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://ik.imagekit.io/iete/assets/IMG-20230831-WA0002.jpg?updatedAt=1693463848362" alt="content" />
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">EASE THE ERROR 1.0</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">October 10 & 11 2020</h2>
          <p class="leading-relaxed text-base">24 Hour national level hackathon which challenged students to think out-of-the-box and offer innovative ideas</p>
        </div>
      </div>
      <div data-aos-duration="1000" data-aos="zoom-out"  data-aos-delay="400" class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://ik.imagekit.io/iete/assets/IMG-20230831-WA0005.jpg?updatedAt=1693463887753" alt="content" />
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">5G AND IT’S HISTORYs</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">20/09/2020</h2>
          <p class="leading-relaxed text-base">Mr.SunderPalaniraj (Director IC-design, TDKInvenSense) gave a technical talk on communication networks</p>
        </div>
      </div>
    </div>
  </div>
</section>
	</div>
	</>
  )
}
