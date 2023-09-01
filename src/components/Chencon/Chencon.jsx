import { useEffect } from "react";
import React  from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import { motion, useScroll,useSpring } from "framer-motion";

function Chencon() {
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  let Chenlinks = {
    chencon2022:"https://ik.imagekit.io/iete/assets/chencon2022_proceedings.pdf?updatedAt=1693504824202",
    chencon2021:"https://ik.imagekit.io/iete/assets/chencon2021_proceedings.pdf?updatedAt=1693505148382"
  };

  let ChenNewsLink = {
    chenlink3:"https://ik.imagekit.io/iete/assets/chenlink1_3.pdf?updatedAt=1693505656859",
    chenlink2:"https://ik.imagekit.io/iete/assets/chenlink1_2.pdf?updatedAt=1693506122297",
    chenlink1:"https://ik.imagekit.io/iete/assets/chenlink1_1.pdf?updatedAt=1693506148238"
  }

	useEffect(() => {
    Aos.init();
		document.title="IETE - Chencon";
		 });
	return (
		<div>
      <motion.div
        className="progress-bar fixed top-0 left-0 right-0 h-[5px] bg-red-600 z-50 origin-[0%] "
        style={{ scaleX: scaleX }}
      />
			<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div  data-aos-duration="500" data-aos="zoom-in"  class="p-4 md:w-1/4  sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-fill transition-all hover:brightness-100 brightness-75 object-center h-full w-full" src="https://ik.imagekit.io/iete/assets/chencon2022.jpeg?updatedAt=1693504065372" />
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5">IETE CHENCON</h2>
        <p class="text-base leading-relaxed mt-2">International Conference on Power of Artificial Intelligence and Machine Learning for Human Empowerment</p>
        <span className="flex mt-4 flex-col">
        <a href={Chenlinks.chencon2022}
         class="text-indigo-500 inline-flex items-center mt-3">Chencon 2022
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
        <a href={Chenlinks.chencon2021} class="text-indigo-500 inline-flex items-center mt-3">Chencon 2021
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
        </span>
      </div>
	  <div data-aos-duration="500" data-aos="zoom-in"  class="p-4 md:w-1/4 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-fill transition-all hover:brightness-100 brightness-75  object-center h-full w-full" src="https://ik.imagekit.io/iete/assets/chenlink1_3.png?updatedAt=1693505824414" />
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Chenlink NewsLetter <br /> Vol 1, No 3</h2>
        <p class="text-base leading-relaxed mt-2">IETE Chennai Centre
No: 37,Conran Smith Road Entrance Peters Road, Gopalapuram,
Chennai, <br /> Tamil Nadu 600086 </p>
        <a href={ChenNewsLink.chenlink3} class="text-indigo-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div data-aos-duration="500" data-aos="zoom-in"  class="p-4 md:w-1/4 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-fill transition-all hover:brightness-100 brightness-75 object-center h-full w-full" src="https://ik.imagekit.io/iete/assets/chenlink1_2.png?updatedAt=1693506477852" />
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Chenlink NewsLetter <br /> Vol 1, No 2</h2>
        <p class="text-base leading-relaxed mt-2">IETE Chennai Centre
No: 37,Conran Smith Road Entrance Peters Road, Gopalapuram,
Chennai, <br /> Tamil Nadu 600086 </p>
        <a href={ChenNewsLink.chenlink2} class="text-indigo-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div data-aos-duration="500" data-aos="zoom-in"  class="p-4 md:w-1/4 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-fill transition-all hover:brightness-100 brightness-75 object-center h-full w-full" src="https://ik.imagekit.io/iete/assets/chenlink1_1.png?updatedAt=1693506477151" />
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Chenlink NewsLetter <br /> Vol 1, No 1</h2>
        <p class="text-base leading-relaxed mt-2">IETE Chennai Centre
No: 37,Conran Smith Road Entrance Peters Road, Gopalapuram,
Chennai, <br /> Tamil Nadu 600086 </p>
        <a href={ChenNewsLink.chenlink1} class="text-indigo-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>
		</div>
	)
}

export default Chencon
