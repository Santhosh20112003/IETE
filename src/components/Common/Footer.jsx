import React from 'react';


export default function Footer() {
  return (
	<footer className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 pt-16 mx-auto">
    <div className="flex flex-wrap md:text-left text-center order-first">
      <div className="lg:w-1/3 md:w-1/3 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-md mb-3">Links</h2>
        <nav className="list-none mb-10">
          <li>
            <a href='/home' className="text-gray-400 hover:text-white">Home</a>
          </li>
          <li>
            <a href='/about' className="text-gray-400 hover:text-white">About</a>
          </li>
          <li>
            <a href='/trainers' className="text-gray-400 hover:text-white">Executive Committe</a>
          </li><li>
            <a href='/events' className="text-gray-400 hover:text-white">Events</a>
          </li>

          
        </nav>
      </div>
	  <div class="lg:w-1/3 md:w-1/3 w-full px-4">
        <h2 class="title-font font-medium text-white tracking-widest text-md mb-3">Links</h2>
        <nav class="list-none mb-10">
		<li>
            <a href='/membership' className="text-gray-400 hover:text-white">MemberShip</a>
          </li>
		  <li>
            <a href='/gallery' className="text-gray-400 hover:text-white">Gallery</a>
          </li>
		  <li>
            <a href='/chencon' className="text-gray-400 hover:text-white">Chencon</a>
          </li>
		  <li>
            <a href='/contact' className="text-gray-400 hover:text-white">Contact</a>
          </li>
        </nav>
      </div>  
    <div className="lg:w-1/3 md:w-1/3 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">SUBSCRIBE</h2>
        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          <form action='mailto:ietechennai@gmail.com' className="relative w-40  sm:w-auto xl:mr-4 mb-3 lg:mr-0 sm:mr-4 mr-2">
            <label for="footer-field" className="leading-7 text-sm text-gray-400">Join Our Newsletter</label>
            <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
          </form>
          
        </div>
      </div>
    </div>
  </div>
  <div className="bg-gray-800 bg-opacity-75">
    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      <p className="flex title-font font-medium items-center md:justify-start justify-center text-white">
        <a href='/home#navbar'><img src="https://ik.imagekit.io/iete/assets/logo192.png?updatedAt=1693563289119" alt="logo" width="50px" height="50px" /></a>
        <span className="ml-3 text-xl">IETE Chennai</span>
      </p>
      <p className="text-sm text-gray-400 sm:ml-6 sm:mt-0 mt-4">© Copyright IETE Chennai. All Rights Reserved <br />
        <a href="https://santhosh-technologies.netlify.app" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">designed by Santhosh-Technologies</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a href='https://www.instagram.com/iete_chennai/?igshid=MzRlODBiNWFlZA%3D%3D' className="ml-3 text-gray-400">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a href='https://www.linkedin.com/feed/' className="ml-3 text-gray-400">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>
  );
}
