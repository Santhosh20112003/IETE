import React, { useState } from 'react';
import "../Common/common.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Nav = () => {
  Aos.init();
    let Links =[
      {name:"Home",link:"/home"},
      {name:"About",link:"/about"},
      {name:"Committe",link:"/trainers"},
      {name:"Events",link:"/events"},
      {name:"Membership",link:"/membership"},
	  {name:"Gallery",link:"/gallery"},
	  {name:"Chencon",link:"/chencon"},
	  {name:"Contact",link:"/contact"},
	  
    ];
    let [open,setOpen]=useState(false);
  return (
    <div id="navbar" className='shadow-md w-full'>
      <div className='md:flex sm:z-50 items-center justify-between py-4 navbar md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center 
      text-gray-800'>
        <span className='text-3xl mr-1 pt-2'>
       <a  href="/home#navbar"> <img src="https://ik.imagekit.io/iete/assets/logo192.png?updatedAt=1693563289119" alt="" className='w-[50px] h-[50px]' /></a>
        </span>
		<h1 className='sm:block 2xl:block hidden mt-2 ms-2 md:block text-5xl text-white'>IETE</h1>
		
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-8  cursor-pointer md:hidden'>
      <i className='fas text-white fa-bars' name={open ? 'close':'menu'}></i>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[30] left-0 w-full md:w-auto md:pl-0 pl-9 md:bg-transparent bg-blue-950 transition-all duration-500 ease-in ${open ? 'top-20 z-[-1]':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8  md:text-xl  md:my-0 my-7'>
              <a href={link.link} className= 'text-white hover:text-orange-600 hover:tran duration-500'>{link.name}</a>
            </li>
          ))
        }
        
      </ul>
	  
      </div>
    </div>
  )
}

export default Nav;