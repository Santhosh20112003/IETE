import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import { motion, useScroll,useSpring } from "framer-motion";

export default function About() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
	useEffect(() => {
    Aos.init();
	 document.title="IETE - About";
	  });
  return (
	
	<div>
     <motion.div
        className="progress-bar fixed top-0 left-0 right-0 h-[5px] bg-red-600 z-50 origin-[0%] "
        style={{ scaleX: scaleX }}
      />
		<section id="main" class=" text-gray-600 body-font">
    <div class="flex flex-col text-center w-full mt-10">
      <h1 class="text-4xl font-medium title-font  text-gray-900">About</h1>
    </div>
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img data-aos-duration="1000" data-aos="zoom-out" class="object-cover object-center rounded" alt="hero" src="https://ik.imagekit.io/iete/assets/about.jpg?updatedAt=1693463824579" />
    </div>
    <div data-aos-duration="1000" data-aos="fade-left" class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col gap-2 md:items-start md:text-left items-center text-center">
      <h1 className='text-xl w-full text-gray-900'>IETE - The Institution of Electronics and Telecommunication Engineers</h1>
      <p class="text-sm leading-relaxed">Founded in 1953, the Institution of Electronics and Telecommunication Engineers (IETE) is a leading professional society. Its vision is to reach the unreached and empower the youth through Technical Education and Skill development with a Mission for Advancement of Electronics, Telecommunication, Information Technology & other related disciplines; to contribute in Nation's Human Resource & Infrastructure Development through our Engineers & Scientists. The Government of India, Ministry of Science and Technology, Department of Scientific & Industrial Research has recognized IETE as a Scientific and Industrial Research Organization (SIRO). The Institution has also been notified as an Educational Institution of National Eminence by the Government of India. IETE is governed by its elected Governing Council headed by an elected President. It has on its roll the Secretary General – the head of IETE Secretariat as Chief Executive. The Institution is managed through various Committees and Boards nominated by the Governing Council. The 63 Centers are spread all over India 02 abroad and are managed by respective Executive Committees. To keep pace with technological development and achieve the mission, it organizes conferences, conventions, symposia, seminars, workshops, publications and brain storming sessions for continued knowledge upgradation of its members.</p>
      
    </div>
  </div>
</section>
<section class="text-gray-600 body-font">
  <div class="container flex flex-wrap px-5 py-24 mx-auto items-center">
    <div data-aos-duration="1000" data-aos="fade-right" class="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Chennai Center</h1>
      <p class="leading-relaxed text-base">Chennai Centre of IETE is committed to attain commanding heights and achieve the status of “Centre of Excellence” in Technical, Engineering & Management education by harnessing the best practices in educational innovation and through its concerted endeavors like quality teaching, industrial consultancy and training to the aspirants including corporate training.<br></br>

The Centre assigns top priority to the basic need for ‘education transformation’ in keeping pace with time, and aims at to develop the highest quality of manpower to cater to the needs & expectations of industry, R&D and educational institutions, with higher degree of employability for today and tomorrow.</p>
      
    </div>
    <div data-aos-duration="1000" data-aos="fade-left" class="flex flex-col md:w-1/2 md:pl-12">
	<h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Goals</h1>
      <p class="leading-relaxed text-base"> <b>Vision:</b> Reaching the un-reached and empowering the youth through Technical Education and Skill Development.<br></br>
 <b>Mission:</b> Advancement of Electronics, Telecommunication, Information Technology & other related disciplines to contribute in Nation’s Human Resource & Infrastructure Development through our Engineers.
 <br></br>
 <b>Motives:</b> IETE is helping it's students to learn and grow in the emerging field of Electronics and Telecommunication. One of the missions of IETE is to provide the best mode of studying a Btech degree programme..</p>
      
    </div>
  </div>
</section>
<section class="bg-gray-800 text-slate-400 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4 text-center">
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">12060</h2>
        <p class="leading-relaxed">Students</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">13592</h2>
        <p class="leading-relaxed">Staff</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">42</h2>
        <p class="leading-relaxed">Events</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">15</h2>
        <p class="leading-relaxed">Colleges</p>
      </div>
    </div>
  </div>
</section>
	 <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">List Of Colleges</h1>
    </div>
    <div class="flex flex-wrap -m-2">
      <div class="p-2 lg:w-1/3 md:w-1/3 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://ik.imagekit.io/iete/assets/download%20(1).jpeg?updatedAt=1693548732607" />
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Sri Venkateswara College of Engineering, Sriperambadur</h2>
            
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/3 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://ik.imagekit.io/iete/assets/base.png?updatedAt=1693548728508" />
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">
Panimalar Institute of Technology</h2>
            
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/3 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://ik.imagekit.io/iete/assets/download%20(1).png?updatedAt=1693548737027" />
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">
Easwari Engineering College</h2>
            
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/3 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://ik.imagekit.io/iete/assets/download%20(2).png?updatedAt=1693548761258" />
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">
Veltech Multi Engineering College</h2>
            
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/3 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://ik.imagekit.io/iete/assets/download%20(3).png?updatedAt=1693548746741" />
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">
SRM Institute of Science and Technology</h2>
            
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/3 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://ik.imagekit.io/iete/assets/download%20(4).png?updatedAt=1693548742336" />
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">
Jeppiar Institute of Technology</h2>
           
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/3 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://ik.imagekit.io/iete/assets/download%20(2).jpeg?updatedAt=1693548769814" />
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">RMK College of Engineering and Technology</h2>
            
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/3 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://ik.imagekit.io/iete/assets/download%20(5).png?updatedAt=1693548765684" />
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">
Velammal Engineering College</h2>
           
          </div>
        </div>
      </div>
	  <div class="p-2 lg:w-1/3 md:w-1/3 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://ik.imagekit.io/iete/assets/download%20(7).jpeg?updatedAt=1693549059287" />
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">KCG College of Technology</h2>
           
          </div>
        </div>
      </div>
	  <div class="p-2 lg:w-1/3 md:w-1/3 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://ik.imagekit.io/iete/assets/download%20(2).png?updatedAt=1693548761258" />
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">
Dr Rangarajan Dr Sakunthala Engg College</h2>
            
          </div>
        </div>
      </div>
	  <div class="p-2 lg:w-1/3 md:w-1/3 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://ik.imagekit.io/iete/assets/download%20(4).jpeg?updatedAt=1693548752257" />
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">
Saveetha Engineering College</h2>
          
          </div>
        </div>
      </div>
	  <div class="p-2 lg:w-1/3 md:w-1/3 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://ik.imagekit.io/iete/assets/download%20(6).jpeg?updatedAt=1693548773961" />
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Dr. M G R Educational & Research Institute</h2>
            
          </div>
        </div>
      </div>
	  <div class="p-2 lg:w-1/3 md:w-1/3 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://ik.imagekit.io/iete/assets/download%20(6).jpeg?updatedAt=1693548773961" />
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">
Dr. M G R Educational & Research Institute</h2>
           
          </div>
        </div>
      </div>
	  <div class="p-2 lg:w-1/3 md:w-1/3 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://ik.imagekit.io/iete/assets/download%20(5).jpeg?updatedAt=1693548756612" />
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">DMI College of Engineering</h2>
         
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/3 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-contain object-center flex-shrink-0 rounded-full mr-4" src="https://ik.imagekit.io/iete/assets/download%20(6).png?updatedAt=1693548778771" />
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">MISRIMAL NAVAJEE MUNOTH JAIN ENGINEERING COLLEGE</h2>
         
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
	</div>
  )
}
