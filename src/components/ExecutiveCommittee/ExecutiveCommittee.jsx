import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import { motion, useScroll,useSpring } from "framer-motion";

export default function ExecutiveCommittee() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  Aos.init();
	useEffect(() => {
		document.title="IETE - Executive Committee";
		 });
  return (
	<div className='w-[100%] '>
    <motion.div
        className="progress-bar fixed top-0 left-0 right-0 h-[5px] bg-red-600 z-50 origin-[0%] "
        style={{ scaleX: scaleX }}
      />
	 <section class="text-gray-600  body-font">
  <div  class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="text-4xl font-medium title-font mb-4 text-gray-900">Committee members</h1>
    </div>
    <div class="flex flex-wrap justify-center -m-4">
      <div class="p-4 lg:w-1/4 md:w-1/4">
        <div  data-aos="zoom-out" data-aos-duration="1000" class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56  object-contain bg-grey-900 object-center mb-4" src="https://ik.imagekit.io/iete/assets/6.jpg?updatedAt=1693499088906" />
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Dr.N.Venkateswaran</h2>
            <h3 class="text-gray-500 mb-3">Chairman</h3>
            <p class="mb-4">Professor,Dept. of ECE
Sri Siva Subramaniya Nadar College Of Engineering</p>
            
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/4">
        <div data-aos="zoom-out" data-aos-duration="1000" class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg  w-full h-56 object-contain object-center mb-4" src="https://ik.imagekit.io/iete/assets/tata_sudhakar.jpeg?updatedAt=1693499089853" />
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Dr. Tata Sudhakar</h2>
            <h3 class="text-gray-500 mb-3">Immd Post Chairman</h3>
            <p class="mb-4">National Institute of Ocean Technology | NIOT · Ocean Electronics
Doctor of Engineering</p>
            
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/4">
        <div data-aos="zoom-out" data-aos-duration="1000" class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg  w-full h-56 object-contain object-center mb-4" src="https://ik.imagekit.io/iete/assets/blank-profile-picture-973460_640.webp?updatedAt=1693499085142" />
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Mr. Shakthi Murugan</h2>
            <h3 class="text-gray-500 mb-3">Honarary Secretary</h3>
            <p class="mb-4">Assistant Professor / ECE
Jeppiaar Maamallan Engineering College</p>
            
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/4">
        <div data-aos="zoom-out" data-aos-duration="1000" class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-contain object-center mb-4" src="https://ik.imagekit.io/iete/assets/4.jpg?updatedAt=1693499088243" />
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Mrs T J Jeyaprabha</h2>
            <h3 class="text-gray-500 mb-3">Honarary Treasurer</h3>
            <p class="mb-4">Assistant Professor / ECE
Sri Venkateswara College of Engineering</p>
            
          </div>
        </div>
      </div>
	  <div class="p-4 lg:w-1/4 md:w-1/4">
        <div data-aos="zoom-out" data-aos-duration="1000" class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-contain object-center mb-4" src="https://ik.imagekit.io/iete/assets/blank-profile-picture-973460_640.webp?updatedAt=1693499085142" />
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Dr C Udayakumar</h2>
            <h3 class="text-gray-500 mb-3">EC Member</h3>
            <p class="mb-4"></p>
            
          </div>
        </div>
      </div>
	  <div class="p-4 lg:w-1/4 md:w-1/4">
        <div data-aos="zoom-out" data-aos-duration="1000"  class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-contain object-center mb-4" src="https://ik.imagekit.io/iete/assets/blank-profile-picture-973460_640.webp?updatedAt=1693499085142" />
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Dr V Thulasibai</h2>
            <h3 class="text-gray-500 mb-3">EC Member</h3>
            <p class="mb-4"></p>
            
          </div>
        </div>
      </div>
	  <div class="p-4 lg:w-1/4 md:w-1/4">
        <div data-aos="zoom-out" data-aos-duration="1000" class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-contain object-center mb-4" src="https://ik.imagekit.io/iete/assets/5.jpg?updatedAt=1693499088882" />
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Mr D Vijendrababu</h2>
            <h3 class="text-gray-500 mb-3">EC Member</h3>
            <p class="mb-4"></p>
            
          </div>
        </div>
      </div>
	  <div class="p-4 lg:w-1/4 md:w-1/4">
        <div data-aos="zoom-out" data-aos-duration="1000" class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-contain object-center mb-4" src="https://ik.imagekit.io/iete/assets/blank-profile-picture-973460_640.webp?updatedAt=1693499085142" />
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Shri Ganapathy Suresh</h2>
            <h3 class="text-gray-500 mb-3">EC Member</h3>
            <p class="mb-4"></p>
            
          </div>
        </div>
      </div>
	  <div class="p-4 lg:w-1/4 md:w-1/4">
        <div data-aos="zoom-out" data-aos-duration="1000" class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-contain object-center mb-4" src="https://ik.imagekit.io/iete/assets/arunkumar.jpeg?updatedAt=1693499086689" />
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Shri S Arun Kumar</h2>
            <h3 class="text-gray-500 mb-3">EC Member</h3>
            <p class="mb-4"></p>
            
          </div>
        </div>
      </div>
	  <div class="p-4 lg:w-1/4 md:w-1/4">
        <div data-aos="zoom-out" data-aos-duration="1000" class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-contain object-center mb-4" src="https://ik.imagekit.io/iete/assets/blank-profile-picture-973460_640.webp?updatedAt=1693499085142" />
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Shri S Madivaanan</h2>
            <h3 class="text-gray-500 mb-3">EC Member</h3>
            <p class="mb-4"></p>
            
          </div>
        </div>
      </div>
	  <div class="p-4  lg:w-1/4 md:w-1/4">
        <div data-aos="zoom-out" data-aos-duration="1000" class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-contain object-center mb-4" src="https://ik.imagekit.io/iete/assets/dr_vaishali.jpg?updatedAt=1693499089691" />
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Dr Vaishali D</h2>
            <h3 class="text-gray-500 mb-3">Co-opted Member</h3>
            <p class="mb-4"></p>
            
          </div>
        </div>
      </div>
	  <div class="p-4 lg:w-1/4 md:w-1/4">
        <div data-aos="zoom-out" data-aos-duration="1000" class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-contain object-center mb-4" src="https://ik.imagekit.io/iete/assets/arun.jpeg?updatedAt=1693499083870" />
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Mr Arun</h2>
            <h3 class="text-gray-500 mb-3">Co-opted Member</h3>
            <p class="mb-4"></p>
            
          </div>
        </div>
      </div>
	  <div class="p-4 lg:w-1/4 md:w-1/4">
        <div data-aos="zoom-out" data-aos-duration="1000" class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-contain object-center mb-4" src="https://ik.imagekit.io/iete/assets/sumathi.jpeg?updatedAt=1693499055020" />
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Dr. K. Sumathi</h2>
            <h3 class="text-gray-500 mb-3">Co-opted Member</h3>
            <p class="mb-4"></p>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section> 
	</div>
  )
}
