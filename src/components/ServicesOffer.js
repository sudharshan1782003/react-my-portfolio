import React from 'react'
import { FaComputer } from "react-icons/fa6";
import { TfiWrite } from "react-icons/tfi"
import { TfiLayoutMediaLeft } from "react-icons/tfi"

const ServicesOffer = () => {
  return (
     <>
   <div className='flex flex-col items-center'>
    <div className='flex flex-col items-center justify-center '>
      <h1 className='max-[768px]:hidden text-7xl font-bold' style={{opacity: 0.1, zIndex: 0}}>SERVICES I OFFER</h1>
      <h3 className='text-xl text-sky-500  absolute font-bold min-[1900px]:text-3xl'>SERVICES I OFFER</h3>
   </div>
  <div className='max-[768px]:flex max-[768px]:flex-col pl-5 flex w-full items-center justify-center pt-10  gap-5' >
    <section className=' flex items-center justify-center  '>
      <article className='w-80 min-[1900px]:w-96 flex flex-col items-center justify-center gap-3 p-4 border-2 border-sky-500 rounded-md'>
        <FaComputer size={80} className='text-sky-500' /> 
        <h3 className='font-bold min-[1900px]:text-2xl'>Grapic Design</h3>
        <p className='text-gray-500 min-[1900px]:text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis similique quaerat, magnam iusto repudiandae dicta eaque, repellat hic accusantium veniam nihil. Reprehenderit ipsam magni nesciunt veritatis, rem necessitatibus error ex?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae nostrum assumenda quidem deleniti tempore quia atque ut </p>
        <button className='bg-sky-500 w-28 text-black rounded-md min-[1900px]:text-2xl hover:bg-black hover:border-r-2
            hover:border-sky-500 hover:text-white hover:border-b-2'>Hire Me</button>
      </article>
    </section>
    <section className='flex items-center justify-center'>
      <article className='w-80 min-[1900px]:w-96 flex flex-col items-center justify-center gap-3 p-4 border-2 border-sky-500 rounded-md'>
        <TfiLayoutMediaLeft size={80} className='text-sky-500' /> 
        <h3 className='font-bold min-[1900px]:text-2xl'>Social Media Management</h3>
        <p className='text-gray-500 min-[1900px]:text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis similique quaerat, magnam iusto repudiandae dicta eaque, repellat hic accusantium veniam nihil. Reprehenderit ipsam magni nesciunt veritatis, rem necessitatibus error ex?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae nostrum assumenda quidem deleniti tempore quia atque ut </p>
        <button className='bg-sky-500 w-28 text-black rounded-md min-[1900px]:text-2xl hover:bg-black hover:border-r-2
            hover:border-sky-500 hover:text-white hover:border-b-2'>Hire Me</button>
      </article>
    </section>
    <section className='flex items-center justify-center'>
      <article className='w-80 min-[1900px]:w-96 flex flex-col items-center justify-center gap-3 p-4 border-2 border-sky-500 rounded-md'>
        <TfiWrite size={80} className='text-sky-500' /> 
        <h3 className='font-bold min-[1900px]:text-2xl'>Content Writing</h3>
        <p className='text-gray-500 min-[1900px]:text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis similique quaerat, magnam iusto repudiandae dicta eaque, repellat hic accusantium veniam nihil. Reprehenderit ipsam magni nesciunt veritatis, rem necessitatibus error ex?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae nostrum assumenda quidem deleniti tempore quia atque ut </p>
        <button className='bg-sky-500 w-28 text-black rounded-md min-[1900px]:text-2xl hover:bg-black hover:border-r-2
            hover:border-sky-500 hover:text-white hover:border-b-2'>Hire Me</button>
      </article>
    </section>
  </div>
  </div>
   </>
  )
}

export default ServicesOffer;