import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import Laptopdesign from '../assets/images__1_-removebg-preview.png'


const Home = () => {
  return (
    <div>
       <div className='flex flex-col items-center  pt-28 min-[1900px]:pt-44 '>
      <div className='flex flex-col items-center gap-5'>
        <h3 className='min-[1900px]:text-xl'>Hi There.</h3>
        <h1 className='text-6xl font-bold'>I'm Sudharsan</h1>
      </div>
        <div className='flex flex-col items-center gap-7 mt-7'>
        <h2 className='text-2xl font-semibold'>Graphic Designer</h2>
       <div className='flex gap-5'>
       <button className='bg-sky-500 w-32 text-black rounded-md min-[1900px]:text-2xl min-[1900px]:w-48 hover:bg-black hover:border-r-2
            hover:border-sky-500 hover:text-white hover:border-b-2'>Hire Me</button>
        <button className='bg-black border-r-2 w-32 border-r-sky-500 border-b-2 border-b-sky-500 rounded-md min-[1900px]:text-2xl min-[1900px]:w-48 hover:bg-sky-500 hover:text-black'>Learn More</button>
       </div>
       <div className='flex gap-8'>
       <FaInstagram size={24}  className='border-white cursor-pointer' />
       <FaFacebookF size={24} className='border-white cursor-pointer' />
       <FaTwitter size={24} className='border-white cursor-pointer' />
       <FaYoutube size={24} className='border-white cursor-pointer' />
       <FaPinterestP size={24} className='border-white cursor-pointer' />
       <FaLinkedinIn size={24} className='border-white cursor-pointer' />
       <IoMailSharp size={24} className='border-white cursor-pointer' />
       </div>
       <img src={Laptopdesign} className='w-80 h-full min-[1900px]:w-96 ' alt="laptop" />
        </div>
       </div>
    </div>
  )
}

export default Home