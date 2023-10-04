import React from 'react'
import Myicon from '../assets/N-removebg-preview.png'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
   <>
    <div className=' max-[768px]:hidden bg-gray-900 w-72 h-screen fixed flex flex-col items-center gap-10 pt-8'>
        <img src={Myicon} className='w-40 h-40 rounded-full' alt="companyLogo" />
       <div className='flex flex-col items-center gap-5'>
       <h2 className='font-bold text-sky-500 text-3xl fonts'>SUDHARSAN</h2>
        <div className='text-gray-300 flex flex-col gap-5 items-center text-xl fonts min-[1900px]:text-3xl min-[1900px]:gap-10'>
        <Link to='/' className='hover:text-sky-500'>Home</Link>
        <a href='#SERVICES I OFFER' className='hover:text-sky-500'>Services</a>
        <a href="#myworks" className='hover:text-sky-500'>My works</a>
        <a href="#about me" className='hover:text-sky-500'>About Me</a>
        <a href="#testimonials" className='hover:text-sky-500'>Testimonials</a>
        <a href="#digital products" className='hover:text-sky-500'>Digital Products</a>
        <a href="#contactme" className='hover:text-sky-500'>Contact Me</a>
        </div>
       </div>
    </div>
    <div className='max-[768px]:flex flex-col hidden pt-8 pl-8'>
      <h1 className='text-3xl text-sky-500 font-bold'>SUDHARSAN</h1>
      <h3 className='text-xl text-gray-300 font-mono'>Grapic Designer</h3>
      <div className='text-gray-300 z-10 flex flex-col pt-8 gap-5'>
        <Link to='/'  className='hover:text-sky-500'>Home</Link>
        <a href="#SERVICES I OFFER" className='hover:text-sky-500'>Services</a>
        <a href="#myworks" className='hover:text-sky-500'>My works</a>
        <a href="#about me" className='hover:text-sky-500'>About Me</a>
        <a href="#testimonials" className='hover:text-sky-500'>Testimonials</a>
        <a href="#digital products" className='hover:text-sky-500'>Digital Products</a>
        <a href="#contactme" className='hover:text-sky-500'>Contact Me</a>
   </div>
    <img src={Myicon} className='w-80 h-80 rounded-full absolute top-28 left-12' style={{zIndex : -9999}} alt="companyLogo" />
   <div className='flex text-white pt-10 gap-6'>
   <FaInstagram size={24}  className='border-white cursor-pointer' />
       <FaFacebookF size={24} className='border-white cursor-pointer' />
       <FaTwitter size={24} className='border-white cursor-pointer' />
       <FaYoutube size={24} className='border-white cursor-pointer' />
       <FaPinterestP size={24} className='border-white cursor-pointer' />
       <FaLinkedinIn size={24} className='border-white cursor-pointer' />
       
   </div>
    </div>

   
    </>
  )
}

export default Navbar